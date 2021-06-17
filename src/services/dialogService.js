import {Alert} from 'react-native';

export const showConfirmDialog = (
  title = 'Confirm',
  message = '',
  confirmButton = 'Yes',
  onConfirm = () => {},
) => {
  Alert.alert(
    title,
    message,
    [
      {
        text: 'Cancel',
        onPress: () => {},
      },
      {
        text: confirmButton,
        style: confirmButton === 'Delete' ? 'destructive' : 'default',
        onPress: onConfirm,
      },
    ],
    {cancelable: false},
  );
};

export const showErrorDialog = (
  title = 'Error',
  message = 'Error',
  callback = () => {},
) => {
  Alert.alert(title, message, [{text: 'Ok', onPress: callback}], {
    cancelable: false,
  });
};
