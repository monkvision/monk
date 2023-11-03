import { Container } from '@monkvision/ui';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import useSnackbar from 'hooks/useSnackbar';
import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View, useWindowDimensions } from 'react-native';
import { Card, List, useTheme } from 'react-native-paper';
import { useMediaQuery } from 'react-responsive';

import { version } from '@package/json';
import * as names from 'screens/names';
import Artwork from '../Landing/Artwork';
import LanguageSwitch from '../Landing/LanguageSwitch';
import useGetInspection from '../Landing/useGetInspection';
import VehicleType from '../Landing/VehicleType';
import useUpdateInspectionVehicle from '../Landing/useUpdateInspectionVehicle';
import useZlibCompression from '../Landing/useZlibCompression';
import styles from './styles';
import { ClientParamMap } from '../paramsMap';

export default function CaptureVehicleSelection() {
  const { colors } = useTheme();
  const { height } = useWindowDimensions();
  const navigation = useNavigation();
  const { t } = useTranslation();
  const { Notice } = useSnackbar(true);
  const { decompress } = useZlibCompression();

  const [vehicleType, setVehicleType] = useState('');
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });

  const { clientId, inspectionId, token } = useMemo(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const compressedToken = urlParams.get('t');
    const clientParam = urlParams.get('c');

    return {
      inspectionId: urlParams.get('i'),
      vehicleTypeParam: urlParams.get('v'),
      clientId: clientParam ? ClientParamMap[clientParam] : undefined,
      token: compressedToken ? decompress(compressedToken) : undefined,
    };
  }, []);

  useEffect(() => {
    if (vehicleType) {
      navigation.navigate(
        names.INSPECTION_CREATE,
        {
          selectedMod: 'car360',
          inspectionId,
          vehicle: { vehicleType },
          isLastTour: true,
        },
      );
    }
  }, [vehicleType]);

  const invalidParams = useMemo(
    () => (!clientId || !inspectionId || !token),
    [clientId, inspectionId, token],
  );

  const getInspection = useGetInspection(inspectionId);

  const invalidToken = useMemo(
    () => (getInspection?.state?.error?.response?.status === 401),
    [getInspection],
  );

  useEffect(() => {
    if (inspectionId && getInspection.state.loading !== true && !invalidToken) {
      // Getting inspection data only once at the start to get all
      // the task for callback in CAT client
      getInspection.start();
    }
  }, []);

  const inspection = useMemo(
    () => getInspection?.denormalizedEntities[0],
    [getInspection],
  );

  const updateInspectionVehicle = useUpdateInspectionVehicle(
    inspectionId,
    { vehicleType, vin: inspection?.vehicle?.vin },
  );

  const invalidParamsContent = useMemo(() => (
    <View style={[styles.invalidParamsContainer, { backgroundColor: colors.background }]}>
      <Text style={[styles.invalidParamsMessage]}>
        {t(invalidParams ? 'landing.invalidParams' : 'landing.invalidToken')}
      </Text>
    </View>
  ), [invalidParams]);

  return invalidParams || invalidToken ? invalidParamsContent : (
    <View style={[styles.root, { minHeight: height, backgroundColor: colors.background }]}>
      <LinearGradient
        colors={[colors.gradient, colors.background]}
        style={[styles.background, { height }]}
      />
      <Container style={[styles.container, isPortrait ? styles.portrait : {}]}>
        <View style={[styles.left, isPortrait ? styles.leftPortrait : {}]}>
          <Artwork />
        </View>
        <Card style={[styles.card, styles.right, isPortrait ? styles.rightPortrait : {}]}>
          <List.Section style={styles.textAlignRight}>
            <List.Subheader>
              {t('landing.appVersion')}
              {': '}
              {version}
            </List.Subheader>
          </List.Section>
          <List.Section>
            <List.Subheader>{t('landing.selectVehicle')}</List.Subheader>
            <VehicleType
              selected={inspection?.vehicle?.vehicleType || vehicleType}
              onSelect={(value) => setVehicleType(value)}
              colors={colors}
              locallySelected={vehicleType}
              loading={updateInspectionVehicle.state.loading}
            />
          </List.Section>
          <Card.Actions style={styles.actions}>
            <LanguageSwitch />
          </Card.Actions>
        </Card>
      </Container>
      <Notice />
    </View>
  );
}