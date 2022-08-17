import React, { createContext, useContext, useState } from "react";
import { UserProvider, useUserContext, UserContext } from "./context";

export const LoggedInContext = createContext();

export const useLoggedInContext = () => useContext(LoggedInContext);

export const LoggedInContextProvider = ({ children }) => {
  const [userLoggedIn, setUserLoggedIn] = useState("DUMMY");

  return (
    <LoggedInContext.Provider value={(userLoggedIn, setUserLoggedIn)}>
      {children}
    </LoggedInContext.Provider>
  );
};
