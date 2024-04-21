import React from "react";
import { LuSearch } from "react-icons/lu";

const HomeHeader = () => {
  return (
    <div className="flex justify-between items-center w-full h-20" style={{ boxShadow: '0px 2px 0 rgba(0, 0, 0, 0.1)' }}>
      <div className="ml-10">
        <h1 className="text-xl font-semibold">Home</h1>
      </div>
      <div className="flex justify-center items-center space-x-2 mr-1 sm:mr-20">
    <div className="bg-[#F5F5F5] flex items-center px-4 py-2 rounded-lg text-gray-500">
        <LuSearch size={20} />
        <input type="search" placeholder="Search" className="bg-transparent ml-2 outline-none" />
    </div>
</div>

    </div>
  );
};

export default HomeHeader;
