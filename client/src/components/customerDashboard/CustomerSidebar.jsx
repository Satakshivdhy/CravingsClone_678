import React from "react";
import { useAuth } from "../../context/AuthContext";
import { MdOutlineDashboard, MdOutlineFastfood } from "react-icons/md";
import { PiListHeartLight } from "react-icons/pi";
import { BsPersonGear } from "react-icons/bs";

const MenuItems = [
  { name: "Overview", icon: <MdOutlineDashboard /> },
  { name: "Orders", icon: <MdOutlineFastfood /> },
  { name: "Wishlist", icon: <PiListHeartLight /> },
  { name: "Settings", icon: <BsPersonGear /> },
];

const CustomerSidebar = ({ active, setActive }) => {
  const { user } = useAuth();
  const userName = user?.fullName || "Hello User👋";

  return (
    <aside className="flex h-full flex-col rounded-tr-[2rem] rounded-br-[2rem] bg-white border border-slate-200 shadow-sm overflow-hidden">
      <div className="px-6 py-7 bg-gradient-to-b from-orange-700 to-orange-500 text-white">
        <p className="text-xs font-semibold uppercase tracking-[0.25em]">Dashboard</p>
        <h2 className="mt-3 text-2xl font-semibold">{userName}</h2>
        <p className="mt-2 text-sm opacity-90">Manage your orders, wishlist and account settings.</p>
      </div>

      <div className="space-y-3 px-4 py-6">
        {MenuItems.map((item) => (
          <button
            key={item.name}
            className={`flex w-full items-center gap-4 rounded-3xl px-5 py-4 text-left transition duration-200 ${
              active === item.name
                ? "bg-orange-700 text-white shadow-lg"
                : "text-slate-700 hover:bg-slate-100 hover:text-orange-600"
            }`}
            onClick={() => setActive(item.name)}
          >
            <span className="text-2xl">{item.icon}</span>
            <span className="font-semibold">{item.name}</span>
          </button>
        ))}
      </div>

      <div className="mt-auto px-6 pb-6">
        <div className="rounded-3xl bg-slate-50 p-4 text-sm text-slate-600">
          Need help? Contact support for quick assistance.
        </div>
      </div>
    </aside>
  );
};

export default CustomerSidebar
