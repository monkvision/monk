import { utils } from '@monkvision/toolkit';
import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  root: {
    position: 'relative',
  },
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    position: 'relative',
  },
  portrait: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  left: {
    flex: 0.75,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingBottom: utils.styles.spacing(2),
    paddingRight: utils.styles.spacing(2),
    paddingTop: utils.styles.spacing(4),
  },
  leftPortrait: {
    flex: 'none',
  },
  right: {
    flex: 1.25,
    display: 'flex',
  },
  evenListItem: {
    elevation: 4,
  },
  oddListItem: {
    elevation: 1,
  },
  actions: {
    justifyContent: 'flex-end',
    flexWrap: 'wrap',
  },
  listLoading: {
    marginHorizontal: utils.styles.spacing(2),
  },
  card: {
    borderRadius: 0,
  },
  // modal
  modalRoot: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 10,
    width: '100%',
    height: '100%',
  },
  modalContainer: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  modalPlayground: {
    alignSelf: 'center',
    zIndex: 10,
    borderRadius: 8,
    width: 200,
    height: 'auto',
    padding: 4,
  },
  modalItem: {
    borderRadius: 4,
  },
  pressOutside: {
    zIndex: 1,
    opacity: 0.8,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  blur: {
    width,
    height,
  },
  textAlignRight: {
    alignItems: 'flex-end',
  },
  invalidParamsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  invalidParamsMessage: {
    color: '#ffffff',
    fontSize: 20,
    textAlign: 'center',
  },
});