import { Styles } from '@monkvision/types';
import { PHOTO_CAPTURE_HUD_BUTTONS_BAR_WIDTH } from '../PhotoCaptureHUDButtons/PhotoCaptureHUDButtons.styles';

export const styles: Styles = {
  container: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    top: '0',
    right: '0',
    left: '0',
    bottom: '0',
  },
  top: {
    position: 'absolute',
    display: 'flex',
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: '10px',
    zIndex: '9',
    top: '0',
    right: '0',
    left: '0',
  },
  topLandscape: {
    __media: { landscape: true },
    right: `${PHOTO_CAPTURE_HUD_BUTTONS_BAR_WIDTH * 2}px`,
  },
  overlay: {
    zIndex: '9',
  },
};
