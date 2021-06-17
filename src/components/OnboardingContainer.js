import React from 'react';
import {SafeAreaView, View, ScrollView} from 'react-native';
import tailwind from 'tailwind-rn';

import {LoadingView} from './LoadingView';

export const OnboardingContainer = ({children, loading}) => (
  <View style={tailwind('flex-1 bg-indigo-500')}>
    <SafeAreaView />
    <ScrollView
      bounces={false}
      keyboardShouldPersistTaps="handled"
      keyboardDismissMode="interactive"
      style={tailwind('flex-1')}
      contentContainerStyle={tailwind('px-6')}>
      {children}
    </ScrollView>
    {loading && <LoadingView />}
  </View>
);
