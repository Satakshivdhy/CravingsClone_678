import React from "react";
import { useAuth } from "../../context/AuthContext";
import Sidebar from "../../components/userDashboard/Sidebar";
import Overview from "../../components/userDashboard/Overview";
import Orders from "../../components/userDashboard/Orders";
import Settings from "../components/userDashboard/Settings"
import WishList from "../../components/userDashboard/WishList";
const userDashboard = () => {
  const { user } = useAuth();
  return (
    <>
      <div>userDashboard</div>
      
    </>
  );
};3

export default userDashboard;
