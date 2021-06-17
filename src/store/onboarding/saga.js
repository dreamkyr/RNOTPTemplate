import {axiosInstance} from '../../api';
import {all, call, fork, put, take, select} from 'redux-saga/effects';
import {navigate} from '../../services/navigationService';
import {FAIL, START, SUCCESS} from '../common';

import {
  COMPLETE_ONBOARDING,
  SUBMIT_PHONE,
  UPDATE_ONBOARDING,
  VERIFY_PHONE,
} from './actions';
import {setAuthToken} from '../../services/localStorageService';
import {onboardingSelector} from './selector';
import {getError} from '../../utils';
import {showErrorDialog} from '../../services/dialogService';

function* init() {
  while (true) {
    const {
      payload: {phone, isRegister},
    } = yield take(SUBMIT_PHONE + START);
    yield put({type: UPDATE_ONBOARDING, payload: {key: 'phone', value: phone}});
    try {
      yield axiosInstance.post('/phoneVerify', {
        phone,
        isRegister: !!isRegister,
      });
      yield put({type: SUBMIT_PHONE + SUCCESS});
      yield call(navigate, 'CodeVerify');
    } catch (error) {
      const errorData = getError(error);
      showErrorDialog('', errorData.message);
      yield put({type: SUBMIT_PHONE + FAIL, payload: errorData});
    }
  }
}

function* verifyCode() {
  while (true) {
    const {payload: code} = yield take(VERIFY_PHONE + START);
    const state = yield select();
    const {phone} = onboardingSelector(state);
    try {
      yield axiosInstance.post('/phoneCodeVerify', {phone, code});
      yield put({type: VERIFY_PHONE + SUCCESS});
      yield put({type: COMPLETE_ONBOARDING + START});
    } catch (error) {
      const errorData = getError(error);
      showErrorDialog('', errorData.message);
      yield put({type: VERIFY_PHONE + FAIL, payload: errorData});
    }
  }
}

function* completeOnboarding() {
  while (true) {
    yield take(COMPLETE_ONBOARDING + START);
    try {
      const {onboarding} = yield select();
      const {data: result} = yield axiosInstance.post('/register', onboarding);
      const {user, token} = result;
      yield call(setAuthToken, token);
      yield put({type: COMPLETE_ONBOARDING + SUCCESS, payload: user});
    } catch (error) {
      const errorData = getError(error);
      showErrorDialog('', errorData.message);
      yield put({
        type: COMPLETE_ONBOARDING + FAIL,
        payload: errorData,
      });
    }
  }
}

export function* onboardingSaga() {
  yield all([fork(init), fork(verifyCode), fork(completeOnboarding)]);
}
