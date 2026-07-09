import React from "react";
import { useState } from "react";
import AdminSidebar from "../../components/adminDashboard/AdminSidebar";
import AdminOrders from "../../components/adminDashboard/AdminOrders";
import AdminOverview from "../../components/adminDashboard/AdminOverview";
import AdminSettings from "../../components/adminDashboard/AdminSettings";
import AdminWishList from "../../components/adminDashboard/AdminWishList";

const AdminDashboard = () => {
  const [active, setActive] = useState("Overview");
  return (
    <>
      <div className="flex h-[92vh] gap-6 bg-slate-50">
        <div className="w-72">
          <AdminSidebar active={active} setActive={setActive} />
        </div>
        <main className="flex-1 rounded-[2rem] bg-slate-50 p-6 shadow-sm">
          {active === "Overview" && <AdminOverview />}
          {active === "Orders" && <AdminOrders  />}
          {active === "Wishlist" && <AdminWishList />}
          {active === "Settings" && <AdminSettings />}
        </main>
      </div>
    </>
  );
};

export default AdminDashboard;
