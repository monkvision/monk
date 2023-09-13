import { expectPropsOnChildMock } from '@monkvision/test-utils';
import { render, renderHook } from '@testing-library/react';
import { CameraHandle, useCameraHUD } from '../../../src/Camera/hooks';

describe('useCameraHUD hook', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should instanciate the HUD component with the proper props', () => {
    const MockHUDComponent = jest.fn();
    const handle = {
      takePicture: () => {},
      error: null,
      isLoading: false,
      retry: () => {},
    } as CameraHandle;
    const onPictureTaken = () => {};

    const { result, unmount: unmountHook } = renderHook(useCameraHUD, {
      initialProps: { handle, eventHandlers: { onPictureTaken }, component: MockHUDComponent },
    });
    const HUDComponent = result.current;

    const { unmount: unmountDOM } = render(<div>{HUDComponent}</div>);

    expectPropsOnChildMock(MockHUDComponent, { handle, onPictureTaken });
    unmountDOM();
    unmountHook();
  });

  it('should return null if no HUDComponent is passed', () => {
    const handle = {
      takePicture: () => {},
      error: null,
      isLoading: false,
      retry: () => {},
    } as CameraHandle;
    const onPictureTaken = () => {};

    const { result, unmount } = renderHook(useCameraHUD, {
      initialProps: { handle, eventHandlers: { onPictureTaken } },
    });

    expect(result.current).toBeNull();
    unmount();
  });
});
