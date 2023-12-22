import { Styles } from '@monkvision/types';

export const styles: Styles = {
  container: {
    position: 'relative',
    display: 'flex',
    alignSelf: 'stretch',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: 'green',
    flex: '1',
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
  counter: {
    display: 'flex',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '6px 12px',
    borderRadius: '8px',
    backgroundColor: 'rgba(28, 28, 30, 0.64)',
    zIndex: '9',
  },
  slider: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: '45%',
    paddingBottom: '0%',
    overflowX: 'auto',
    overflowY: 'hidden',
    whiteSpace: 'nowrap',
    scrollbarWidth: 'none',
    maxWidth: '60vw',
    zIndex: '9',
    bottom: '0',
    right: '0',
    left: '0',
  },
  labelButton: {
    margin: '10px',
    zIndex: '9',
  },
  sightOverlay: {
    zIndex: '9',
  },
  addDamageButton: {
    backgroundColor: 'rgba(52, 53, 63, 0.64)',
  },
};
