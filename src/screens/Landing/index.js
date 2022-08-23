import { useSentry, useInterval, utils } from '@monkvision/toolkit';
import { SentryConstants } from '@monkvision/toolkit/src/hooks/useSentry';
import ExpoConstants from 'expo-constants';
import useAuth from 'hooks/useAuth';
import isEmpty from 'lodash.isempty';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { View, useWindowDimensions, FlatList } from 'react-native';
import { Container } from '@monkvision/ui';
import monk from '@monkvision/corejs';
import { useMediaQuery } from 'react-responsive';
import { ActivityIndicator, Button, Card, List, Surface, useTheme } from 'react-native-paper';
import Inspection from 'components/Inspection';
import Artwork from 'screens/Landing/Artwork';
import ConnectionModeSwitch from 'screens/Landing/ConnectionModeSwitch';
import LanguageSwitch from 'screens/Landing/LanguageSwitch';
import SignOut from 'screens/Landing/SignOut';
import useGetInspection from 'screens/Landing/useGetInspection';

import * as names from 'screens/names';
import Modal from 'components/Modal';
import styles from './styles';
import Sentry from '../../config/sentry';
import useVinModal from './useVinModal';
import { setTag } from '../../config/sentryPlatform';

const ICON_BY_STATUS = {
  NOT_STARTED: 'chevron-right',
  DONE: 'check-bold',
  ERROR: 'alert-octagon',
};

export default function Landing() {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const { isAuthenticated } = useAuth();
  const { height } = useWindowDimensions();
  const { errorHandler } = useSentry(Sentry);
  const { t, i18n } = useTranslation();

  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });

  const route = useRoute();
  const { inspectionId } = route.params || {};
  const vinOptionsRef = useRef();

  const getInspection = useGetInspection(inspectionId);
  const [connectionMode, setConnectionMode] = useState('semi-offline');

  const inspection = useMemo(
    () => getInspection?.denormalizedEntities[0],
    [getInspection],
  );

  const selectors = useVinModal({ isAuthenticated, inspectionId, connectionMode });

  const handleConnectionModeChange = useCallback((mode) => {
    setConnectionMode(mode);
  }, [setConnectionMode]);

  const handleReset = useCallback(() => {
    utils.log(['[Click] Resetting the inspection: ', inspectionId]);
    setTag('inspection_id', undefined); // unset the tag `inspection_id`
    navigation.navigate(names.LANDING);
  }, [navigation, inspectionId]);

  const handleListItemPress = useCallback((value) => {
    const isVin = value === 'vinNumber';
    const vinOption = ExpoConstants.manifest.extra.options.find((option) => option.value === 'vinNumber');
    if (isVin && vinOption?.mode.includes('manually')) { vinOptionsRef.current?.open(); return; }

    const shouldSignIn = !isAuthenticated;
    const to = shouldSignIn ? names.SIGN_IN : names.INSPECTION_CREATE;
    navigation.navigate(to, { selectedMod: value, inspectionId, connectionMode });
  }, [inspectionId, navigation, isAuthenticated, connectionMode]);

  const renderListItem = useCallback(({ item, index }) => {
    const { title, icon, value, description } = item;
    const isVin = value === 'vinNumber';
    const vin = inspection?.vehicle?.vin;

    const taskName = ExpoConstants.manifest.extra.options.find((o) => o.value === value)?.taskName;
    const task = Object.values(inspection?.tasks || {})
      .find((taskObj) => taskObj?.name === taskName);

    const disabledTaskStatuses = [
      monk.types.ProgressStatus.TODO,
      monk.types.ProgressStatus.IN_PROGRESS,
      monk.types.ProgressStatus.DONE,
      monk.types.ProgressStatus.ERROR,
    ].includes(task?.status);
    const disabled = disabledTaskStatuses && !isVin;

    const composeStatus = () => {
      if (isVin && vin) {
        return {
          status: vin,
          icon: ICON_BY_STATUS[monk.types.ProgressStatus.DONE],
        };
      }
      if (task?.status) {
        return {
          status: t(`inspection.status.${task.status}`),
          icon: ICON_BY_STATUS[task.status],
        };
      }
      return { status: t(description), icon: 'chevron-right' };
    };

    const left = () => <List.Icon icon={icon} />;
    const right = () => ([
      monk.types.ProgressStatus.TODO,
      monk.types.ProgressStatus.IN_PROGRESS,
    ].includes(task?.status)
      ? <ActivityIndicator color="white" size={16} style={styles.listLoading} />
      : <List.Icon icon={composeStatus().icon} />);

    const handlePress = () => handleListItemPress(value);

    return (
      <Surface style={(index % 2 === 0) ? styles.evenListItem : styles.oddListItem}>
        <List.Item
          title={t(title)}
          description={composeStatus().status}
          left={left}
          right={right}
          onPress={handlePress}
          disabled={disabled}
        />
      </Surface>
    );
  }, [handleListItemPress, inspection]);

  const start = useCallback(() => {
    if (inspectionId && getInspection.state.loading !== true) {
      getInspection.start().catch((err) => errorHandler(err, SentryConstants.type.APP));
    }
  }, [inspectionId, getInspection]);

  const intervalId = useInterval(start, 1000);

  useFocusEffect(useCallback(() => {
    start();
    return () => clearInterval(intervalId);
  }, [navigation, start, intervalId]));

  const vinModalItems = useMemo(() => {
    const vinTask = Object.values(inspection?.tasks || {}).find((task) => task?.name === 'images_ocr');
    const disabled = [
      monk.types.ProgressStatus.TODO, monk.types.ProgressStatus.IN_PROGRESS,
      monk.types.ProgressStatus.DONE, monk.types.ProgressStatus.ERROR]
      .includes(vinTask?.status);

    return [
      { title: t('vinModal.camera'), value: 'automatic', disabled, icon: 'camera' },
      { title: t('vinModal.manual'), value: 'manually', icon: 'file-edit' },
    ];
  }, [inspection, i18n.language]);

  return (
    <View style={[styles.root, { minHeight: height, backgroundColor: colors.background }]}>
      <Modal
        items={vinModalItems}
        ref={vinOptionsRef}
        {...selectors.vin}
      />
      <LinearGradient
        colors={[colors.gradient, colors.background]}
        style={[styles.background, { height }]}
      />
      <Container style={[styles.container, isPortrait ? styles.portrait : {}]}>
        {isEmpty(getInspection.denormalizedEntities) && (
          <View style={[styles.left, isPortrait ? styles.leftPortrait : {}]}>
            <Artwork />
          </View>
        )}
        <Card style={[styles.card, styles.right, isPortrait ? styles.rightPortrait : {}]}>
          {!isEmpty(getInspection.denormalizedEntities) && (
            getInspection.denormalizedEntities.map((i) => (
              <Inspection {...i} key={`landing-inspection-${i.id}`} />
            )))}
          <List.Section>
            <List.Subheader>{t('landing.menuHeader')}</List.Subheader>
            <FlatList
              data={ExpoConstants.manifest.extra.options}
              renderItem={renderListItem}
              keyExtractor={(item) => item.value}
            />
          </List.Section>
          <Card.Actions style={styles.actions}>
            {!isEmpty(inspection) ? (
              <Button color={colors.text} onPress={handleReset}>{t('landing.resetInspection')}</Button>
            ) : null}
            <LanguageSwitch />
            <ConnectionModeSwitch
              initialMode={connectionMode}
              onModeSwitch={handleConnectionModeChange}
            />
            {isAuthenticated && (
            <SignOut onSuccess={handleReset} />
            )}
          </Card.Actions>
        </Card>
      </Container>
    </View>
  );
}
