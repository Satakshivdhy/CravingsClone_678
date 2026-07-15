import React, {createContext, useContext, useEffect, useState } from "react";
const AuthContext = React.createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(sessionStorage.getItem("UserData")) || null,
  );
  const [isLogin, setIsLogin] = useState(!!user);
  const [role, setRole] = useState(user ? user.userType : null);
  useEffect(() => {
 
    setIsLogin(!!user);
    setRole(user ? user.userType : null);
  }, [user]); // whenever the change in [user] , the function will run "useEffect()"

  const value = {
    user,
    setUser,
    isLogin,
    setIsLogin,
    role,
    setRole
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
