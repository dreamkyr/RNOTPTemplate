import {axiosInstance} from '../../api';
import {
  all,
  call,
  fork,
  put,
  take,
  select,
  takeLatest,
} from 'redux-saga/effects';

import {FAIL, START, SUCCESS} from '../common';
import {
  FETCH_PROFILE,
  RESET_USER,
  USER_LOGIN,
  USER_LOGOUT,
  USER_PHONE_SUBMIT,
} from './actions';
import {COMPLETE_ONBOARDING} from '../onboarding/actions';

import {clearAuthToken, setAuthToken} from '../../services/localStorageService';
import {navigateReset, navigate} from '../../services/navigationService';
import {getError} from '../../utils';
import {showErrorDialog} from '../../services/dialogService';

function* submitPhone() {
  while (true) {
    const {payload: phone} = yield take(USER_PHONE_SUBMIT + START);
    try {
      yield axiosInstance.post('/phoneVerify', {phone, isRegister: false});
      yield put({type: USER_PHONE_SUBMIT + SUCCESS});
      yield call(navigate, 'CodeVerify');
    } catch (error) {
      const errorData = getError(error);
      showErrorDialog('Error', errorData.message);
      yield put({type: USER_PHONE_SUBMIT + FAIL, payload: errorData});
      yield put({type: RESET_USER, payload: 'phoneSubmit'});
    }
  }
}

function* login() {
  while (true) {
    const {payload: code} = yield take(USER_LOGIN + START);
    const {
      user: {phoneSubmit},
    } = yield select();
    try {
      const {data: result} = yield axiosInstance.post('/phoneCodeVerify', {
        code,
        phone: phoneSubmit.phone,
      });
      const {user, token} = result;
      if (token && user) {
        yield call(setAuthToken, token);
        yield put({type: USER_LOGIN + SUCCESS, payload: user});
        yield call(navigateReset, ['Home']);
      } else {
        showErrorDialog('Account not exists, Please try to signup.');
        yield put({
          type: USER_LOGIN + FAIL,
          payload: {message: 'Account not exists, Please try to signup.'},
        });
      }
    } catch (error) {
      const errorData = getError(error);
      showErrorDialog('Error', errorData.message);
      yield put({
        type: USER_LOGIN + FAIL,
        payload: errorData,
      });
      yield put({type: RESET_USER, payload: 'login'});
    }
  }
}

function* logOut() {
  while (true) {
    yield take(USER_LOGOUT);
    yield call(clearAuthToken);
    yield call(navigateReset, ['OnBoarding']);
  }
}

function* completeOnboarding() {
  while (true) {
    const {payload: user} = yield take(COMPLETE_ONBOARDING + SUCCESS);
    yield put({type: USER_LOGIN + SUCCESS, payload: user});
    yield call(navigateReset, ['Home']);
  }
}

function* fetchProfile() {
  try {
    const {data} = yield axiosInstance.get('/users/me');
    yield put({type: FETCH_PROFILE + SUCCESS, payload: data});
  } catch (error) {
    console.log({error});
    yield put({type: USER_LOGOUT});
  }
}

export function* userSaga() {
  yield all([
    fork(submitPhone),
    fork(login),
    fork(logOut),
    fork(completeOnboarding),
    takeLatest([FETCH_PROFILE + START], fetchProfile),
  ]);
}
