import React from 'react';
import {Text, ScrollView} from 'react-native';
import tailwind from 'tailwind-rn';

export default () => {
  return (
    <ScrollView style={tailwind('px-4')}>
      <Text style={tailwind('text-3xl text-indigo-500 font-bold mt-12')}>
        Welcome back!
      </Text>
    </ScrollView>
  );
};
