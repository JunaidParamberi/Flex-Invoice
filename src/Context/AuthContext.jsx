import { useEffect, useState } from "react";
import { createContext } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../services/Firebase";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [thisUser, setThisUser] = useState();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setThisUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={thisUser}>{children}</AuthContext.Provider>
  );
};
