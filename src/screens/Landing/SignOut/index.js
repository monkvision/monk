import { useError, utils } from '@monkvision/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Sentry from 'config/sentry';
import { ASYNC_STORAGE_AUTH_KEY, dispatchSignOut } from 'hooks/useSignIn';
import Proptypes from 'prop-types';
import React from 'react';
import { Button, useTheme } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../config/sentryPlatform';

export default function SignOut({ onSuccess }) {
  const { colors } = useTheme();
  const dispatch = useDispatch();
  const { errorHandler, Constants } = useError(Sentry);

  const signOut = () => {
    utils.log(['[Click]', 'Sign-out user']);
    setUser(null);
    AsyncStorage.removeItem(ASYNC_STORAGE_AUTH_KEY)
      .catch((err) => errorHandler(err, Constants.type.APP));
    dispatchSignOut(dispatch);

    onSuccess();
  };

  return (
    <Button color={colors.text} onPress={signOut}>Sign out</Button>
  );
}

SignOut.propTypes = {
  onSuccess: Proptypes.func,
};

SignOut.defaultProps = {
  onSuccess: () => {},
};
