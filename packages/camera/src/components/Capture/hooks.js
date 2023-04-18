import monk, { useMonitoring } from '@monkvision/corejs';
import { utils } from '@monkvision/toolkit';
import axios from 'axios';
import { Buffer } from 'buffer';
import { manipulateAsync, SaveFormat } from 'expo-image-manipulator';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { Platform } from 'react-native';
import Actions from '../../actions';
import Constants from '../../const';
import log from '../../utils/log';

/**
 * @param current
 * @return {string}
 */
export function useTitle({ current }) {
  return useMemo(() => {
    if (!current.metadata) { return ''; }
    const { label, id } = current.metadata;

    if (Constants.PRODUCTION) { return label; }

    return `${label} - ${id}`;
  }, [current]);
}

/**
 * @param camera
 * @param isFocused
 * @return {function({ quality: number=, base64: boolean=, exif: boolean= }): Promise<picture>}
 */
export function useTakePictureAsync({ camera, isFocused }) {
  useEffect(() => {
    if (isFocused) {
      camera?.current?.resumePreview();
    } else {
      camera?.current?.pausePreview();
    }

    return () => {
      camera?.current?.pausePreview();
    };
  }, [camera.current, isFocused]);

  return useCallback(async (options = {
    quality: 1,
    base64: true,
    exif: true,
    skipProcessing: true,
  }) => {
    const funcName = Platform.OS === 'web' ? 'takePicture' : 'takePictureAsync';
    const takePicture = camera?.current[funcName];
    const takePictureOptions = Platform.OS === 'web' ? undefined : options;

    if (takePictureOptions) {
      return takePicture(takePictureOptions);
    }

    return takePicture();
  }, [camera, isFocused]);
}

/**
 * @param current
 * @param settings
 * @param sights
 * @param uploads
 * @return {(function(pictureOrBlob:*, isBlob:boolean=): Promise<void>)|void}
 */
export function useSetPictureAsync({
  additionalPictures,
  addDamageParts,
  current,
  sights,
  uploads,
}) {
  const { errorHandler } = useMonitoring();

  return useCallback(async (picture) => {
    try {
      const uri = picture.localUri || picture.uri;

      const actions = [{ resize: { width: 133 } }];
      const saveFormat = (Platform.OS === 'web' && utils.supportsWebP()) ? SaveFormat.WEBP : SaveFormat.JPEG;
      const saveOptions = { compress: 1, format: saveFormat };
      const imageResult = await manipulateAsync(uri, actions, saveOptions);

      if (addDamageParts && addDamageParts.length > 0) {
        // The picture taken is an additional picture
        const payload = {
          previousSight: current.id,
          labelKey: addDamageParts[0],
          picture: { uri: imageResult.uri },
        };

        additionalPictures.dispatch({ type: Actions.additionalPictures.ADD_PICTURE, payload });
      } else {
        // The picture taken is a normal workflow picture
        const payload = {
          id: current.id,
          picture: { uri: imageResult.uri },
        };

        sights.dispatch({ type: Actions.sights.SET_PICTURE, payload });
        uploads.dispatch({ type: Actions.uploads.UPDATE_UPLOAD, payload });
      }
    } catch (err) {
      const payload = { id: current.id, status: 'rejected', error: err };
      uploads.dispatch({ type: Actions.uploads.UPDATE_UPLOAD, increment: true, payload });
      errorHandler(err);
      log([`Error in \`<Capture />\` \`setPictureAsync()\`: ${err}`], 'error');
      throw err;
    }
  }, [current.id, sights, uploads, additionalPictures, addDamageParts]);
}

/**
 * @param sights
 * @return {((function(): void))[]}
 */
export function useNavigationBetweenSights({ sights }) {
  const goPrevSight = useCallback(() => {
    sights.dispatch({ type: Actions.sights.PREVIOUS_SIGHT });
  }, [sights]);

  const goNextSight = useCallback(() => {
    sights.dispatch({ type: Actions.sights.NEXT_SIGHT });
  }, [sights]);

  return [goPrevSight, goNextSight];
}

/**
 * @return {function(*=): Promise<*>}
 */
export function useCreateDamageDetectionAsync() {
  return useCallback(async (
    tasks = { damage_detection: { status: 'NOT_STARTED' } },
  ) => {
    const result = await monk.entity.inspection.upsertOne({ data: { tasks } });
    return result.data;
  }, []);
}

