import React from 'react';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';

import {WelcoemScreen} from './WelcomeScreen';
import {FirstNameScreen} from './FirstNameScreen';
import {LastNameScreen} from './LastNameScreen';
import {PhoneNumberScreen} from './PhoneNumberScreen';
import {CodeVerifyScreen} from './CodeVerifyScreen';

const Stack = createNativeStackNavigator();

const routes = [
  {name: 'OnBoarding', component: WelcoemScreen},
  {name: 'FirstName', component: FirstNameScreen},
  {name: 'LastName', component: LastNameScreen},
  {name: 'PhoneNumber', component: PhoneNumberScreen},
  {name: 'CodeVerify', component: CodeVerifyScreen},
];

export default function () {
  return (
    <Stack.Navigator
      initialRouteName="OnBoarding"
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
