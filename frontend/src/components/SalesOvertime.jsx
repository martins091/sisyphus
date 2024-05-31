import React from "react";

const SalesOvertime = () => {
  return (
    <div className="flex flex-col space-y-6 w-full sm:w-[75%] md:w-[60%] lg:w-[45%] rounded-xl py-4 pl-4 pr-1" style={{
        boxShadow:
          "1px 1px 1px 1px rgba(0, 0, 0, 0.1), -1px -1px 1px 1px rgba(0, 0, 0, 0.1)",
      }}>
      <div>
        <h1 className="text-lg sm:text-xl font-semibold">Sales Overtime</h1>
        <p className="mt-4 text-gray-500 font-semibold">Of the week based on total purchase</p>
      </div>
      <div className="flex space-x-2">
        <h1 className="text-lg sm:text-xl font-bold">₹6,10,9287</h1>
        <span className="px-2 text-[#009D54] text-xs flex items-center rounded-md bg-gray-200">
          +3.4%
        </span>
      </div>
      <div className="flex mt-2 space-x-2 sm:space-x-4">
        <div className="h-2 w-[45%] sm:w-[50%] bg-[#6A68F6] rounded-xl mt-4"></div>
        <div className="h-2 w-[45%] sm:w-[50%] bg-[#55AE7F] rounded-xl mt-4"></div>
      </div>

      <div className="flex flex-col sm:flex-row sm:space-x-10 mt-2">
        <div className="flex flex-col w-full sm:w-[50%] space-y-4 bg-gray-200 p-3 rounded-xl mt-4">
          <div className="flex space-x-2 items-center">
            <div className="bg-[#6A68F6] w-2 h-2 rounded-full"></div>
            <p className="text-xs">Asset received</p>
          </div>
          <div className="flex space-x-2">
            <h1 className="text-sm font-semibold">1,1K</h1>
            <span className="px-2 py-1 text-white text-xs flex items-center rounded-md bg-[#6A68F6]">
              +3.4%
            </span>
          </div>
        </div>
        <div className="flex flex-col space-y-4 w-full sm:w-[50%] bg-gray-200 p-3 rounded-xl mt-4">
          <div className="flex space-x-2 items-center">
            <div className="bg-[#55AE7F] w-2 h-2 rounded-full"></div>
            <p className="text-[#55AE7F] text-xs">Spending</p>
          </div>
          <div className="flex space-x-2">
            <h1 className="text-sm font-semibold">1,1K</h1>
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
