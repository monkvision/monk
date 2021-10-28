import React from 'react';
import Constants from 'expo-constants';

import store from 'store';
import { Provider } from 'react-redux';
import { Auth0Provider } from '@auth0/auth0-react';

import { useIcons } from '@monkvision/react-native';
import { theme } from '@monkvision/react-native-views';
import { Provider as PaperProvider } from 'react-native-paper';

import Navigation from 'Navigation';

export default function App() {
  useIcons();

  return (
    <Provider store={store}>
      <Auth0Provider
        domain={Constants.manifest.extra.AUTH_DOMAIN}
        clientId={Constants.manifest.extra.AUTH_CLIENT_ID}
        redirectUri={window.location.origin}
      >
        <PaperProvider theme={theme}>
          <Navigation />
        </PaperProvider>
      </Auth0Provider>
    </Provider>
  );
}
