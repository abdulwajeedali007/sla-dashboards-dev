import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import slaTasksSlice from '../store/pegaSlaTasksSlice';
import calenderLaunch from '../store/calenderlaunchSlice';
const store = configureStore({
  reducer: {
    slaTasks: slaTasksSlice,
    calenderLaunch: calenderLaunch,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export default store;
