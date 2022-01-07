import React, { useCallback, useMemo } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'react-native-paper';

import useUpload from 'hooks/useUpload';
import useViewpoints from 'hooks/useViewpoints';
import UploadFailureDialog from 'screens/InspectionCreate/UploadFailureDialog';
import useRequests from 'screens/InspectionCreate/useRequests';
import useScreen from 'screens/InspectionCreate/useScreen';

import { Platform } from 'react-native';
import { CameraView, useFakeActivity } from '@monkvision/react-native-views';
import ValidationDialog from 'screens/InspectionCreate/ValidationDialog';

import { GETTING_STARTED } from 'screens/names';

export default () => {
  const theme = useTheme();
  const navigation = useNavigation();
  const screen = useScreen();
  const requests = useRequests(screen);
  const viewpoints = useViewpoints();

  const { inspectionId } = screen.state;
  const trueActivity = requests.createInspection.isLoading || screen.state.isUploading;
  const [fakeActivity] = useFakeActivity(trueActivity);

  const handleSuccess = useCallback(({ camera, pictures }) => {
    camera.pausePreview();
    screen.setTourIsCompleted(true);
    screen.setVisibleDialog(true);
    requests.savePictures.preparePictures(pictures);
  }, [requests.savePictures, screen]);

  const handleClose = useCallback(() => {
    navigation.navigate(GETTING_STARTED);
  }, [navigation]);

  const handleTakePicture = useUpload({
    inspectionId,
    onSuccess: (id, uri) => {
      screen.setUploading(false);
      screen.setPicturesNotUploaded((prevState) => prevState.filter((pic) => {
        if (Platform.OS === 'web') {
          return pic.source.base64 !== uri;
        }
        return pic.source.uri !== uri;
      }));
    },
    onLoading: () => screen.setUploading(true),
    onError: () => {
      screen.setUploading(false);
      screen.setUploadHasFailed(true);
    },
  });

  const handleRefreshUpload = useCallback(() => {
    screen.setUploadHasFailed(false);
    screen.state.picturesNotUploaded.forEach((picture) => {
      handleTakePicture(
        Platform.OS === 'web'
          ? picture.source.base64
          : picture.source.uri,
        inspectionId,
        viewpoints.metadata,
      );
    });
  }, [handleTakePicture, inspectionId, viewpoints, screen]);

  const sightIds = useMemo(() => (
    screen.state.picturesNotUploaded.map((pic) => pic.sight.id)
  ), [screen.state.picturesNotUploaded]);

  return (
    <>
      <CameraView
        isLoading={fakeActivity}
        onTakePicture={(pic) => {
          screen.setPicturesNotUploaded((prevState) => [...prevState, pic]);
          if (!screen.state.uploadHasFailed) {
            handleTakePicture(
              Platform.OS === 'web'
                ? pic.source.base64
                : pic.source.uri,
              inspectionId,
              viewpoints.metadata,
            );
          }
        }}
        onSuccess={handleSuccess}
        onRefreshUpload={handleRefreshUpload}
        onCloseCamera={handleClose}
        sightIdsNotUploaded={sightIds}
        theme={theme}
      />
      <ValidationDialog requests={requests} screen={screen} />
      <UploadFailureDialog isVisible={screen.state.uploadHasFailed} />
    </>
  );
};
