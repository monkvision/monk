import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Animated,
  Text,
  View,
  PanResponder,
  StyleSheet,
  TouchableWithoutFeedback,
  useWindowDimensions, Platform,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { useOrientation } from '../../../hooks';
import { CommonPropTypes, DamageMode, DisplayMode } from '../../../resources';

import ImageButton from './ImageButton';
import DamageManipulator from '../DamageManipulator';

const topLimitY = 145;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  touchable: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
  },
  animatedContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#232429',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 16,
    paddingRight: 16,
    top: 650,
  },
  horizontalBarContent: {
    display: 'flex',
    alignItems: 'center',
    padding: 5,
  },
  horizontalBar: {
    width: 40,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#5E5E62',
  },
  contentWrapper: {
    flex: 1,
    alignSelf: 'center',
    width: '100%',
    maxWidth: '500px',
    position: 'relative',
    overflowY: 'scroll',
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    marginTop: 8,
  },
  textGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
  text: {
    color: '#ffffff',
    fontSize: 14,
  },
  title: {
    fontSize: 20,
  },
  subtitle: {
    fontSize: 16,
  },
  smallText: {
    opacity: 0.72,
    marginBottom: 5,
  },
});

export default function UpdateDamagePopUp({
  damage,
  damageMode,
  imageCount,
  part,
  onDismiss,
  onConfirm,
  onShowGallery,
  isEditable,
  style = {},
}) {
  const { t } = useTranslation();
  const windowOrientation = useOrientation();
  const { height: bottomLimitY } = useWindowDimensions();
  const [displayMode] = useState(damage ? DisplayMode.FULL : DisplayMode.MINIMAL);
  const [viewMode, setViewMode] = useState(null);
  const [gestureState, setGestureState] = useState({});
  const pan = useRef(new Animated.ValueXY({ x: 0, y: bottomLimitY })).current;

  const handleToggleDamage = useCallback((isToggled) => {
    setViewMode(isToggled ? DisplayMode.FULL : DisplayMode.MINIMAL);
  }, []);

  const scrollIn = useCallback(() => {
    const toValue = viewMode === DisplayMode.FULL ? topLimitY : bottomLimitY / 1.8;
    Animated.timing(pan, {
      toValue: { x: 0, y: toValue },
      duration: 200,
      useNativeDriver: Platform.OS !== 'web',
    }).start();
  }, [viewMode, bottomLimitY]);

  const scrollOut = useCallback(() => {
    Animated.timing(pan, {
      toValue: { x: 0, y: bottomLimitY },
      duration: 200,
      useNativeDriver: Platform.OS !== 'web',
    }).start(onDismiss);
  }, [bottomLimitY]);

  const onRelease = useCallback(() => {
    if (viewMode === DisplayMode.FULL && gestureState.dy >= 0) {
      setViewMode(DisplayMode.MINIMAL);
    } else if (viewMode === DisplayMode.MINIMAL) {
      if (gestureState.dy <= 0) {
        setViewMode(DisplayMode.FULL);
      } else {
        scrollOut();
      }
    }
  }, [viewMode, gestureState]);

  const handleConfirm = useCallback((dmg) => {
    onConfirm(dmg);
    scrollOut();
  }, [onConfirm, scrollOut]);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onStartShouldSetPanResponderCapture: () => true,
      onMoveShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponderCapture: () => true,
      onPanResponderMove: (event, gestureStat) => {
        if (gestureStat.moveY <= topLimitY) {
          pan.setValue({ x: 0, y: topLimitY });
        } else if (gestureStat.moveY >= bottomLimitY) {
          pan.setValue({ x: 0, y: bottomLimitY });
        } else {
          Animated.event(
            [null, { moveX: pan.x, moveY: pan.y }],
            { useNativeDriver: Platform.OS !== 'web' },
          )(event, gestureStat);
        }
      },
      onPanResponderRelease: (event, gestureStat) => {
        setGestureState({ dy: gestureStat.dy });
      },
    }),
  ).current;

  const topOffset = useMemo(
    () => (viewMode === DisplayMode.FULL ? topLimitY : bottomLimitY / 1.8),
    [viewMode, bottomLimitY],
  );

  useEffect(() => {
    onRelease();
  }, [gestureState]);

  useEffect(() => {
    scrollIn();
  }, [viewMode, windowOrientation]);

  useEffect(() => {
    setViewMode(displayMode);
  }, [displayMode]);

  return (
    <View style={[styles.container, style]}>
      <TouchableWithoutFeedback onPress={scrollOut}>
        <View style={[styles.touchable]} />
      </TouchableWithoutFeedback>

      <Animated.View style={[styles.animatedContainer, { top: pan.y }]}>
        <View
          style={[styles.horizontalBarContent]}
          {...panResponder.panHandlers}
        >
          <View style={[styles.horizontalBar]} />
        </View>

        <View style={[styles.contentWrapper, { marginBottom: topOffset }]}>
          <View style={[styles.content]}>
            <Text style={[styles.text, styles.title]}>{t(`damageReport.parts.${part}`)}</Text>
            <ImageButton imageCount={imageCount} onPress={onShowGallery} />
          </View>
          <DamageManipulator
            damage={damage}
            damageMode={damageMode}
            displayMode={viewMode}
            onConfirm={handleConfirm}
            onToggleDamage={handleToggleDamage}
            isEditable={isEditable}
          />
        </View>
      </Animated.View>
    </View>
  );
}

UpdateDamagePopUp.propTypes = {
  damage: CommonPropTypes.damageWithoutPart,
  damageMode: CommonPropTypes.damageMode,
  imageCount: PropTypes.number,
  isEditable: PropTypes.bool,
  onConfirm: PropTypes.func,
  onDismiss: PropTypes.func,
  onShowGallery: PropTypes.func,
  part: CommonPropTypes.partName,
  style: PropTypes.object,
};

UpdateDamagePopUp.defaultProps = {
  damage: undefined,
  damageMode: DamageMode.ALL,
  isEditable: true,
  imageCount: 0,
  onConfirm: () => {},
  onDismiss: () => {},
  onShowGallery: () => {},
  part: '',
  style: {},
};