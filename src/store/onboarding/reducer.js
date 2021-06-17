import {handleActions} from 'redux-actions';
import produce from 'immer';

import * as actions from './actions';
import {FAIL, START, SUCCESS} from '../common';

const initialState = {
  firstName: '',
  lastName: '',
  phone: '',
  phoneSubmit: {
    loading: false,
    error: null,
    success: false,
  },
  codeVerify: {
    loading: false,
    error: null,
    success: false,
  },
  profileSubmit: {
    loading: false,
    error: null,
    success: false,
  },
};

const reducer = handleActions(
  {
    [actions.UPDATE_ONBOARDING]: (state, {payload}) =>
      produce(state, draft => {
        draft[payload.key] = payload.value;
      }),
    [actions.SUBMIT_PHONE + START]: (state, {payload}) =>
      produce(state, draft => {
        draft.phoneSubmit.loading = true;
        draft.phoneSubmit.success = false;
        draft.phoneSubmit.error = null;
      }),
    [actions.SUBMIT_PHONE + SUCCESS]: state =>
      produce(state, draft => {
        draft.phoneSubmit.loading = false;
        draft.phoneSubmit.success = true;
        draft.phoneSubmit.error = null;
      }),
    [actions.SUBMIT_PHONE + FAIL]: (state, {payload}) =>
      produce(state, draft => {
        draft.phoneSubmit.loading = false;
        draft.phoneSubmit.success = false;
        draft.phoneSubmit.error = payload;
      }),
    [actions.VERIFY_PHONE + START]: state =>
      produce(state, draft => {
        draft.codeVerify.loading = true;
        draft.codeVerify.success = false;
        draft.codeVerify.error = null;
      }),
    [actions.VERIFY_PHONE + SUCCESS]: state =>
      produce(state, draft => {
        draft.codeVerify.loading = false;
        draft.codeVerify.success = true;
        draft.codeVerify.error = null;
      }),
    [actions.VERIFY_PHONE + FAIL]: (state, {payload}) =>
      produce(state, draft => {
        draft.codeVerify.loading = false;
        draft.codeVerify.success = false;
        draft.codeVerify.error = payload;
      }),
    [actions.COMPLETE_ONBOARDING + START]: state =>
      produce(state, draft => {
        if (!draft.profileSubmit) {
          draft.profileSubmit = initialState.profileSubmit;
        }
        draft.profileSubmit.loading = true;
        draft.profileSubmit.success = false;
        draft.profileSubmit.error = null;
      }),
    [actions.COMPLETE_ONBOARDING + SUCCESS]: () => initialState,
    [actions.COMPLETE_ONBOARDING + FAIL]: (state, {payload}) =>
      produce(state, draft => {
        draft.profileSubmit.loading = false;
        draft.profileSubmit.success = false;
        draft.profileSubmit.error = payload;
      }),
    [actions.RESET_ONBOARDING]: () => initialState,
  },
  initialState,
);

export default reducer;
