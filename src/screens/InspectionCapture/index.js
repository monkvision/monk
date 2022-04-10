import * as WebBrowser from 'expo-web-browser';
import ExpoConstants from 'expo-constants';
import React, { useCallback, useEffect, useState } from 'react';
import { ScreenView } from '@monkvision/ui';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Capture, Controls, useUploads, Constants } from '@monkvision/camera';
import monk from '@monkvision/corejs';
import { useDispatch } from 'react-redux';
import * as names from 'screens/names';

import styles from './styles';

export default function InspectionCapture() {
  const route = useRoute();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { inspectionId } = route.params;

  const [success, setSuccess] = useState(false);
  const [cameraLoading, setCameraLoading] = useState(false);
  const uploads = useUploads({ sightIds: Constants.defaultSightIds });

  const handleNavigate = useCallback(() => {
    navigation.navigate(names.LANDING, { inspectionId });
  }, [inspectionId, navigation]);

  const handleSuccess = useCallback(async () => {
    if (success) {
      setCameraLoading(true);

      try {
        const params = { inspectionId, name: 'damage_detection', data: { status: 'TODO' } };
        const payload = await monk.entity.task.updateOne(params);
        const { entities, result } = payload;

        dispatch(monk.actions.gotOneTask({ entities, result, inspectionId }));
        setCameraLoading(false);

        const base = `https://${ExpoConstants.manifest.extra.ORGANIZATION_DOMAIN}`;
        const path = `/inspection/${inspectionId}`;
        const url = `${base}${path}`;
        WebBrowser.openBrowserAsync(url);

        handleNavigate();
      } catch (e) {
        setCameraLoading(false);
      }
    }
  }, [dispatch, handleNavigate, inspectionId, success]);

  const handleChange = useCallback((state) => {
    if (!success) {
      const { takenPictures, tour } = state.sights.state;
      const totalPictures = Object.keys(tour).length;
      const uploadState = Object.values(state.uploads.state);

      const fulfilledUploads = uploadState.filter(({ status }) => status === 'fulfilled').length;
      const retriedUploads = uploadState.filter(({ requestCount }) => requestCount > 1).length;

      const hasPictures = Object.keys(takenPictures).length === totalPictures;
      const hasBeenUploaded = (
        fulfilledUploads === totalPictures
       || retriedUploads >= totalPictures - fulfilledUploads
      );

      if (hasPictures && hasBeenUploaded) {
        setSuccess(true);
      }
    }
  }, [success]);

  const controls = [{
    disabled: cameraLoading,
    ...Controls.CaptureButtonProps,
  }];

  useEffect(handleSuccess, [handleSuccess, success]);

  return (
    <ScreenView style={styles.safeArea}>
      <Capture
        sightIds={Constants.defaultSightIds}
        inspectionId={inspectionId}
        controls={controls}
        loading={cameraLoading}
        uploads={uploads}
        onReady={() => setCameraLoading(false)}
        onStartUploadPicture={() => setCameraLoading(true)}
        onFinishUploadPicture={() => setCameraLoading(false)}
        onChange={handleChange}
      />
    </ScreenView>
  );
}
