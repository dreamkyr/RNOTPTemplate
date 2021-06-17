import {handleActions} from 'redux-actions';
import produce from 'immer';

import * as actions from './actions';
import {FAIL, START, SUCCESS} from '../common';

const initialState = {
  user: {},
  phoneSubmit: {
    loading: false,
    success: false,
    error: null,
    phone: '',
  },
  login: {
    loading: false,
    success: false,
    error: null,
  },
  update: {
    loading: false,
    success: false,
    error: null,
  },
};

const reducer = handleActions(
  {
    [actions.USER_PHONE_SUBMIT + START]: (state, {payload}) =>
      produce(state, draft => {
        draft.phoneSubmit.loading = true;
        draft.phoneSubmit.success = false;
        draft.phoneSubmit.error = null;
        draft.phoneSubmit.phone = payload;
      }),
    [actions.USER_PHONE_SUBMIT + SUCCESS]: state =>
      produce(state, draft => {
        draft.phoneSubmit.loading = false;
        draft.phoneSubmit.success = true;
        draft.phoneSubmit.error = null;
      }),
    [actions.USER_PHONE_SUBMIT + FAIL]: (state, {payload}) =>
      produce(state, draft => {
        draft.phoneSubmit.loading = false;
        draft.phoneSubmit.success = false;
        draft.phoneSubmit.error = payload;
      }),
    [actions.USER_LOGIN + START]: state =>
      produce(state, draft => {
        draft.login.loading = true;
        draft.login.success = false;
        draft.login.error = null;
      }),
    [actions.USER_LOGIN + SUCCESS]: (state, {payload}) =>
      produce(state, draft => {
        draft.login.loading = false;
        draft.login.success = true;
        draft.login.error = null;
        draft.user = payload;
      }),
    [actions.USER_LOGIN + FAIL]: (state, {payload}) =>
      produce(state, draft => {
        draft.login.loading = false;
        draft.login.success = false;
        draft.login.error = payload;
        draft.user = null;
      }),
    [actions.FETCH_PROFILE + SUCCESS]: (state, {payload}) =>
      produce(state, draft => {
        draft.user = payload;
      }),
    [actions.RESET_USER]: (state, {payload}) =>
      produce(state, draft => {
        draft[payload] = initialState[payload];
      }),
    [actions.RESET_UPDATE_USER]: state =>
      produce(state, draft => {
        draft.update.loading = false;
        draft.update.success = false;
        draft.update.error = null;
      }),
    [actions.UPDATE_USER + START]: (state, {payload}) =>
      produce(state, draft => {
        draft.update.loading = true;
        draft.update.success = false;
        draft.update.error = null;
      }),
    [actions.UPDATE_USER + SUCCESS]: (state, {payload}) =>
      produce(state, draft => {
        draft.user = payload.data;
        draft.update.loading = false;
        draft.update.success = true;
        draft.update.error = null;
      }),
    [actions.UPDATE_USER + FAIL]: (state, {payload}) =>
      produce(state, draft => {
        draft.update.loading = false;
        draft.update.success = false;
        draft.update.error = payload;
      }),
    [actions.USER_LOGOUT]: () => initialState,
  },
  initialState,
);

export default reducer;
