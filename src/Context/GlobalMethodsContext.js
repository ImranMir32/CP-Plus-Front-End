import { GlobalStateContext } from "./Global_Context";
import React, { createContext, useContext } from "react";
import axios from "axios";

const GlobalMethodsContext = createContext();

const GlobalMethodsProvider = ({ children }) => {
  const { setUserName, setToken, setUser } = useContext(GlobalStateContext);

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
      setUser(response.data.user);
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

  const imgUpload = async (values) => {
    try {
      await axios.post("http://localhost:4000/api/image/upload", values, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Image uploaded successfully");
    } catch (error) {
      console.log(error.message);
      return 401;
    }
  };

  const clearAllData = () => {
    setUserName("");
    setToken("");
  };
  return (
    <GlobalMethodsContext.Provider
      value={{
        clearAllData,
        SignIn,
        SignUp,
        imgUpload,
      }}
    >
      {children}
    </GlobalMethodsContext.Provider>
  );
};
export { GlobalMethodsContext, GlobalMethodsProvider };
