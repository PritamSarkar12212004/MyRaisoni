import { createContext, useContext, useState } from "react";
const Context = createContext();
export const ContextProvider = ({ children }: any) => {
  const [loader, setloader] = useState(false);

  const [id, setid] = useState("");
  const [pass, setpass] = useState("");

  // store detiles
  const [castAndReligion, setcastAndReligion] = useState(null);
  const [courseDetails, setcourseDetails] = useState(null);
  const [fatherDetails, setfatherDetails] = useState(null);
  const [idDetails, setidDetails] = useState(null);
  const [motherDetails, setmotherDetails] = useState(null);
  const [personalInformation, setpersonalInformation] = useState(null);
  const [studentAddress, setstudentAddress] = useState(null);
  const [userDetails, setuserDetails] = useState(null);

  // userData
  const [userData, setuserData] = useState(null);
  return (
    <Context.Provider
      value={{
        id,
        setid,
        pass,
        setpass,
        loader,
        setloader,
        userData,
        setuserData,
        castAndReligion,
        setcastAndReligion,
        courseDetails,
        setcourseDetails,
        fatherDetails,
        setfatherDetails,
        idDetails,
        setidDetails,
        motherDetails,
        setmotherDetails,
        personalInformation,
        setpersonalInformation,
        studentAddress,
        setstudentAddress,
        userDetails,
        setuserDetails,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export const userContext = () => useContext(Context);
