import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import tailwind from 'tailwind-rn';
import {ActionButton, OnboardingContainer} from '../../components';
import {phoneSubmitAction} from '../../store/user/actions';
import {phoneSubmitSelector} from '../../store/user/selector';

import theme from '../../styles';
import {formatPhoneInput} from '../../utils';

export const PhoneLoginScreen = () => {
  const dispatch = useDispatch();
  const {loading} = useSelector(phoneSubmitSelector);
  const [value, setValue] = useState('');
  const onSubmit = () => {
    dispatch(phoneSubmitAction(value.replace(/[-() ]+/g, '')));
  };
  return (
    <OnboardingContainer>
      <View
        style={[
          tailwind('items-center justify-center'),
          {height: theme.metrics.screenHeight * 0.5},
        ]}>
        <Text style={tailwind('text-2xl font-medium text-white mt-4 w-full')}>
          OTP Verification
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
        <View style={tailwind('w-full items-center')}>
          <View style={tailwind('py-2 px-4 mt-2')}>
            <Text
              style={tailwind(
                'text-sm text-white opacity-50 font-medium text-center',
              )}>
              {'We will send you an '}
              <Text style={tailwind('font-bold')}>One Time Password</Text>
              {' on this mobile number'}
            </Text>
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
