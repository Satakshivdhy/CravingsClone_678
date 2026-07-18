import React from "react";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import CustomerOrders from "../../components/customerDashboard/CustomerOrders.jsx";
import CustomerOverview from "../../components/customerDashboard/CustomerOverview.jsx";
import CustomerSettings from "../../components/customerDashboard/CustomerSettings.jsx";
import CustomerSidebar from "../../components/customerDashboard/CustomerSidebar.jsx";
import CustomerWishList from "../../components/customerDashboard/CustomerWishList.jsx";
import { useLocation , useNavigate} from "react-router-dom";


const CustomerDashboard = () => {

  const { isLogin,role } = useAuth();
  const navigate = useNavigate();
  const active = useLocation().state?.activeTab;
  const [activeTab, setActiveTab] = React.useState(active || "overview");


  if (!isLogin || role !== "customer") {
    return (
      <div className="h-[92vh] bg-[url('/foodTable.webp')]  bg-cover bg-center">
        <div className="h-full backdrop-blur-lg flex flex-col items-center justify-center ">
          <h1 className="text-2xl font-bold text-(--color-neutral-content)">
            Access Denied. Please log in as a customer to view this
            page.
          </h1>
          <button
            className="mt-4 px-4 py-2 bg-(--color-primary) text-white rounded-md"
            onClick={() => navigate("/login")}
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }


  return (
    <>
      <div className="flex h-[92vh] gap-6 bg-slate-50">
        <div className="w-72">
          <CustomerSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
        <main className="flex-1 rounded-[2rem] bg-slate-50 p-6 shadow-sm">
          {setActiveTab === "Overview" && <CustomerOverview />}
          {activeTab === "Orders" && <CustomerOrders />}
          {/* {active === "Wishlist" && <CustomerWishList />} */}
          {activeTab === "Settings" && <CustomerSettings />}
        </main>
      </div>
    </>
  );
};

export default CustomerDashboard;
