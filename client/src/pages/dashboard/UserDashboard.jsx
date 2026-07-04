import React from "react";
import { useAuth } from "../../context/AuthContext";
import { useState } from "react";
import Sidebar from "../../components/userDashboard/Sidebar";
import Overview from "../../components/userDashboard/Overview";
import Orders from "../../components/userDashboard/Orders";
import Settings from "../../components/userDashboard/Settings"
import WishList from "../../components/userDashboard/WishList";
const userDashboard = () => {
  const { user } = useAuth();
  const [active , setActive] = useState("Overview");
    return (
    <>
      <div className="flex h-[92vh">
        <div className="w-1/6 border border-red-500 h-full">
          <Sidebar active={active} setActive={setActive}/>
        </div>
        <div className="w-5/6 border-gren-500 h-full p-3">
        {active === "Overview" && <Overview/>}
        {active === "Orders" && <Orders/>}
        {active === "Wishlist" && <WishList/>}
        {active === "Settings" && <Settings/>}
        </div>
      </div>
      
    </>
  );
};3

export default userDashboard;
