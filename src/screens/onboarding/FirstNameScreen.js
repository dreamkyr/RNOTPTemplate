import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import tailwind from 'tailwind-rn';
import {OnboardingContainer} from '../../components';
import {updateOnboardingDataAction} from '../../store/onboarding/actions';
import {onboardingSelector} from '../../store/onboarding/selector';

import theme from '../../styles';

export const FirstNameScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {firstName} = useSelector(onboardingSelector);
  const [value, setValue] = useState(firstName);
  const onSubmit = () => {
    dispatch(
      updateOnboardingDataAction({key: 'firstName', value: value.trim()}),
    );
    navigation.navigate('LastName');
  };
  return (
    <OnboardingContainer>
      <View
        style={[
          tailwind('items-center justify-center'),
          {height: theme.metrics.screenHeight * 0.4},
        ]}>
        <Text style={tailwind('text-2xl font-medium text-white mt-4 w-full')}>
          What's your first name?
        </Text>
        <View style={tailwind('mt-6 w-full border-b border-white pb-2')}>
          <TextInput
            autoFocus
            value={value}
            selectionColor={theme.colors.white}
            onChangeText={setValue}
            style={tailwind(
              'text-2xl rounded-lg px-2 tracking-wider text-white font-medium',
            )}
          />
        </View>
      </View>
      {!!value && value.length > 0 && (
        <View style={tailwind('w-full items-end')}>
          <TouchableOpacity
            onPress={onSubmit}
            style={tailwind('border rounded-lg py-1 px-4 border-white mt-8')}>
            <Text
              style={tailwind('text-lg text-white font-medium tracking-wider')}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </OnboardingContainer>
  );
};
