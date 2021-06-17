import {createSelector} from 'reselect';

const getUserState = ({user}) => user;

export const userSelector = createSelector([getUserState], ({user}) => user);
export const loginSelector = createSelector([getUserState], ({login}) => login);
export const phoneSubmitSelector = createSelector(
  [getUserState],
  ({phoneSubmit}) => phoneSubmit,
);
export const userUpdateSelector = createSelector(
  [getUserState],
  ({update}) => update,
);
