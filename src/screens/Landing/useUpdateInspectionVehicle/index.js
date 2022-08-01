import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import monk from '@monkvision/corejs';
import { useRequest } from '@monkvision/toolkit';

import useAuth from 'hooks/useAuth';

export default function useUpdateInspectionVehicle(id, vehicle) {
  const dispatch = useDispatch();
  const { isAuthenticated } = useAuth();

  const axiosRequest = useCallback(
    async () => monk.entity.vehicle.updateOne(id, vehicle),
    [vehicle],
  );

  const handleRequestSuccess = useCallback(({ entities, result }) => {
    dispatch(monk.actions.updatedOneVehicle({ entities, result }));
  }, [dispatch]);

  const canRequest = useCallback(() => isAuthenticated, [isAuthenticated]);

  const request = useRequest({
    request: axiosRequest,
    onRequestSuccess: handleRequestSuccess,
    canRequest,
  });

  return { ...request };
}
