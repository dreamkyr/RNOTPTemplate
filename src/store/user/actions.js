import {createAction} from 'redux-actions';
import {START} from '../common';

export const USER_PHONE_SUBMIT = 'USER_PHONE_SUBMIT';
export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';
export const FETCH_PROFILE = 'FETCH_PROFILE';
export const RESET_USER = 'RESET_USER';
export const RESET_UPDATE_USER = 'RESET_UPDATE_USER';
export const UPDATE_USER = 'UPDATE_USER';

export const phoneSubmitAction = createAction(USER_PHONE_SUBMIT + START);
export const loginAction = createAction(USER_LOGIN + START);
export const logoutAction = createAction(USER_LOGOUT);
export const fetchProfile = createAction(FETCH_PROFILE + START);
export const resetUserAction = createAction(RESET_USER);
export const updateUserAction = createAction(UPDATE_USER + START);
export const resetUpdateUserAction = createAction(RESET_UPDATE_USER);
