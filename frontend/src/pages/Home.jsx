import React, { useState } from "react";
import HomeHeader from "../components/HomeHeader";
import Activities from "../components/Activities";
import BarChart from "../components/BarChart";
import SalesOvertime from "../components/SalesOvertime";
import { IoMenu, IoClose } from "react-icons/io5";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <div className="mb-10">
      <div>
        <div
          className={`lg:block fixed z-10 ${
            showSidebar ? "block" : "hidden"
          } bg-white lg:bg-transparent md:bg-white-300 sm:bg-white-300`}
        >
          <Sidebar />
        </div>
        <div className="lg:hidden fixed top-0 right-0 m-4">
          {showSidebar ? (
            <IoClose
              size={30}
              onClick={toggleSidebar}
              className="text-xl cursor-pointer p-2 bg-[#55AE7F] text-white rounded-full"
            />
          ) : (
            <IoMenu
              size={30}
              onClick={toggleSidebar}
              className="text-3xl cursor-pointer p-2 bg-[#55AE7F] text-white rounded-full"
            />
          )}
        </div>
      </div>
      <div className="ml-0 lg:ml-60">
        <HomeHeader />
        <Activities />
        <div className="flex flex-col sm:flex-row sm:space-x-8 space-y-4 sm:space-y-0 flex-wrap">
          <BarChart />
          <SalesOvertime />
        </div>
      </div>
    </div>
  );
};

export default Home;
