import { useCallback, useEffect, useRef } from 'react';
import { Platform } from 'react-native';

import { utils } from '@monkvision/toolkit';

import useUserMedia from './useUserMedia';
import useCompression from './useCompression';
import log from '../../../utils/log';

/**
 * Note(Ilyass): As a solution we are using a video constraints of width/height + `diff`
 * and a canvas of width/height.
 */
const diff = 1;
const imageType = utils.supportsWebP ? 'image/webp' : 'image/jpeg';
const imageFilenameExtension = imageType.substring('image/'.length);

/**
 * `useCamera` is a hook that takes the `canvasResolution` which holds the dimensions of the canvas,
 *  and an object `options`, containing getUserMedia constraints and `onCameraReady`.
 */
export default function useCamera({
  resolution,
  enableCompression,
  compressionOptions,
  video,
  onCameraReady,
  onCameraPermissionError,
  onCameraPermissionSuccess,
  onWarningMessage,
}) {
  const { width, height } = resolution;
  const compress = useCompression();

  const videoConstraints = { ...video, width: video.width + diff, height: video.height + diff };
  const { stream, error } = useUserMedia({
    constraints: { video: videoConstraints },
    onCameraPermissionError,
    onCameraPermissionSuccess,
  });

  const videoRef = useRef(null);

  useEffect(() => {
    if (stream) {
      videoRef.current.srcObject = stream;
      videoRef.current.onloadedmetadata = () => { videoRef.current.play(); onCameraReady(); };
    }
  }, [stream, error]);

  const takePicture = useCallback(async () => {
    if (!videoRef.current || !stream) { throw new Error('Camera is not ready!'); }

    // we can create and use the separate canvas for each sight pic
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    canvas.getContext('2d', { alpha: false }).drawImage(videoRef.current, 0, 0, width, height);

    let uri;
    if (enableCompression && !utils.supportsWebP()) {
      log(['[Event] Compressing an image']);
      if (Platform.OS !== 'web') { return undefined; }
      const arrayBuffer = canvas.getContext('2d').getImageData(0, 0, width, height).data;

      if (onWarningMessage) { onWarningMessage('Compressing an image...'); }
      const compressed = await compress(arrayBuffer, width, height, compressionOptions);
      if (onWarningMessage) { onWarningMessage(null); }

      if (compressed) {
        log([`[Event] An image has been taken, with size: ${(arrayBuffer.byteLength / 1024 / 1024).toFixed(2)}Mo, optimized to ${(compressed.size / 1024 / 1024).toFixed(2)}Mo, and resolution: ${width}x${height}`]);
      }

      uri = URL.createObjectURL(compressed);
    } else {
      uri = canvas.toDataURL(imageType);
    }

    return { uri, width, height, imageType, imageFilenameExtension };
  }, [width, height, stream]);

  const resumePreview = async () => {
    if (videoRef.current) { videoRef.current.play(); }
  };
  const pausePreview = async () => {
    if (videoRef.current) { videoRef.current.pause(); }
  };
  const stopStream = useCallback(() => {
    if (stream?.getTracks) { stream.getTracks().forEach((track) => track.stop()); return; }
    if (stream?.stop) { stream.stop(); }
  }, [stream]);

  return { videoRef, takePicture, resumePreview, pausePreview, stopStream, stream };
}
