/* eslint-disable global-require */
import { theme as initialTheme } from '@monkvision/toolkit';
import { Loader } from '@monkvision/ui';
import 'config/corejs';

import SilentAuth from 'components/SilentAuth';
import SilentLang from 'components/SilentLang';

import Navigation from 'config/Navigation';
import ExpoConstants from 'expo-constants';
import * as Font from 'expo-font';

import * as SplashScreen from 'expo-splash-screen';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, useWindowDimensions, View } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import store from 'store';
import { MonitoringContext } from '@monkvision/corejs/src/monitoring';

const theme = {
  ...DefaultTheme,
  ...initialTheme,
  ...ExpoConstants.manifest.extra.theme,
};

const styles = StyleSheet.create({
  layout: {
    backgroundColor: theme.colors.background,
  },
});

const customFonts = {
  MaterialCommunityIcons: require('@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf'),
  'Material Design Icons': require('@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf'),
};

function App() {
  const { height: minHeight } = useWindowDimensions();
  const { t } = useTranslation();

  const [appIsReady, setAppIsReady] = useState(false);

  const { errorHandler } = useContext(MonitoringContext);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      try {
        await SplashScreen.hideAsync();
      } catch (err) {
        errorHandler(err);
      }
    }
  }, [appIsReady]);

  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();
        // Preload fonts, make any API calls you need to do here
        await Font.loadAsync(customFonts);
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        // await new Promise((resolve) => { setTimeout(resolve, 2000); });
      } catch (err) {
        errorHandler(err);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  if (!appIsReady) {
    return (
      <View style={[styles.layout, { flex: 1, justifyContent: 'center', alignItems: 'center' }]}>
        <Loader texts={[t('appLoading')]} colors={theme.loaderDotsColors} />
      </View>
    );
  }

  return (
    <Provider store={store}>
      <SilentAuth />
      <SilentLang />
      <PaperProvider theme={theme}>
        <View style={[styles.layout, { minHeight }]} onLayout={onLayoutRootView}>
          <Navigation />
        </View>
      </PaperProvider>
    </Provider>
  );
}

export default App;
