import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { authApi } from '@/api/authApi';
import authReducer from './features/authSlice';
import assessmentsReducer from './features/assessmentSlice';
import loaderReducer from './features/loaderSlice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage
}

const rootReducer = combineReducers({
  auth: authReducer,
  loader: loaderReducer,
  assessments: assessmentsReducer,
  [authApi.reducerPath]: authApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
  }).concat(authApi.middleware),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
setupListeners(store.dispatch);
