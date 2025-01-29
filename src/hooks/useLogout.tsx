import { useRouter } from "expo-router";
import { Storge } from "../utils/mmkv/Storge";
import { userContext } from "../context/ContextApi";

const useLogout = () => {
  const {
    setcastAndReligion,
    setcourseDetails,
    setfatherDetails,
    setidDetails,
    setmotherDetails,
    setpersonalInformation,
    setstudentAddress,
    setuserDetails,
    setid,
    setpass,
  } = userContext();
  const router = useRouter();
  const Logout = () => {
    Storge.delete("userData");
    console.log(Storge.getString("userData"));
    setcastAndReligion(null);
    setcourseDetails(null);
    setfatherDetails(null);
    setidDetails(null);
    setmotherDetails(null);
    setpersonalInformation(null);
    setstudentAddress(null);
    setuserDetails(null);
    setid("");
    setpass("");

    router.replace("/(spalash)");
  };
  return { Logout };
};

export default useLogout;
