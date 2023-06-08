import { GlobalStateContext } from "./GlobalContext";
import React, { createContext, useContext } from "react";
import axios from "axios";

const GlobalMethodsContext = createContext();

const GlobalMethodsProvider = ({ children }) => {
  const { setUserName, setToken } = useContext(GlobalStateContext);

  const SignIn = async (values) => {
    try {
      const url = "http://localhost:4000/api/users/login";
      const response = await axios({
        method: "POST",
        url,
        data: values,
      });
      //   console.log("name: ", response.data.access_token);
      setUserName(response.data.user.name);
      setToken(response.data.access_token);
      return response.status;
    } catch (error) {
      console.log(error.message);
      return 401;
    }
  };

  const SignUp = async (values) => {
    try {
      const url = "http://localhost:4000/api/users/signin";
      const response = await axios({
        method: "POST",
        url,
        data: values,
      });
      //   console.log("name: ", response.data.access_token);
      // setUserName(response.data.user.name);
      // setToken(response.data.access_token);
      return response.status;
    } catch (error) {
      console.log(error.message);
      return 500;
    }
  };
  return (
    <GlobalMethodsContext.Provider
      value={{
        // clearAllData,
        SignIn,
        SignUp,
      }}
    >
      {children}
    </GlobalMethodsContext.Provider>
  );
};
export { GlobalMethodsContext, GlobalMethodsProvider };
