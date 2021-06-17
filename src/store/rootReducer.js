import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';

import userReducer from './user/reducer';
import onboardingReducer from './onboarding/reducer';

const onboardingPersistConfig = {
  key: 'onboarding',
  storage: AsyncStorage,
  blacklist: ['phoneSubmit', 'codeVerify', 'profileSubmit'],
};

const rootReducer = combineReducers({
  user: userReducer,
  onboarding: persistReducer(onboardingPersistConfig, onboardingReducer),
});

export default function (state, action) {
  return rootReducer(state, action);
}
