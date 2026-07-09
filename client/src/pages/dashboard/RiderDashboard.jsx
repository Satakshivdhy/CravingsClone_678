import React from "react";
import { useState } from "react";
import RiderOrders from "../../components/riderDashboard/RiderOrders";
import RiderOverview from "../../components/riderDashboard/RiderOverview";
import RiderSettings from "../../components/riderDashboard/RiderSettings";
import RiderSidebar from "../../components/riderDashboard/RiderSidebar";
import RiderWishList from "../../components/riderDashboard/RiderWishList";

const RiderDashboard = () => {
  const [active, setActive] = useState("Overview");
  return (
    <>
      <div className="flex h-[92vh] gap-6 bg-slate-50">
        <div className="w-72">
          <RiderSidebar active={active} setActive={setActive} />
        </div>
        <main className="flex-1 rounded-[2rem] bg-slate-50 p-6 shadow-sm">
          {active === "Overview" && <RiderOverview />}
          {active === "Orders" && <RiderOrders />}
          {active === "Wishlist" && <RiderWishList />}
          {active === "Settings" && <RiderSettings />}
        </main>
      </div>
    </>
  );
};

export default RiderDashboard;
