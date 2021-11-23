import { inspections, images, tasks, vehicles } from '@monkvision/corejs';
import { configureStore } from '@reduxjs/toolkit';
import auth from './slices/auth';

const devTools = process.env.NODE_ENV !== 'production';

const store = configureStore({
  devTools,
  reducer: {
    auth,
    images,
    inspections,
    tasks,
    vehicles,
  },
});

export default store;
export * from './slices/auth';
