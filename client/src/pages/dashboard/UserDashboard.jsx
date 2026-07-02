import React from "react";
import { useAuth } from "../../context/AuthContext";
const userDashboard = () => {
  const { user } = useAuth();
  return (
    <>
      <div>userDashboard</div>
      
    </>
  );
};

export default userDashboard;