/**
 * @param inspectionId
 * @param sights
 * @param uploads
 * @param task
 * @param mapTasksToSights
 * @param onFinish
 * @param onPictureUploaded
 * @param onPushWarningMessaqe
 * @return {(function({ inspectionId, sights, uploads }): Promise<result|error>)|*}
 */
export function useStartUploadAsync({
  inspectionId,
  sights,
  uploads,
  task,
  enableCarCoverage,
  mapTasksToSights = [],
  onFinish = () => {},
  onPictureUploaded = () => {},
  onWarningMessage = () => {},
  endTour = false,
}) {
  const [queue, setQueue] = useState([]);
  const { errorHandler } = useMonitoring();
  let isRunning = false;

  const addElement = useCallback((element) => setQueue((prevState) => [...prevState, element]), []);

  const runQuery = useCallback(async () => {
    const { ids } = sights.state;
    const { dispatch } = uploads;

    if (!isRunning && queue.length > 0) {
      isRunning = true;

      const queryParams = queue.shift();
      if (queryParams) {
        const { id, picture, multiPartKeys, json, file } = queryParams;
        onWarningMessage('Upload...');

        try {
          const data = new FormData();
          data.append(multiPartKeys.json, json);

          data.append(multiPartKeys.image, file);

          const result = await monk.entity.image.addOne(inspectionId, data);
          onPictureUploaded({ result, picture, inspectionId });

          // call onFinish callback when capturing the last picture
          if (ids[ids.length - 1] === id || endTour) {
            onFinish();
            log([`Capture tour has been finished`]);
          }

          dispatch({
            type: Actions.uploads.UPDATE_UPLOAD,
            payload: { pictureId: result.id, id, status: 'fulfilled', error: null },
          });
        } catch (err) {
          errorHandler(err);
          dispatch({
            type: Actions.uploads.UPDATE_UPLOAD,
            increment: true,
            payload: { id, status: 'rejected', error: err },
          });
        } finally {
          URL.revokeObjectURL(picture.uri);
          onWarningMessage(null);
        }
      }
      isRunning = false;
    }
  }, [isRunning, queue, sights.state, uploads, endTour]);

  useEffect(() => {
    if (!isRunning && queue.length > 0) { (async () => { await runQuery(); })(); }
  }, [isRunning, queue, endTour]);

  return useCallback(async (picture, currentSight) => {
    const { dispatch } = uploads;
    if (!inspectionId) {
      throw Error(`Please provide a valid "inspectionId". Got ${inspectionId}.`);
    }

    // for some cases, we can pass the sight we want and override the current one
    const current = currentSight || sights.state.current;
    const { id, label } = currentSight?.metadata || current.metadata;

    const currentItem = mapTasksToSights.find((item) => item.id === id);
    const tasksToMap = currentItem ? (currentItem?.tasks || [currentItem?.task]) : [task];

    try {
      dispatch({
        type: Actions.uploads.UPDATE_UPLOAD,
        increment: true,
        payload: { id, status: 'pending', label },
      });

      const fileType = picture.fileType;
      const filename = `${id}-${inspectionId}.${picture.imageFilenameExtension}`;
      const multiPartKeys = {
        image: 'image',
        json: 'json',
        type: fileType,
        filename,
      };

      const json = JSON.stringify({
        acquisition: {
          strategy: 'upload_multipart_form_keys',
          file_key: multiPartKeys.image,
        },
        compliances: {
          image_quality_assessment: {},
          coverage_360: enableCarCoverage ? {
            sight_id: id,
          } : undefined,
        },
        tasks: tasksToMap,
        additional_data: {
          ...current.metadata,
          overlay: undefined,
          createdAt: new Date(),
        },
      });

      let fileBits;

      if (Platform.OS === 'web') {
        const res = await axios.get(picture.uri, { responseType: 'blob' });
        const file = res.data;

        fileBits = [file];
      } else {
        const buffer = Buffer.from(picture.uri, 'base64');
        fileBits = new Blob([buffer], { type: picture.imageFilenameExtension });
      }

      const file = await new File(
        fileBits,
        multiPartKeys.filename,
        { type: multiPartKeys.type },
      );

      addElement({ multiPartKeys, json, file, id, picture });
    } catch (err) {
      dispatch({
        type: Actions.uploads.UPDATE_UPLOAD,
        increment: true,
        payload: { id, status: 'rejected', error: err },
      });

      log([`Error in \`<Capture />\` \`startUploadAsync()\`: ${err}`], 'error');

      throw err;
    }
  }, [uploads, inspectionId, sights.state, mapTasksToSights, task, onFinish, endTour]);
}

