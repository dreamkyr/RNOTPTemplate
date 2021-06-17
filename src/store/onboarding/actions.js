import {createAction} from 'redux-actions';
import {START} from '../common';

export const RESET_ONBOARDING = 'RESET_ONBOARDING';
export const UPDATE_ONBOARDING = 'UPDATE_ONBOARDING';
export const SUBMIT_PHONE = 'SUBMIT_PHONE';
export const VERIFY_PHONE = 'VERIFY_PHONE';
export const COMPLETE_ONBOARDING = 'COMPLETE_ONBOARDING';

export const resetOnboardingAction = createAction(RESET_ONBOARDING);
export const updateOnboardingDataAction = createAction(UPDATE_ONBOARDING);
export const submitPhoneAction = createAction(SUBMIT_PHONE + START);
export const verifyPhoneAction = createAction(VERIFY_PHONE + START);
export const completeOnboardingAction = createAction(
  COMPLETE_ONBOARDING + START,
);
