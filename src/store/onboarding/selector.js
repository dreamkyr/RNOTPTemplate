import {createSelector} from 'reselect';

const getOnboardingState = ({onboarding}) => onboarding;

export const onboardingSelector = createSelector(
  [getOnboardingState],
  onboarding => onboarding,
);
