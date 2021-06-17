import * as React from 'react';

export const isReadyRef = React.createRef();

export const navigationRef = React.createRef();

export function navigate(name, params) {
  if (isReadyRef.current && navigationRef.current) {
    navigationRef.current.navigate(name, params);
  } else {
    console.warn('Navigation is empty');
  }
}

export function back() {
  if (isReadyRef.current && navigationRef.current) {
    navigationRef.current.goBack();
  } else {
    console.warn('Navigation is empty');
  }
}

export function navigateReset(actions, index = 0) {
  if (isReadyRef.current && navigationRef.current) {
    navigationRef.current.reset({index, routes: actions.map(name => ({name}))});
  } else {
    console.warn('Navigation is empty');
  }
}

export const getNavigationDispatch = () => {
  if (isReadyRef.current && navigationRef.current) {
    return navigationRef.current.dispatch;
  } else {
    return null;
  }
};
