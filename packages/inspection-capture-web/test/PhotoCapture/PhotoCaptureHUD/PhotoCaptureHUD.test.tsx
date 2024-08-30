import { AddDamage, Image, ImageStatus } from '@monkvision/types';

jest.mock('../../../src/PhotoCapture/PhotoCaptureHUD/hooks', () => ({
  ...jest.requireActual('../../../src/PhotoCapture/PhotoCaptureHUD/hooks'),
  useComplianceNotification: jest.fn(() => false),
}));
jest.mock('../../../src/PhotoCapture/PhotoCaptureHUD/PhotoCaptureHUDButtons', () => ({
  PhotoCaptureHUDButtons: jest.fn(() => <></>),
}));
jest.mock('../../../src/PhotoCapture/PhotoCaptureHUD/PhotoCaptureHUDOverlay', () => ({
  PhotoCaptureHUDOverlay: jest.fn(() => <></>),
}));
jest.mock('../../../src/PhotoCapture/PhotoCaptureHUD/PhotoCaptureHUDElements', () => ({
  PhotoCaptureHUDElements: jest.fn(() => <></>),
}));

import { useTranslation } from 'react-i18next';
import { act, render, screen } from '@testing-library/react';
import { sights } from '@monkvision/sights';
import { LoadingState } from '@monkvision/common';
import { CameraHandle } from '@monkvision/camera-web';
import { expectPropsOnChildMock } from '@monkvision/test-utils';
import { BackdropDialog } from '@monkvision/common-ui-web';
import {
  PhotoCaptureHUD,
  PhotoCaptureHUDButtons,
  PhotoCaptureHUDOverlay,
  PhotoCaptureHUDElements,
  PhotoCaptureHUDProps,
} from '../../../src';
import { PhotoCaptureMode } from '../../../src/PhotoCapture/hooks';

const cameraTestId = 'camera-test-id';

function createProps(): PhotoCaptureHUDProps {
  return {
    inspectionId: 'test-inspection-id-test',
    sights: [
      sights['test-sight-1'],
      sights['test-sight-2'],
      sights['test-sight-3'],
      sights['test-sight-4'],
    ],
    selectedSight: sights['test-sight-2'],
    sightsTaken: [sights['test-sight-1']],
    lastPictureTakenUri: 'test-last-pic-taken',
    mode: PhotoCaptureMode.SIGHT,
    loading: { isLoading: false, error: null } as unknown as LoadingState,
    onSelectSight: jest.fn(),
    onRetakeSight: jest.fn(),
    damageVehicleParts: [],
    onAddDamageParts: jest.fn(),
    onAddDamage: jest.fn(),
    onCancelAddDamage: jest.fn(),
    onRetry: jest.fn(),
    onClose: jest.fn(),
    onOpenGallery: jest.fn(),
    showCloseButton: true,
    handle: {
      isLoading: false,
      error: null,
      dimensions: { height: 2, width: 4 },
      previewDimensions: { height: 111, width: 2222 },
    } as unknown as CameraHandle,
    addDamage: AddDamage.TWO_SHOT,
    cameraPreview: <div data-testid={cameraTestId}></div>,
    images: [{ sightId: 'test-sight-1', status: ImageStatus.NOT_COMPLIANT }] as Image[],
    currentTutorialStep: null,
    allowSkipTutorial: false,
    onNextTutorialStep: jest.fn(),
    onCloseTutorial: jest.fn(),
  };
}

