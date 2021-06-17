import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const createDebugger = require('redux-flipper').default;

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeEnhancers(
    __DEV__
      ? applyMiddleware(sagaMiddleware, createDebugger())
      : applyMiddleware(sagaMiddleware),
  ),
);

if (__DEV__) {
  window.store = store;
}

sagaMiddleware.run(rootSaga);

export let persistor = persistStore(store);

export default store;
