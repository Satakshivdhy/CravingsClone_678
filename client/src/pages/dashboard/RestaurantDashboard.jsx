import React from "react";
import { useState } from "react";
import RestaurantOrders from "../../components/restaurantDashboard/RestaurantOrders";
import RestaurantOverview from "../../components/restaurantDashboard/RestaurantOverview";
import RestaurantSettings from "../../components/restaurantDashboard/RestaurantSettings";
import RestaurantSidebar from "../../components/restaurantDashboard/RestaurantSidebar";
import RestaurantWishList from "../../components/restaurantDashboard/RestaurantWishList";

const RestaurantDashboard = () => {
  const [active, setActive] = useState("Overview");
  return (
    <>
      <div className="flex h-[92vh] gap-6 bg-slate-50">
        <div className="w-72">
          <RestaurantSidebar active={active} setActive={setActive} />
        </div>
        <main className="flex-1 rounded-[2rem] bg-slate-50 p-6 shadow-sm">
          {active === "Overview" && <RestaurantOverview />}
          {active === "Orders" && <RestaurantOrders />}
          {active === "Wishlist" && <RestaurantWishList />}
          {active === "Settings" && <RestaurantSettings />}
        </main>
      </div>
    </>
  );
};

export default RestaurantDashboard;
