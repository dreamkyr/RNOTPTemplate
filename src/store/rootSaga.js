import {all, fork} from 'redux-saga/effects';

import {userSaga} from './user/saga';
import {onboardingSaga} from './onboarding/saga';

export default function* rootSaga() {
  yield all([fork(userSaga), fork(onboardingSaga)]);
}
