import AsyncStorage from '@react-native-async-storage/async-storage';

const session = 'otptemplate:session';

export const setAuthToken = async token => {
  await AsyncStorage.setItem(session, token);
};

export const getAuthToken = async () => {
  return await AsyncStorage.getItem(session);
};

export const clearAuthToken = async () => {
  await AsyncStorage.removeItem(session);
};
