import AxiosInstance from "../utils/axios/AxiosInstance";
import { userContext } from "../context/ContextApi";
import { Storge } from "../utils/mmkv/Storge";
import { useRouter } from "expo-router";

const useMainDataCall = () => {
  const {
    setloader,
    id,
    pass,
    setcastAndReligion,
    setcourseDetails,
    setfatherDetails,
    setidDetails,
    setmotherDetails,
    setpersonalInformation,
    setstudentAddress,
    setuserDetails,
  } = userContext();
  const router = useRouter();
  const successFun = async (res) => {
    AxiosInstance.post("/main", {
      data: res.data.data,
    })
      .then((res) => {
        Storge.set(
          "userData",
          JSON.stringify({
            id: id,
            password: pass,
          })
        );
        setcastAndReligion(res.data.data.castAndReligion);
        setcourseDetails(res.data.data.courseDetails);
        setfatherDetails(res.data.data.fatherDetails);
        setidDetails(res.data.data.idDetails);
        setmotherDetails(res.data.data.motherDetails);
        setpersonalInformation(res.data.data.personalInformation);
        setstudentAddress(res.data.data.studentAddress);
        setuserDetails(res.data.data.userDetails);
        router.replace("/(main)");
        setloader(false);
      })
      .catch((err) => {
        console.log(err);
        setloader(false);
      });
  };
  return { successFun };
};

export default useMainDataCall;
