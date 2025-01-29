import { ALERT_TYPE, Toast } from "react-native-alert-notification";

const ErrorAlert = ({ title, message }: any) => {
  Toast.show({
    type: ALERT_TYPE.DANGER,
    title: title,
    textBody: message,
  });
};

export default ErrorAlert;
