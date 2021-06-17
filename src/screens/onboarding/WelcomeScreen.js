import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import tailwind from 'tailwind-rn';

export const WelcoemScreen = ({navigation}) => {
  return (
    <View style={tailwind('flex-1 bg-indigo-500')}>
      <View style={tailwind('flex-1 justify-around items-center')}>
        <View>
          <Text
            style={tailwind(
              'text-4xl text-center font-bold text-white tracking-widest',
            )}>
            Welcome to
          </Text>
          <Text
            style={tailwind(
              'text-4xl text-center font-bold text-white tracking-widest mt-4',
            )}>
            OTP Template!
          </Text>
        </View>
        <View style={tailwind('items-center')}>
          <TouchableOpacity
            onPress={() => navigation.navigate('FirstName')}
            style={tailwind('border rounded-lg py-1 px-4 border-white')}>
            <Text
              style={tailwind('text-lg text-white font-medium tracking-wider')}>
              Get started
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Auth')}
            style={tailwind('py-2 px-4 mt-4')}>
            <Text
              style={tailwind('text-sm text-white font-medium tracking-wider')}>
              {'Already have an account? '}
              <Text style={tailwind('font-bold')}>Login</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
