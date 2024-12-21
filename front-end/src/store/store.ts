import { configureStore } from '@reduxjs/toolkit';
import loadingReducer from './slices/loadingSlice';
import snackbarReducer from './slices/snackbarSlice';
import { sendUnsignedDocApi } from '../services/sendUnsignedDocApi';
import { receiveSignedDocApi } from '../services/receiveSignedDocApi';

export const store = configureStore({
  reducer: {
    loading: loadingReducer,
    snackbar: snackbarReducer,
    [sendUnsignedDocApi.reducerPath]: sendUnsignedDocApi.reducer,
    [receiveSignedDocApi.reducerPath]: receiveSignedDocApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(sendUnsignedDocApi.middleware)
      .concat(receiveSignedDocApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
