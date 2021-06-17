import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import tailwind from 'tailwind-rn';

import theme from '../styles';

const buttonsArr = [{name: 'Home', route: 'Dashboard'}, {name: 'Profile'}];

export const BottomTabBar = props => {
  const edgeInsets = useSafeAreaInsets();
  const {
    navigation,
    state: {index: activeIndex},
  } = props;

  const onNavigate = index => {
    navigation.navigate(buttonsArr[index].route || buttonsArr[index].name);
  };

  return (
    <View
      style={[
        {paddingBottom: edgeInsets.bottom},
        tailwind('bg-indigo-500 flex-row border-t-2 border-gray-500'),
      ]}>
      {buttonsArr.map((button, index) => (
        <TouchableOpacity
          key={`BottomNavigationBar${index}`}
          style={tailwind('flex-1 justify-center items-center py-4')}
          onPress={() => {
            onNavigate(index);
          }}>
          <Text
            style={[
              tailwind('text-gray-300 text-lg'),
              activeIndex === index && {color: theme.colors.white},
              activeIndex === index && tailwind('font-bold'),
            ]}>
            {button.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
