import {Keyboard, Platform} from 'react-native';

import {screenWidth} from '../styles/metrics';

export * from './exceptions';
export * from './validator';
export * from './formatter';

export const isIOS = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';
export const dismissKeyboard = () => Keyboard.dismiss();

export const CAMERA_MAX_PHOTO_WIDTH = 1000;
export const backgroundStateMatch = state =>
  state?.match(/inactive|background/);

export const scaledWidth = width => (width / 414) * screenWidth;
