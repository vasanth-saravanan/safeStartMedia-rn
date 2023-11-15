import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import rootReducer from './rootSlice';

// Configure the Redux persist options
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['common'],
};

// Create the persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the Redux store
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

// Create the persistor
const persistor = persistStore(store);

export {store, persistor};
