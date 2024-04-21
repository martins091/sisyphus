import React from "react";

const SalesOvertime = () => {
  return (
    <div className="flex flex-col space-y-6  w-90 sm:w-90 rounded-xl py-4 pl-4 pr-1"  style={{
        boxShadow:
          "1px 1px 1px 1px rgba(0, 0, 0, 0.1), -1px -1px 1px 1px rgba(0, 0, 0, 0.1)",
      }}>
      <div>
        <h1 className="text-xl font-bold"> Sales Overtime</h1>
        <p className="mt-4 text-gray-500 font-semibold">Of the week base on total purchase</p>
      </div>
      <div className="flex space-x-2">
        <h1 className="text-2xl font-bold">₹6,10,9287</h1>
        <span className="px-2 text-[#009D54] text-xs flex items-center rounded-md bg-gray-200">
          +3.4%
        </span>
      </div>
      <div className="sm:flex sm:flex-row sm:flex-wrap sm:space-x-4 md:flex-col lg:flex-row lg:flex-wrap lg:space-x-4 w-full mt-2">
        <div className="h-2 w-80 bg-[#6A68F6] rounded-xl mt-4"></div>
        <div className="h-2 w-80 bg-[#55AE7F] rounded-xl mt-4"></div>
      </div>

      <div className="sm:flex sm:flex-row sm:flex-wrap sm:space-x-4 md:flex-col lg:flex-row lg:flex-wrap lg:space-x-4 w-full mt-2">
        <div className="flex flex-col space-y-4 bg-gray-200 p-4 rounded-xl w-80 mt-4">
          <div className="flex space-x-2 items-center">
            <div className="bg-[#6A68F6] w-2 h-2 rounded-full"></div>
            <p>Asset received</p>
          </div>
          <div className="flex space-x-2">
            <h1 className="text-xl font-semibold">1,1K</h1>
            <span className="px-2 py-1 text-white text-xs flex items-center rounded-md bg-[#6A68F6]">
              +3.4%
            </span>
          </div>
        </div>
        <div className="flex flex-col space-y-4 bg-gray-200 p-4 rounded-xl w-80 mt-4">
          <div className="flex space-x-2 items-center">
            <div className="bg-[#55AE7F] w-2 h-2 rounded-full"></div>
            <p className="text-[#55AE7F]">Spending</p>
          </div>
          <div className="flex space-x-2">
            <h1 className="text-xl font-semibold">1,1K</h1>
            <span className="px-2 py-1 text-white text-xs flex items-center rounded-md bg-[#55AE7F]">
              +3.4%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesOvertime;
