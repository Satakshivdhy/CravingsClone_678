import React from "react";
import { useState } from "react";
import CustomerOrders from "../../components/customerDashboard/CustomerOrders.jsx";
import CustomerOverview from "../../components/customerDashboard/CustomerOverview.jsx";
import CustomerSettings from "../../components/customerDashboard/CustomerSettings.jsx";
import CustomerSidebar from "../../components/customerDashboard/CustomerSidebar.jsx";
import CustomerWishList from "../../components/customerDashboard/CustomerWishList.jsx";

const CustomerDashboard = () => {
  const [active, setActive] = useState("Overview");
  return (
    <>
      <div className="flex h-[92vh] gap-6 bg-slate-50">
        <div className="w-72">
          <CustomerSidebar active={active} setActive={setActive} />
        </div>
        <main className="flex-1 rounded-[2rem] bg-slate-50 p-6 shadow-sm">
          {active === "Overview" && <CustomerOverview />}
          {active === "Orders" && <CustomerOrders />}
          {active === "Wishlist" && <CustomerWishList />}
          {active === "Settings" && <CustomerSettings />}
        </main>
      </div>
    </>
  );
};

export default CustomerDashboard;
