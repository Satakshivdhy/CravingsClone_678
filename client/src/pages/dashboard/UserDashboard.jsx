import React, { useEffect, useState } from "react";
import {useAuth} from "../../context/AuthContext"
const UserDashboard = () => {
  // const [userData, setUserData] = useState("");

  // useEffect(() => {
  //   setUserData(JSON.parse(sessionStorage.getItem("UserData")));
  // }, []);

  const {user} = useAuth();
  
  return (
    <>
      <div className="flex gap-5 ">
        <div>Hello👋 {user.fullName}</div>
        <div>Hello👋 {user.email}</div>
        <div>Hello👋 {user.phone}</div>
        <div className="w-24 h-24 rounded-full overflow-hidden">
        <img
          src={user.photo}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      </div>
    </>
  );
};

export default UserDashboard;
