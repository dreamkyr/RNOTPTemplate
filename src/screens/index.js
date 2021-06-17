import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {connect, useDispatch} from 'react-redux';

import OnBoardingNavigator from './onboarding';
import AuthNavigator from './auth';
import HomeNavigator from './home';

import {getAuthToken} from '../services/localStorageService';
import {LoadingView} from '../components';

import {fetchProfile} from '../store/user/actions';

const Stack = createNativeStackNavigator();

function RootStack() {
  const dispatch = useDispatch();
  const [authLoaded, setAuthLoaded] = useState(false);
  const [token, setToken] = useState(null);
  useEffect(() => {
    const getToken = async () => {
      const savedToken = await getAuthToken();
      if (savedToken) {
        setToken(savedToken);
        dispatch(fetchProfile());
      }
      setAuthLoaded(true);
    };
    getToken();
  }, [dispatch]);
  if (!authLoaded) {
    return <LoadingView transparent />;
  }
  let initialRoute = 'OnBoarding';

  if (token) {
    initialRoute = 'Home';
  }
  return (
    <Stack.Navigator
      initialRouteName={initialRoute}
      screenOptions={{
        headerShown: false,
        replaceAnimation: 'push',
        stackAnimation: 'fade',
      }}>
      <Stack.Screen name="OnBoarding" component={OnBoardingNavigator} />
      <Stack.Screen name="Auth" component={AuthNavigator} />
      <Stack.Screen name="Home" component={HomeNavigator} />
    </Stack.Navigator>
  );
}

const mapStateToProps = ({onboarding}) => ({
  data: onboarding,
});

export default connect(mapStateToProps, null)(RootStack);
