import React, { useCallback, useMemo, useState } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';

import { useFocusEffect, useNavigation } from '@react-navigation/native';
import useRequest from 'hooks/useRequest';
import useMediaGallery from 'hooks/useMediaGallery';

import { CameraView, useFakeActivity } from '@monkvision/react-native-views';
import { Button, Dialog, Paragraph, Portal, useTheme } from 'react-native-paper';
import Drawing from 'components/Drawing';

import { GETTING_STARTED, INSPECTION_READ, LANDING } from 'screens/names';

import { createOneInspection, updateOneTaskOfInspection } from '@monkvision/corejs';

import useUpload from 'hooks/useUpload/index';
import completing from './assets/undraw_order_confirmed_re_g0if.svg';

const initialInspectionData = { tasks: { damage_detection: { status: 'NOT_STARTED' } } };

const styles = StyleSheet.create({
  dialog: {
    maxWidth: 450,
    alignSelf: 'center',
    padding: 12,
  },
  dialogDrawing: { display: 'flex', alignItems: 'center' },
  dialogContent: { textAlign: 'center' },
  dialogActions: { flexWrap: 'wrap' },
  button: { width: '100%', marginVertical: 4 },
});

export default () => {
  const theme = useTheme();
  const navigation = useNavigation();

  const [inspectionId, setInspectionId] = useState();
  const [isUploading, setUploading] = useState(false);
  const [isCompleted, setCompleted] = useState(false);
  const [isVisibleDialog, setVisible] = useState(false);
  const [taskUpdated, setTaskUpdated] = useState(false);

  const { isLoading } = useRequest(
    createOneInspection({ data: initialInspectionData }),
    { onSuccess: ({ result }) => setInspectionId(result) },
  );

  const { isLoading: isSaving, isSaved, saveToDevice, preparePictures } = useMediaGallery();

  const handleNext = useCallback(() => {
    navigation.navigate(INSPECTION_READ, { inspectionId });
  }, [inspectionId, navigation]);

  const { isLoading: isValidating, request: updateTask } = useRequest(
    updateOneTaskOfInspection({
      inspectionId,
      taskName: 'damage_detection',
      data: { status: 'TODO' },
    }),
    {
      onSuccess: () => {
        setTaskUpdated(true);
        handleNext();
      },
    },
    false,
  );

  const [fakeActivity] = useFakeActivity(isLoading || isUploading);

  const isNative = useMemo(
    () => Platform.select({ native: true, default: false }),
    [],
  );

  const handleSuccess = useCallback(({ camera, pictures }) => {
    camera.pausePreview();
    setCompleted(true);
    setVisible(true);
    preparePictures(pictures);
  }, [preparePictures]);

  const handleValidate = useCallback(() => {
    updateTask();
  }, [updateTask]);

  const handleSavePictures = useCallback(() => {
    saveToDevice();
  }, [saveToDevice]);

  const handleClose = useCallback(() => {
    navigation.navigate(GETTING_STARTED);
  }, [navigation]);

  const handleTakePicture = useUpload({
    inspectionId,
    onSuccess: () => setUploading(false),
    onLoading: () => setUploading(true),
    onError: () => setUploading(false),
  });

  useFocusEffect(
    useCallback(() => {
      if (isCompleted) { setVisible(true); }

      return () => {
        setVisible(false);
        if (isNative) {
          ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP)
            .then(() => ScreenOrientation.unlockAsync());
        }
      };
    }, [isCompleted, isNative]),
  );

  return (
    <>
      <CameraView
        isLoading={fakeActivity}
        onTakePicture={(picture) => handleTakePicture(
          Platform.OS === 'web'
            ? picture.source.base64
            : picture.source.uri,
          inspectionId,
        )}
        onSuccess={handleSuccess}
        onCloseCamera={handleClose}
        theme={theme}
      />
      <Portal>
        <Dialog
          visible={isVisibleDialog && isCompleted && !isUploading}
          style={styles.dialog}
          onDismiss={() => navigation.navigate(LANDING)}
        >
          <View style={styles.dialogDrawing}>
            <Drawing xml={completing} width="200" height="75" />
          </View>
          <Dialog.Title style={styles.dialogContent}>
            All images are uploaded
          </Dialog.Title>
          <Dialog.Content>
            <Paragraph style={styles.dialogContent}>
              Would you like to start the analyze ?
            </Paragraph>
          </Dialog.Content>
          <Dialog.Actions style={styles.dialogActions}>
            {Platform.OS !== 'web' && (
              <Button
                icon={isSaving || isSaved ? undefined : 'download'}
                loading={isSaving}
                disabled={isSaving || isSaved}
                onPress={handleSavePictures}
                mode="outlined"
                style={styles.button}
              >
                { isSaved ? 'Photos Saved !' : 'Save in device' }
              </Button>
            )}
            {taskUpdated ? (
              <Button
                onPress={handleNext}
                mode="contained"
                labelStyle={{ color: 'white' }}
                color={theme.colors.success}
                style={styles.button}
              >
                See inspection
              </Button>
            ) : (
              <Button
                icon={isValidating ? undefined : 'eye-circle-outline'}
                onPress={handleValidate}
                loading={isValidating}
                disabled={isValidating}
                mode="contained"
                labelStyle={{ color: 'white' }}
                color={theme.colors.success}
                style={styles.button}
              >
                Analyze with AI
              </Button>
            )}
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </>
  );
};
