import React, { createContext, useContext, useState } from "react";

export function Yell() {
  return <h1>HEY!</h1>;
}

export const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState([
    { name: "abel", email: "abel@mit.edu", password: "secret01", balance: 100 },
    { name: "Peter", email: "peter@uic.edu", password: "qwertyui", balance: 5 },
  ]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
