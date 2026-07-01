import React, { useEffect, useState } from "react";

const UserDashboard = () => {
  const [userData, setUserData] = useState("");

  useEffect(() => {
    setUserData(JSON.parse(sessionStorage.getItem("UserData")));
  }, []);
  return (
    <>
      <div className="flex gap-5 ">
        <div>Hello👋 {userData.fullName}</div>
        <div>Hello👋 {userData.email}</div>
        <div>Hello👋 {userData.phone}</div>
        <div className="w-24 h-24 rounded-full overflow-hidden">
        <img
          src={userData.photo}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
        <div>Hello👋 {userData.fullName}</div>
      </div>
    </>
  );
};

export default UserDashboard;
