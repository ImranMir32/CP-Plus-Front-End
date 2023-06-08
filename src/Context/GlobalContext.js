import React, { createContext, useState } from "react";

const GlobalStateContext = createContext();

const GlobalStateProvider = ({ children }) => {
  const [userName, setUserName] = useState("");
  const [token, setToken] = useState("");
  return (
    <GlobalStateContext.Provider
      value={{
        userName,
        token,
        setUserName,
        setToken,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};

export { GlobalStateContext, GlobalStateProvider };
