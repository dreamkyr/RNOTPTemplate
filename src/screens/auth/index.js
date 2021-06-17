import React from 'react';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';

import {PhoneLoginScreen} from './PhoneLoginScreen';
import {CodeVerifyScreen} from './CodeVerifyScreen';

const Stack = createNativeStackNavigator();

const routes = [
  {name: 'Login', component: PhoneLoginScreen},
  {name: 'CodeVerify', component: CodeVerifyScreen},
];

export default function () {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
        replaceAnimation: 'push',
      }}>
      {routes.map(router => (
        <Stack.Screen key={router.name} {...router} />
      ))}
    </Stack.Navigator>
  );
}