describe('PhotoCaptureHUD component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should display the camera preview on the screen', () => {
    const props = createProps();
    const { unmount } = render(<PhotoCaptureHUD {...props} />);

    expect(screen.queryByTestId(cameraTestId)).not.toBeNull();

    unmount();
  });

  it('should display the PhotoCaptureHUDElements component with the proper props', () => {
    const props = createProps();
    const { unmount } = render(<PhotoCaptureHUD {...props} />);

    expectPropsOnChildMock(PhotoCaptureHUDElements, {
      selectedSight: props.selectedSight,
      sights: props.sights,
      sightsTaken: props.sightsTaken,
      mode: props.mode,
      onAddDamage: props.onAddDamage,
      onCancelAddDamage: props.onCancelAddDamage,
      onSelectSight: props.onSelectSight,
      isLoading: props.loading.isLoading || props.handle.isLoading,
      error: props.loading.error ?? props.handle.error,
      previewDimensions: props.handle.previewDimensions,
      images: props.images,
    });

    unmount();
  });

  it('should display the PhotoCaptureHUDButtons component with the proper props', () => {
    const props = createProps();
    const { unmount } = render(<PhotoCaptureHUD {...props} />);

    expectPropsOnChildMock(PhotoCaptureHUDButtons, {
      onTakePicture: props.handle?.takePicture,
      galleryPreview: props.lastPictureTakenUri ?? undefined,
      action: 'close',
      actionDisabled: !!props.loading.error || !!props.handle.error,
      galleryDisabled: !!props.loading.error || !!props.handle.error,
      takePictureDisabled: !!props.loading.error || !!props.handle.error,
      showActionButton: props.showCloseButton,
      onOpenGallery: props.onOpenGallery,
    });

    unmount();
  });

  it('should display the PhotoCaptureHUDOverlay component with the proper props', () => {
    const props = createProps();
    const { unmount } = render(<PhotoCaptureHUD {...props} />);

    expectPropsOnChildMock(PhotoCaptureHUDOverlay, {
      inspectionId: props.inspectionId,
      handle: props.handle,
      isCaptureLoading: props.loading.isLoading,
      captureError: props.loading.error,
      onRetry: props.onRetry,
    });

    unmount();
  });

  it('should display the BackdropDialog component with the proper props', () => {
    (useTranslation as jest.Mock).mockImplementationOnce(() => ({ t: jest.fn((v) => v) }));
    const props = createProps();
    const { unmount } = render(<PhotoCaptureHUD {...props} />);

    expectPropsOnChildMock(BackdropDialog, {
      message: 'photo.hud.closeConfirm.message',
      cancelLabel: 'photo.hud.closeConfirm.cancel',
      confirmLabel: 'photo.hud.closeConfirm.confirm',
    });

    unmount();
  });

  it('should properly handle the click on close event', () => {
    const props = createProps();
    const { unmount } = render(<PhotoCaptureHUD {...props} />);

    const { onAction } = (PhotoCaptureHUDButtons as jest.MockedFn<typeof PhotoCaptureHUDButtons>)
      .mock.calls[0][0];
    expectPropsOnChildMock(BackdropDialog, { show: false });
    jest.clearAllMocks();

    act(() => onAction!());
    expectPropsOnChildMock(BackdropDialog, { show: true });
    const { onConfirm } = (BackdropDialog as jest.Mock).mock.calls[0][0];
    jest.clearAllMocks();

    expect(props.onClose).not.toHaveBeenCalled();
    act(() => onConfirm());
    expectPropsOnChildMock(BackdropDialog, { show: false });
    expect(props.onClose).toHaveBeenCalled();

    unmount();
  });

  const RETAKE_STATUSES = [
    ImageStatus.NOT_COMPLIANT,
    ImageStatus.UPLOAD_FAILED,
    ImageStatus.UPLOAD_ERROR,
  ];

  RETAKE_STATUSES.forEach((status) => {
    it(`should display the gallery badge if there are images with the ${status} status`, () => {
      const props = createProps();
      props.images = [{ status }, { status }, { status: 'test' }] as Image[];
      const { unmount } = render(<PhotoCaptureHUD {...props} />);

      expectPropsOnChildMock(PhotoCaptureHUDButtons, { showGalleryBadge: true, retakeCount: 2 });

      unmount();
    });
  });

  it('should not display the gallery badge if there are no images with retake statuses', () => {
    const props = createProps();
    props.images = Object.values(ImageStatus)
      .filter((status) => !RETAKE_STATUSES.includes(status))
      .map((status) => ({ status } as Image));
    const { unmount } = render(<PhotoCaptureHUD {...props} />);

    expectPropsOnChildMock(PhotoCaptureHUDButtons, { showGalleryBadge: false, retakeCount: 0 });

    unmount();
  });

  it('should set takePictureDisabled to true when on part select', () => {
    const props = createProps();
    props.mode = PhotoCaptureMode.ADD_DAMAGE_PART_SELECT;
    render(<PhotoCaptureHUD {...props} />);
    expectPropsOnChildMock(PhotoCaptureHUDButtons, { takePictureDisabled: true });
  });

  it('should set actionDisabled to true when on part select no parts are selected', () => {
    const props = createProps();
    props.mode = PhotoCaptureMode.ADD_DAMAGE_PART_SELECT;
    render(<PhotoCaptureHUD {...props} />);
    expectPropsOnChildMock(PhotoCaptureHUDButtons, { actionDisabled: true });
  });

  it('should set showActionButton to true on part select', () => {
    const props = createProps();
    props.mode = PhotoCaptureMode.ADD_DAMAGE_PART_SELECT;
    render(<PhotoCaptureHUD {...props} />);
    expectPropsOnChildMock(PhotoCaptureHUDButtons, { showActionButton: true });
  });

  it('should set takePictureDisabled to false when on image-capture mode', () => {
    const props = createProps();
    props.mode = PhotoCaptureMode.ADD_DAMAGE_PART_SELECT;
    render(<PhotoCaptureHUD {...props} />);
    act(() => {
      (PhotoCaptureHUDButtons as jest.MockedFunction<typeof PhotoCaptureHUDButtons>).mock
        .calls[0][0].onAction!();
    });
    expectPropsOnChildMock(PhotoCaptureHUDButtons, { takePictureDisabled: false });
  });

  it('should use check action when on part select mode', () => {
    const props = createProps();
    props.mode = PhotoCaptureMode.ADD_DAMAGE_PART_SELECT;
    render(<PhotoCaptureHUD {...props} />);
    expectPropsOnChildMock(PhotoCaptureHUDButtons, { action: 'check' });
  });

  it('should use close action when not on part select mode', () => {
    const props = createProps();
    render(<PhotoCaptureHUD {...props} />);
    expectPropsOnChildMock(PhotoCaptureHUDButtons, { action: 'close' });
  });

  it('onAction should setAddDamagePartSelectState to image-capture when on part select mode', () => {
    const props = createProps();
    props.mode = PhotoCaptureMode.ADD_DAMAGE_PART_SELECT;
    render(<PhotoCaptureHUD {...props} />);
    act(() => {
      (PhotoCaptureHUDButtons as jest.MockedFunction<typeof PhotoCaptureHUDButtons>).mock
        .calls[0][0].onAction!();
    });
    expect(props.onAddDamageParts).not.toHaveBeenCalled();
    expect(props.onClose).not.toHaveBeenCalled();
  });
});
