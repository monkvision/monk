import React, { createRef } from 'react';

jest.mock('../../src/Camera/hooks', () => ({
  ...jest.requireActual('../../src/Camera/hooks'),
  useCameraPreview: jest.fn(() => ({
    ref: createRef<HTMLVideoElement>(),
    dimensions: { width: 1234, height: 5678 },
    error: { type: 'test-error' },
    retry: jest.fn(),
    isLoading: false,
  })),
  useCameraCanvas: jest.fn(() => ({ ref: createRef<HTMLCanvasElement>() })),
  useCameraScreenshot: jest.fn(() => ({ takeScreenshot: jest.fn() })),
  useCompression: jest.fn(() => ({ compress: jest.fn() })),
  useTakePicture: jest.fn(() => ({
    takePicture: jest.fn(),
    isLoading: false,
  })),
  useCameraHUD: jest.fn(() => <></>),
}));

import { render, screen } from '@testing-library/react';
import { expectHTMLElementToHaveRef, expectPropsOnChildMock } from '@monkvision/test-utils';
import {
  Camera,
  CameraFacingMode,
  CameraHUDComponent,
  CameraResolution,
  CompressionFormat,
} from '../../src';
import {
  useCameraCanvas,
  useCameraPreview,
  useCameraScreenshot,
  useCompression,
  useTakePicture,
} from '../../src/Camera/hooks';

const VIDEO_PREVIEW_TEST_ID = 'camera-video-preview';
const CANVAS_TEST_ID = 'camera-canvas';

