import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Animated,
  Image,
  Modal,
  PanResponder,
  Pressable,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  Platform,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import { CommonPropTypes, DamageMode } from '../../resources';

import DamageManipulator from './DamageManipulator';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1b1b1f',
    flex: 1,
    paddingVertical: 10,
  },
  closeButtonWrapper: {
    alignItems: 'center',
    color: '#fff',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingBottom: 10,
  },
  header: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 600,
    paddingVertical: 10,
  },
  carouselWrapper: {
    display: 'flex',
    flexDirection: 'row',
    height: 282,
    width: '100%',
    padding: 10,
  },
  carouselCard: {
    height: '100%',
    width: '100%',
  },
  counterContainer: {
    backgroundColor: '#181a1ba3',
    borderRadius: 8,
    bottom: 20,
    paddingHorizontal: 8,
    paddingVertical: 2,
    position: 'absolute',
    right: 10,
    textAlign: 'center',
  },
  counter: {
    color: '#fff',
  },
  closeIconWrapper: {
    left: 15,
    position: 'absolute',
  },
  closeIcon: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  damageManipulatorContainer: {
    paddingHorizontal: 20,
  },
});

function UpdateDamageModal({ part, damageMode, damage, onConfirm, onDismiss, images }) {
  const { t } = useTranslation();
  const { width, height } = useWindowDimensions();
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [gestureState, setGestureState] = useState({});
  const pan = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onStartShouldSetPanResponderCapture: () => true,
      onMoveShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponderCapture: () => true,
      onPanResponderMove: (event, gestureStat) => {
        setGestureState({ x: gestureStat.dx });
      },
      onPanResponderRelease: (event, gestureStat) => {
        setGestureState({ dx: gestureStat.dx });
      },
    }),
  ).current;

  useEffect(() => {
    if (gestureState.dx < 0 && currentPhotoIndex < images.length - 1) {
      setCurrentPhotoIndex(currentPhotoIndex + 1);
    } else if (gestureState.dx > 0 && currentPhotoIndex > 0) {
      setCurrentPhotoIndex(currentPhotoIndex - 1);
    }

    if (
      (gestureState.x < 0 && currentPhotoIndex < images.length - 1)
      || (gestureState.x > 0 && currentPhotoIndex > 0)
    ) {
      pan.setValue({ x: -((currentPhotoIndex * width) - gestureState.x), y: 0 });
    }
  }, [gestureState]);

  useEffect(() => {
    Animated.timing(pan, {
      toValue: { x: -currentPhotoIndex * width, y: 0 },
      duration: 200,
      useNativeDriver: Platform.OS !== 'web',
    }).start();
  }, [currentPhotoIndex]);

  return (
    <Modal
      animationType="slide"
      transparent
      visible
      onRequestClose={onDismiss}
    >
      <View style={styles.container}>
        <View style={styles.closeButtonWrapper}>
          <Pressable
            onPress={onDismiss}
            style={styles.closeIconWrapper}
          >
            <MaterialIcons
              color="#fff"
              name="close"
              size={32}
              style={styles.closeIcon}
            />
          </Pressable>
          <Text style={styles.header}>{t(`damageReport.parts.${part}`)}</Text>
        </View>
        <View
          style={[styles.carouselWrapper, { height: height / 3 }]}
          {...panResponder.panHandlers}
        >
          {
            images.map((image, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <Animated.View style={[styles.carouselCard, { left: pan.x, width }]} key={`${image.url}-${index}`}>
                <Image
                  source={{
                    width: '100%',
                    height: '100%',
                    uri: image?.url,
                  }}
                  style={{ resizeMode: 'cover' }}
                />
              </Animated.View>
            ))
          }
          <View style={styles.counterContainer}>
            <Text style={styles.counter}>
              {currentPhotoIndex + 1}
              /
              {images.length}
            </Text>
          </View>
        </View>
        <View style={[styles.damageManipulatorContainer]}>
          <DamageManipulator
            damage={damage}
            damageMode={damageMode}
            displayMode="full"
            onConfirm={onConfirm}
          />
        </View>
      </View>
    </Modal>
  );
}

UpdateDamageModal.propTypes = {
  damage: CommonPropTypes.damageWithoutPart,
  damageMode: CommonPropTypes.damageMode,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
    }),
  ),
  onConfirm: PropTypes.func,
  onDismiss: PropTypes.func,
  part: CommonPropTypes.partName,
};

UpdateDamageModal.defaultProps = {
  damage: undefined,
  damageMode: DamageMode.ALL,
  images: [],
  onConfirm: () => {},
  onDismiss: () => {},
  part: '',
};

export default UpdateDamageModal;