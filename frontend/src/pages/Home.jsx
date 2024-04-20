import React from "react";
import HomeHeader from "../components/HomeHeader";
import Activities from "../components/Activities";
import BarChart from "../components/BarChart";
import SalesOvertime from "../components/SalesOvertime";



const Home = () => {
  return (
    <div className="">
      <HomeHeader />
      <Activities />
      <div className="flex space-x-8 flex-wrap">
      <BarChart />
      <SalesOvertime />

      </div>
    </div>
  );
};

export default Home;
