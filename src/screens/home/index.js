import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import tailwind from 'tailwind-rn';

import {BottomTabBar} from '../../components';
import Dashboard from './screens/Dashboard';
import Profile from './screens/Profile';

const Tab = createBottomTabNavigator();

const routes = [
  {name: 'Dashboard', component: Dashboard},
  {name: 'Profile', component: Profile},
];

export default function () {
  return (
    <View style={tailwind('flex-1')}>
      <SafeAreaView />
      <Tab.Navigator
        initialRouteName="Dashboard"
        backBehavior="history"
        tabBar={props => <BottomTabBar {...props} />}>
        {routes.map(router => (
          <Tab.Screen key={router.name} {...router} />
        ))}
      </Tab.Navigator>
    </View>
  );
}