export function useUploadAdditionalDamage({
  inspectionId,
}) {
  return useCallback(async ({ picture, parts }) => {
    if (!inspectionId) {
      throw Error(`Please provide a valid "inspectionId". Got ${inspectionId}.`);
    }

    try {
      const fileType = picture.fileType;
      const filename = `close-up-${Date.now()}-${inspectionId}.${picture.imageFilenameExtension}`;
      const multiPartKeys = {
        image: 'image',
        json: 'json',
        type: fileType,
        filename,
      };

      const json = JSON.stringify({
        acquisition: {
          strategy: 'upload_multipart_form_keys',
          file_key: multiPartKeys.image,
        },
        compliances: {
          image_quality_assessment: {},
        },
        detailed_viewpoint: {
          centers_on: parts,
        },
        tasks: ['damage_detection'],
        image_type: 'close_up',
        additional_data: {
          overlay: undefined,
          createdAt: new Date(),
        },
      });

      let fileBits;

      if (Platform.OS === 'web') {
        const res = await axios.get(picture.uri, { responseType: 'blob' });
        const file = res.data;

        fileBits = [file];
      } else {
        const buffer = Buffer.from(picture.uri, 'base64');
        fileBits = new Blob([buffer], { type: picture.imageFilenameExtension });
      }

      const file = await new File(
        fileBits,
        multiPartKeys.filename,
        { type: multiPartKeys.type },
      );

      try {
        const data = new FormData();
        data.append(multiPartKeys.json, json);
        data.append(multiPartKeys.image, file);

        await monk.entity.image.addOne(inspectionId, data);
      } catch (err) {
        console.error(err);
      } finally {
        URL.revokeObjectURL(picture.uri);
      }
    } catch (err) {
      log([`Error in close up \`<Capture />\` \`startUploadAsync()\`: ${err}`], 'error');

      throw err;
    }
  }, [inspectionId]);
}

/**
 * @param compliance
 * @param inspectionId
 * @param sightId
 * @return {(function(pictureId: string, customSightId: string): Promise<result|error>)|*}
 */
export function useCheckComplianceAsync({
  compliance, inspectionId, sightId: currentSighId,
}) {
  return useCallback(async (imageId, customSightId) => {
    const { dispatch } = compliance;
    const sightId = customSightId || currentSighId;

    if (!imageId) {
      throw Error(`Please provide a valid "pictureId". Got ${imageId}.`);
    }

    try {
      dispatch({
        type: Actions.compliance.UPDATE_COMPLIANCE,
        increment: true,
        payload: { id: sightId, status: 'pending', imageId },
      });

      const result = await monk.entity.image.getOne(inspectionId, imageId);

      const carCov = result.axiosResponse.data.compliances.coverage_360;
      const iqa = result.axiosResponse.data.compliances.image_quality_assessment;

      if ((!carCov || carCov.status === 'TODO') || iqa.status === 'TODO') {
        dispatch({
          type: Actions.compliance.UPDATE_COMPLIANCE,
          payload: { id: sightId, status: 'unsatisfied', result: result.axiosResponse, imageId },
        });
      }

      if ((!carCov || carCov.status === 'DONE') && (iqa.status === 'DONE')) {
        dispatch({
          type: Actions.compliance.UPDATE_COMPLIANCE,
          payload: { id: sightId, status: 'fulfilled', result: result.axiosResponse, imageId },
        });
      }

      return result;
    } catch (err) {
      dispatch({
        type: Actions.compliance.UPDATE_COMPLIANCE,
        increment: true,
        payload: { id: sightId, status: 'rejected', error: err, result: null, imageId },
      });

      log([`Error in \`<Capture />\` \`checkComplianceAsync()\`: ${err}`], 'error');
      return undefined;
    }
  }, [compliance, inspectionId, currentSighId]);
}
