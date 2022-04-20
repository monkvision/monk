import { useInterval } from '@monkvision/toolkit';
import isEmpty from 'lodash.isempty';
import React, { useCallback, useMemo } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';
import { View, useWindowDimensions, SafeAreaView, FlatList } from 'react-native';
import { Container } from '@monkvision/ui';
import { useMediaQuery } from 'react-responsive';
import { ActivityIndicator, Button, Card, List, Surface, useTheme } from 'react-native-paper';
import { ScrollView } from 'react-native-web';
import Inspection from 'components/Inspection';
import { TASKS_BY_MOD } from 'screens/InspectionCreate/useCreateInspection';
import Artwork from 'screens/Landing/Artwork';
import useGetInspection from 'screens/Landing/useGetInspection';

import * as names from 'screens/names';
import styles from './styles';

const LIST_ITEMS = [{
  value: 'vinNumber',
  title: 'VIN recognition',
  description: 'Vehicle info obtained from OCR',
  icon: 'car-info',
}, {
  value: 'car360',
  title: 'Damage detection',
  description: 'Vehicle tour (exterior and interior)',
  icon: 'axis-z-rotate-counterclockwise',
}, {
  value: 'wheels',
  title: 'Wheels analysis',
  description: 'Details about rims condition',
  icon: 'circle-double',
}];

const STATUSES = {
  NOT_STARTED: 'Waiting to be started',
  TODO: 'In progress...',
  IN_PROGRESS: 'In progress...',
  DONE: 'Has finished!',
  ERROR: 'Failed!',
};

const ICON_BY_STATUS = {
  NOT_STARTED: 'chevron-right',
  DONE: 'check-bold',
  ERROR: 'alert-octagon',
};

export default function Landing() {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const { height } = useWindowDimensions();

  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });

  const route = useRoute();
  const { inspectionId } = route.params || {};

  const getInspection = useGetInspection(inspectionId);
  const inspection = useMemo(
    () => getInspection?.denormalizedEntities[0],
    [getInspection],
  );

  const handleReset = useCallback(() => {
    navigation.navigate(names.LANDING);
  }, [navigation]);

  const handleListItemPress = useCallback((value) => {
    navigation.navigate(names.INSPECTION_CREATE, { selectedMod: value, inspectionId });
  }, [inspectionId, navigation]);

  const renderListItem = useCallback(({ item, index }) => {
    const { title, icon, value, description } = item;
    const taskName = TASKS_BY_MOD[value];
    const task = Object.values(inspection?.tasks || {}).find((t) => t?.name === taskName);
    const disabled = ['TODO', 'IN_PROGRESS', 'DONE', 'ERROR'].includes(task?.status);

    const left = () => <List.Icon icon={icon} />;
    const right = () => (['TODO', 'IN_PROGRESS'].includes(task?.status)
      ? <ActivityIndicator color="white" size={16} style={styles.listLoading} />
      : <List.Icon icon={ICON_BY_STATUS[task?.status] || 'chevron-right'} />);

    const handlePress = () => handleListItemPress(value);
    const status = task?.status ? STATUSES[task.status] : description;

    return (
      <Surface style={(index % 2 === 0) ? styles.evenListItem : styles.oddListItem}>
        <List.Item
          title={title}
          description={status}
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
      getInspection.start();
    }
  }, [inspectionId, getInspection]);

  const intervalId = useInterval(start, 1000);

  useFocusEffect(useCallback(() => {
    start();
    return () => clearInterval(intervalId);
  }, [navigation, start, intervalId]));

  return (
    <SafeAreaView style={{ height }}>
      <LinearGradient
        colors={[colors.background, colors.gradient]}
        style={[styles.background, { height }]}
      />
      <Container style={[styles.root, isPortrait ? styles.portrait : {}]}>
        <View style={[styles.left, isPortrait ? styles.leftPortrait : {}]}>
          {isEmpty(getInspection.denormalizedEntities) ? <Artwork /> : (
            getInspection.denormalizedEntities.map((i) => (
              <Inspection {...i} key={`landing-inspection-${i.id}`} />
            )))}
        </View>
        <Card style={[styles.right, isPortrait ? styles.rightPortrait : {}]}>
          <ScrollView contentContainerStyle={{ height: isPortrait ? undefined : height - 51 }}>
            <List.Section>
              <List.Subheader>Click to run a new inspection</List.Subheader>
              <FlatList
                data={LIST_ITEMS}
                renderItem={renderListItem}
                keyExtractor={(item) => item.value}
              />
            </List.Section>
          </ScrollView>
          {!isEmpty(inspection) && (
            <Card.Actions style={styles.actions}>
              <Button color={colors.text} onPress={handleReset}>Reset inspection</Button>
            </Card.Actions>
          )}
        </Card>
      </Container>
    </SafeAreaView>
  );
}
