export const getError = error => {
  if (error.response && error.response.data) {
    return {...error.response.data};
  }
  if (error.message) {
    return {
      message: 'Service Unavailable. Please try again later.',
      status: null,
    };
  }
  return {message: 'Unknown Error.', status: null};
};