describe('Camera component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should pass the facingMode, resolution and deviceId props to the useCameraPreview hook', () => {
    const facingMode = CameraFacingMode.USER;
    const resolution = CameraResolution.HD_720P;
    const deviceId = 'test-device-id';
    const { unmount } = render(
      <Camera facingMode={facingMode} resolution={resolution} deviceId={deviceId} />,
    );

    expect(useCameraPreview).toHaveBeenCalledWith({ facingMode, resolution, deviceId });
    unmount();
  });

  it('should use CameraFacingMode.ENVIRONMENT as the default facingMode', () => {
    const { unmount } = render(<Camera />);

    expect(useCameraPreview).toHaveBeenCalledWith(
      expect.objectContaining({
        facingMode: CameraFacingMode.ENVIRONMENT,
      }),
    );
    unmount();
  });

  it('should use CameraResolution.UHD_4K as the default resolution', () => {
    const { unmount } = render(<Camera />);

    expect(useCameraPreview).toHaveBeenCalledWith(
      expect.objectContaining({
        resolution: CameraResolution.UHD_4K,
      }),
    );
    unmount();
  });

  it('should not use any deviceId if not provided', () => {
    const { unmount } = render(<Camera />);

    expect(useCameraPreview).toHaveBeenCalledWith(
      expect.objectContaining({
        deviceId: undefined,
      }),
    );
    unmount();
  });

  it('should pass the stream dimensions to the useCameraCanvas hook', () => {
    const { unmount } = render(<Camera />);

    expect(useCameraCanvas).toHaveBeenCalledWith({
      dimensions: (useCameraPreview as jest.Mock)().dimensions,
    });
    unmount();
  });

  it('should pass the video ref, canvasRef and stream dimensions to the useCameraScreenshot hook', () => {
    const { unmount } = render(<Camera />);

    const useCameraPreviewResultMock = (useCameraPreview as jest.Mock).mock.results[0].value;
    const canvasRefMock = (useCameraCanvas as jest.Mock).mock.results[0].value.ref;
    expect(useCameraScreenshot).toHaveBeenCalledWith({
      videoRef: useCameraPreviewResultMock.ref,
      canvasRef: canvasRefMock,
      dimensions: useCameraPreviewResultMock.dimensions,
    });
    unmount();
  });

  it('should pass the canvas ref and the compression options to the useCompression hook', () => {
    const format = CompressionFormat.JPEG;
    const quality = 0.4;
    const { unmount } = render(<Camera format={format} quality={quality} />);

    const canvasRefMock = (useCameraCanvas as jest.Mock).mock.results[0].value.ref;
    expect(useCompression).toHaveBeenCalledWith({
      canvasRef: canvasRefMock,
      options: { format, quality },
    });
    unmount();
  });

  it('should use the CompressionFormat.JPEG as the default compression format', () => {
    const { unmount } = render(<Camera />);

    expect(useCompression).toHaveBeenCalledWith(
      expect.objectContaining({
        options: expect.objectContaining({ format: CompressionFormat.JPEG }),
      }),
    );
    unmount();
  });

  it('should use 0.8 as the default compression quality', () => {
    const { unmount } = render(<Camera />);

    expect(useCompression).toHaveBeenCalledWith(
      expect.objectContaining({
        options: expect.objectContaining({ quality: 0.8 }),
      }),
    );
    unmount();
  });

  it('should pass the proper options to the useTakePicture hook', () => {
    const monitoring = {
      parentId: 'test-id',
      tags: { testTagName: 'testTagValue' },
      data: { testDataName: 'testDataValue' },
    };
    const onPictureTaken = () => {};
    const { unmount } = render(<Camera monitoring={monitoring} onPictureTaken={onPictureTaken} />);

    const takeScreenshotMock = (useCameraScreenshot as jest.Mock).mock.results[0].value
      .takeScreenshot;
    const compressMock = (useCompression as jest.Mock).mock.results[0].value.compress;
    expect(useTakePicture).toHaveBeenCalledWith({
      compress: compressMock,
      takeScreenshot: takeScreenshotMock,
      onPictureTaken,
      monitoring,
    });
    unmount();
  });

  it('should use no onPictureTaken handler by default', () => {
    const { unmount } = render(<Camera />);

    expect(useTakePicture).toHaveBeenCalledWith(
      expect.objectContaining({
        onPictureTaken: undefined,
      }),
    );
    unmount();
  });

  it('should use no extra monitoring config by default', () => {
    const { unmount } = render(<Camera />);

    expect(useTakePicture).toHaveBeenCalledWith(
      expect.objectContaining({
        monitoring: undefined,
      }),
    );
    unmount();
  });

  it('should pass the camera handle & preview to the HUDComponent', () => {
    const HUDComponent = jest.fn(() => <></>) as unknown as CameraHUDComponent;
    const { unmount } = render(<Camera HUDComponent={HUDComponent} />);

    const useTakePictureResultMock = (useTakePicture as jest.Mock).mock.results[0].value;
    const useCameraPreviewResultMock = (useCameraPreview as jest.Mock).mock.results[0].value;
    expectPropsOnChildMock(HUDComponent as jest.Mock, {
      handle: {
        takePicture: useTakePictureResultMock.takePicture,
        error: useCameraPreviewResultMock.error,
        retry: useCameraPreviewResultMock.retry,
        isLoading: useCameraPreviewResultMock.isLoading || useTakePictureResultMock.isLoading,
      },
      cameraPreview: expect.anything(),
    });
    unmount();
  });

  it('should not be loading when both the preview and the take picture are not loading', () => {
    const HUDComponent = jest.fn(() => <></>) as unknown as CameraHUDComponent;
    const { unmount } = render(<Camera HUDComponent={HUDComponent} />);

    expectPropsOnChildMock(HUDComponent as jest.Mock, {
      handle: expect.objectContaining({ isLoading: false }),
    });
    unmount();
  });

  it('should be loading when the preview is loading', () => {
    const HUDComponent = jest.fn(() => <></>) as unknown as CameraHUDComponent;
    const defaultValue = (useCameraPreview as jest.Mock)();
    (useCameraPreview as jest.Mock).mockImplementationOnce(() => ({
      ...defaultValue,
      isLoading: true,
    }));
    const { unmount } = render(<Camera HUDComponent={HUDComponent} />);

    expectPropsOnChildMock(HUDComponent as jest.Mock, {
      handle: expect.objectContaining({ isLoading: true }),
    });
    unmount();
  });

  it('should be loading when the take picture is loading', () => {
    const HUDComponent = jest.fn(() => <></>) as unknown as CameraHUDComponent;
    const defaultValue = (useTakePicture as jest.Mock)();
    (useTakePicture as jest.Mock).mockImplementationOnce(() => ({
      ...defaultValue,
      isLoading: true,
    }));
    const { unmount } = render(<Camera HUDComponent={HUDComponent} />);

    expectPropsOnChildMock(HUDComponent as jest.Mock, {
      handle: expect.objectContaining({ isLoading: true }),
    });
    unmount();
  });

  it('should display a video element', () => {
    const { unmount } = render(<Camera />);

    expect(screen.queryByTestId(VIDEO_PREVIEW_TEST_ID)).not.toBeNull();
    unmount();
  });

  it('should display a canvas element', () => {
    const { unmount } = render(<Camera />);

    expect(screen.queryByTestId(CANVAS_TEST_ID)).not.toBeNull();
    unmount();
  });

  describe('Camera preview video element', () => {
    let videoEl = {} as HTMLVideoElement;
    let unmount = () => {};

    beforeEach(() => {
      const { unmount: unmountFn, container } = render(<Camera />);
      unmount = unmountFn;

      videoEl = container.querySelector('video') as HTMLVideoElement;
      if (!videoEl) {
        throw new Error(
          "Unable to run the video element tests because the video element can't be found.",
        );
      }
    });

    afterEach(() => {
      unmount();
    });

    it('should have autoplay on', () => {
      expect(videoEl.getAttribute('autoPlay')).toEqual('');
    });

    it('should have playsInline on', () => {
      expect(videoEl.getAttribute('playsInline')).toEqual('');
    });

    it('should have controls off', () => {
      expect(videoEl.getAttribute('controls')).toEqual(null);
    });

    it('should have its ref set to the video ref', () => {
      const videoRefMock = (useCameraPreview as jest.Mock).mock.results[0].value.ref;
      expectHTMLElementToHaveRef(VIDEO_PREVIEW_TEST_ID, videoRefMock);
    });
  });

  describe('Camera canvas element', () => {
    it('should have its ref set to the canvas ref', () => {
      const { unmount } = render(<Camera />);

      const canvasRefMock = (useCameraCanvas as jest.Mock).mock.results[0].value.ref;
      expectHTMLElementToHaveRef(CANVAS_TEST_ID, canvasRefMock);
      unmount();
    });
  });
});