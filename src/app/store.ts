import { configureStore } from '@reduxjs/toolkit';

import beerReducer from '../features/beerSlice';
import favouriteSlice from '../features/favouriteSlice';

export const store = configureStore({
  reducer: {
    beerReducer,
    favouriteSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
