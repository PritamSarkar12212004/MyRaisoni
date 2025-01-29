import axios from "axios";
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
  const AuthKeyFinder = ({ id, pass, ErrorAlert }: any) => {
    setloader(true);
    axios
      .post("https://ghrua.cybervidya.net/api/auth/login", {
        password: pass,
        reCaptchaToken:
          "03AFcWeA4VjStIkJuMSC3oBmw6lUODDjfqvFIxuiBla0q2-X40I7DjrNhF5_N6RDSng5o_M1Bn90FVHD27Pg-ehUsS8k7DYHVuP3AhUS7Uc5j1s-O42O7ddBuqLKtvjueHNvrfQybhdIWXZUImVcJaQmghY4VHhn7j8vrd2D8w3oDQYMptY2I6JSBTyXr8ThaWQcI-mqy4v5WllGdphFedN06NVkO_xioS5Mj8o2bhz-44Jd3X62vEzCTjGMbcZShAYBcOnM_YLBRlUJQA0ggtBLl9tHBoouxs32fz2Z-mI-_kPQdvgiKbXYeGjMYTqlFVTGajlq1JF3TTuWdkw_CFW4dqkJFIq1ejAPnMk6jdCs0T3iP_o4a_v3_3SLNcJRwdL2pdfPN_W5H_n8NXon3wp4TdZ1bHXsAVcvyBqvFOdAz89Hi77myf1UHjH_rcl93rzAqwqGoAZYUrO-kAgq16Gp1m6hfMWmO2U9YTUmvFarlAgdhC_1L11Z30yAZRsMOQBEl6wEa0DQLbstMX6Q57pAv4vBpu8jD3bAdiTW4exDgXVi12CYGZwWYk1guvmzD5IHMUvfxGP6YneOgq3BwOfjApcfeMUf8biIaQ3mGT0jKRdHmMMrb3Shr8dChoc-3KrXmJ6XsFDQX_upfItzPwOI8TrB6jzy91QR6bqRFIGhHGB0cJwB-8V5m1ol8PsOTq056lD15IMmGG5iaR_Rj3uGkJ9KBiNKLkhTZDPhpFdRbvmeTJ-XwgTwO1Jx_HNJYAPxDegEISVVaq4n3fNjYYbbKOLk6gj-YxNCr7ygncZANOISSStQ4wKSotTvYwaYB9wJMbwPpdT6yQP62SAO6WA-3tBVcVF2fQ-WrkOurrF1x-HeS1ZBxMsB1aw7V8vpUcb3GFtqFa20Kmpy3_pDIVIJvItbjFu6NR6zHs3P1a3faPw3I-E5vP6OCU3KdCpWSTxjJ3vyYmeysz3zLSF107rzQ-tiCQGPn2x1qDKRrhBF5NjZ5J6342HLZ5SXbs4w53YDr67J5Jb7ZZxstmDy5ya0aKlRXk3ZGQuLNAxw-SwJQeuTZl6W7RmWK18mVLRD_17tXJCMKMuOod4btcrE36IOjagDBi5lW51BlO4XVzFqkxQB2yi_ZfTlX4qaINUEaSgLBXaoeUh4M1Y7qWS050FknsEKEyu1mnA8QETuC9mJkKT-z-thjwlBfhBDiIH_QWirquwzNBB9AYmnU6yRsN6QenhUnwlIZUT2nv0BjMJ9sfBwIHIp-zZIw9YbHFxDrye-tUsCcbrmbVDuQjkTJ2QckJ1uKIAyWMT0LlXvzE3ZHncnio-ddYWK1e9rv8ryLn2CSR8wDj_W-duwuoeOUeIoM3jfGpPnd1GOarrIvTApy0CgRZYUnCsfJu6kcuV7H4p2VMWXNO311_FYMpx5iUAqzKRwXyTBHDXkIuPLe5nvpQsH7mzHwQ-jFlpCGGh6wBUTj1MaBGukB5EB6iYIxQLKXzS_xeXpfX2YfA31S2B_owZ8zpFt9TZNf3c5xVv-5SQ71Yal3_4EdKJyWtsWt6vsdI5yv2y1w44u_QZvZbSLUk0EpfVaIJV2zhoWIOEK6fDWGYh-Vgzz21QHTzL9TuupOkTuuTmcyxid16tsWYmdDCEG8hWZ8-PrkAmHLa20SMv5jpEATo0rLTJ5RIuk70fBcFb3mUyv5Q4SVaJPLgMQnzcXxBK6F_yeFDUobr33uYahr1l1dQA4__TyQhyWlgUEYe7oAbAVhAin3jnWORnk0CaCBNVN6uosxMfEOZwVw680yO-flck12xk5NN1QkCusZu--dUpl7liICYRXXU2zAF4v1cgVrVWbHvOKJYMQCJbAd4FRSD-MUSsW9gU49h9SLqHCHbGsrfneOggb5Aq7a2XXvjQI11KL4SAxU2QH4qwDCrAx_EirJrL5wBsLWPiM5ELr_eAOeWye7OWtZ3IqKfxIUueIhv3fuCKharAsKrDr5CdKLdAIS8",
        userName: id,
      })
      .then((res) => {
        successFun(res);
      })
      .catch((err) => {
        setloader(false);

        ErrorAlert({
          title: "Error",
          message: "Password And ID is not valid",
        });
      });
  };

  const successFun = async (res) => {
    AxiosInstance.post("/main", {
      data: res.data.data,
    })
      .then((res) => {
        setcastAndReligion(res.data.data.castAndReligion);
        setcourseDetails(res.data.data.courseDetails);
        setfatherDetails(res.data.data.fatherDetails);
        setidDetails(res.data.data.idDetails);
        setmotherDetails(res.data.data.motherDetails);
        setpersonalInformation(res.data.data.personalInformation);
        setstudentAddress(res.data.data.studentAddress);
        setuserDetails(res.data.data.userDetails);
        Storge.set(
          "userData",
          JSON.stringify({
            id: id,
            password: pass,
          })
        );
        router.replace("/(main)");
        setloader(false);
      })
      .catch((err) => {
        console.log(err);
        setloader(false);
      });
  };
  return { AuthKeyFinder };
};

export default useMainDataCall;
