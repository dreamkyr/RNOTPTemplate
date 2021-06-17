import React from 'react';
import {Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import tailwind from 'tailwind-rn';

import {ActionButton} from '../../../components';
import {formatPhoneInput} from '../../../utils/formatter';

import {logoutAction} from '../../../store/user/actions';
import {userSelector} from '../../../store/user/selector';
import {showConfirmDialog} from '../../../services/dialogService';

export default () => {
  const dispatch = useDispatch();
  const {fullName, phone} = useSelector(userSelector);
  const onLogout = () => {
    showConfirmDialog(
      'Confirm',
      'Are you sure you want to logout?',
      'Logout',
      () => dispatch(logoutAction()),
    );
  };

  return (
    <View style={tailwind('px-4')}>
      <Text style={tailwind('text-3xl text-indigo-500 font-bold mt-12')}>
        {fullName}
      </Text>
      <Text style={tailwind('text-xl text-black font-bold mt-4')}>
        +1 {formatPhoneInput(phone)}
      </Text>
      <View style={tailwind('w-full justify-center items-center')}>
        <ActionButton
          label="Logout"
          style={tailwind('border-indigo-500')}
          textStyle={tailwind('text-indigo-500')}
          onSubmit={onLogout}
        />
      </View>
    </View>
  );
};
