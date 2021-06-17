import React, {useEffect, useRef, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import OtpInputs from 'react-native-otp-inputs';
import {useDispatch, useSelector} from 'react-redux';
import tailwind from 'tailwind-rn';
import {OnboardingContainer} from '../../components';
import {
  submitPhoneAction,
  verifyPhoneAction,
} from '../../store/onboarding/actions';
import {onboardingSelector} from '../../store/onboarding/selector';

import theme from '../../styles';
import {formatPhoneInput} from '../../utils';

export const CodeVerifyScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const otpRef = useRef();
  const {
    phone,
    phoneSubmit: {phoneLoading},
    codeVerify: {loading: codeLoading},
    profileSubmit: {loading: profileLoading},
  } = useSelector(onboardingSelector);
  const [value, setValue] = useState('');
  useEffect(() => {
    if (otpRef.current) {
      otpRef.current.focus();
    }
  }, []);
  const onSubmit = () => {
    dispatch(verifyPhoneAction(value));
  };
  const loading = phoneLoading || codeLoading || profileLoading;
  return (
    <OnboardingContainer loading={loading}>
      <View
        style={[
          tailwind('items-center justify-center'),
          {height: theme.metrics.screenHeight * 0.5},
        ]}>
        <Text style={tailwind('text-2xl font-medium text-white mt-4 w-full')}>
          Enter verification code
        </Text>
        <Text
          style={tailwind(
            'text-base font-normal tracking-wide text-white mt-4 w-full',
          )}>
          {`Please enter the verification code\nsent to +1 ${formatPhoneInput(
            phone,
          )}.`}
        </Text>
        <View style={tailwind('mt-4 w-full ')}>
          <OtpInputs
            ref={otpRef}
            handleChange={code => setValue(code)}
            numberOfInputs={6}
            inputStyles={tailwind('flex-1 p-2 text-3xl text-center text-white')}
            inputContainerStyles={tailwind(
              'border border-white rounded-md m-1 flex-1',
            )}
            selectionColor={theme.colors.white}
            style={tailwind('w-full h-16 flex-row')}
          />
        </View>
      </View>
      <View style={tailwind('w-full items-center')}>
        <TouchableOpacity
          onPress={() => dispatch(submitPhoneAction({phone, isRegister: true}))}
          style={tailwind('py-2 px-4')}>
          <Text
            style={tailwind('text-sm text-white font-medium tracking-wider')}>
            {"Didn't get the code? "}
            <Text style={tailwind('font-bold')}>Resend</Text>
          </Text>
        </TouchableOpacity>
      </View>
      {!!value && value.length === 6 && (
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
