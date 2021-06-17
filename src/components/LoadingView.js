import React from 'react';
import {ActivityIndicator, View, Text} from 'react-native';
import tailwind from 'tailwind-rn';

import theme from '../styles';

export const LoadingView = ({label, transparent}) => (
  <View
    style={tailwind(
      `absolute w-full h-full justify-center items-center z-50 ${
        !transparent ? 'bg-black bg-opacity-80' : 'bg-white'
      }`,
    )}>
    {label && (
      <Text style={[tailwind('text-white text-xl mb-10')]}>{label}</Text>
    )}
    <ActivityIndicator
      color={`${transparent ? theme.colors.indigo : 'white'}`}
      size="large"
    />
  </View>
);
