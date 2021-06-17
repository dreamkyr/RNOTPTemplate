import React from 'react';
import {TouchableOpacity, Text, ActivityIndicator, View} from 'react-native';
import tailwind from 'tailwind-rn';
import theme from '../styles';

export const ActionButton = ({
  label = 'Next',
  onSubmit = () => {},
  loading = false,
  style,
  textStyle,
}) => (
  <TouchableOpacity
    disabled={loading}
    onPress={onSubmit}
    style={[tailwind('border rounded-lg py-1 px-4 border-white mt-8'), style]}>
    <Text
      style={[
        tailwind('text-lg text-white font-medium tracking-wider'),
        loading && {color: theme.colors.transparent},
        textStyle,
      ]}>
      {label}
    </Text>
    {loading && (
      <View style={tailwind('absolute inset-0 justify-center')}>
        <ActivityIndicator color={theme.colors.white} />
      </View>
    )}
  </TouchableOpacity>
);
