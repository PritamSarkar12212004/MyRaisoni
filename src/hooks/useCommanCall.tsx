import AuthConatant from "../constants/AuthConatant";
import { userContext } from "../context/ContextApi";
import useMainDataCall from "./useMainDataCall";
import axios from "axios";

const useCommanCall = () => {
  const { setloader, setglobaltoken, setglobaluid } = userContext();
  const AuthKeyFinder = ({ id, pass, ErrorAlert, apiCall }: any) => {
    setloader(true);
    axios
      .post("https://ghrua.cybervidya.net/api/auth/login", {
        password: pass,
        reCaptchaToken: AuthConatant.reCaptchaToken,
        userName: id,
      })
      .then((res) => {
        apiCall(res);
        setglobaltoken(res.data.data.token);
        setglobaluid(res.data.data.id);
      })
      .catch((err) => {
        setloader(false);
        ErrorAlert({
          title: "Error",
          message: "Password And ID is not valid",
        });
      });
  };
  return {
    AuthKeyFinder,
  };
};

export default useCommanCall;
