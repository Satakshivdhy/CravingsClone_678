import React from "react";
import { useState } from "react";
import Sidebar from "../../components/userDashboard/Sidebar";
import Overview from "../../components/userDashboard/Overview";
import Orders from "../../components/userDashboard/Orders";
import Settings from "../../components/userDashboard/Settings";
import WishList from "../../components/userDashboard/WishList";

const userDashboard = () => {
  const [active, setActive] = useState("Overview");
  return (
    <>
      <div className="flex h-[92vh] gap-6 bg-slate-50">
        <div className="w-72">
          <Sidebar active={active} setActive={setActive} />
        </div>
        <main className="flex-1 rounded-[2rem] bg-slate-50 p-6 shadow-sm">
          {active === "Overview" && <Overview />}
          {active === "Orders" && <Orders />}
          {active === "Wishlist" && <WishList />}
          {active === "Settings" && <Settings />}
        </main>
      </div>
    </>
  );
};

export default userDashboard;
