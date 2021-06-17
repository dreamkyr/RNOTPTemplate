import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import tailwind from 'tailwind-rn';

import {ActionButton, OnboardingContainer} from '../../components';
import theme from '../../styles';
import {formatPhoneInput} from '../../utils';

import {submitPhoneAction} from '../../store/onboarding/actions';
import {onboardingSelector} from '../../store/onboarding/selector';

export const PhoneNumberScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {
    phone,
    phoneSubmit: {loading},
  } = useSelector(onboardingSelector);
  const [value, setValue] = useState(phone);
  const onSubmit = () => {
    dispatch(
      submitPhoneAction({
        phone: value.replace(/[-() ]+/g, ''),
        isRegister: true,
      }),
    );
  };
  return (
    <OnboardingContainer>
      <View
        style={[
          tailwind('items-center justify-center'),
          {height: theme.metrics.screenHeight * 0.4},
        ]}>
        <Text style={tailwind('text-2xl font-medium text-white mt-4 w-full')}>
          What's your phone number?
        </Text>
        <View style={tailwind('mt-6 w-full flex-row items-center')}>
          <Text
            style={tailwind(
              'text-2xl px-2 tracking-wider text-white font-medium',
            )}>
            +1
          </Text>
          <View style={tailwind('border-b border-white pb-2 flex-1')}>
            <TextInput
              autoFocus
              value={formatPhoneInput(value)}
              keyboardType="phone-pad"
              selectionColor={theme.colors.white}
              onChangeText={text => setValue(formatPhoneInput(text))}
              style={tailwind(
                'text-2xl rounded-lg pr-2 tracking-wider text-white font-medium',
              )}
            />
          </View>
        </View>
      </View>
      {!!value && formatPhoneInput(value).length > 12 && (
        <View style={tailwind('w-full items-end')}>
          <ActionButton onSubmit={onSubmit} loading={loading} />
        </View>
      )}
    </OnboardingContainer>
  );
};
