import { useCallback, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import monk from '@monkvision/corejs';
import discoveries from 'config/discoveries';

import { revokeAsync } from 'expo-auth-session';
import { authSlice } from 'store/slices/auth';

export default function useAuth() {
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);
  const { accessToken, tokenType } = auth;
  const isAuthenticated = useMemo(() => Boolean(accessToken), [accessToken]);

  // signOut
  const [isLoggingOut, setLoggingOut] = useState(false);

  const signOut = useCallback(async () => {
    setLoggingOut(true);
    const config = {
      clientId: monk.config.authConfig.clientId,
      token: accessToken,
      tokenTypeHint: tokenType,
    };
    try {
      await revokeAsync(config, discoveries);

      dispatch(authSlice.actions.reset({ isSignedOut: true }));
    } catch (e) {
      // TODO: Add Monitoring code in MN-182
      // errorHandler(e, SentryConstants.type.FUNC, config);
      setLoggingOut(false);
    }
  }, [accessToken, dispatch, tokenType]);

  return { ...auth, signOut, isLoggingOut, isAuthenticated };
}
