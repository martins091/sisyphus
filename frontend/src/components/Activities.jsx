import React from "react";
import { TbCash } from "react-icons/tb";
import { GoPeople } from "react-icons/go";
import { PiArrowsCounterClockwiseBold } from "react-icons/pi";
import { BsBoxSeam } from "react-icons/bs";
import { GrFormCheckmark } from "react-icons/gr";

const Activities = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col space-y-6 mt-10 ml-10">
        <div className="">
          <h1 className="text-3xl font-semibold  sm:font-bold mb-4">
            Welcome back, Antonio
          </h1>
          <p className="sm:text-sm text-xs font-semibold text-gray-500 whitespace-pre-line">
            Track your sales performance at a glance with our dynamic dashboard.
            providing  <br /> 
            real-time insights on revenue, conversion and customer acquisition
          </p>
        </div>
        <div className="flex flex-col sm:flex-row flex-wrap md:flex-row lg:flex-row sm:space-x-8">
          <div className="flex flex-col sm:flex-row md:flex-col lg:space-x-6 lg:flex-row ">
            <div
              className="flex justify-start w-80  space-x-4 mb-0 md:mb-6 pr-20 pl-6 py-5 rounded-xl"
              style={{
                boxShadow:
                  "1px 1px 1px 1px rgba(0, 0, 0, 0.1), -1px -1px 1px 1px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="p-4 bg-[#F5F5F5] rounded-full  text-[#009D54]">
                <TbCash size={25} />
              </div>
              <div>
                <h1 className="text-2xl  font-bold mb-1">₹6,10,9287</h1>
                <span className="text-sm font-semibold text-gray-500">
                  Total Revenue
                </span>
              </div>
            </div>
            <div
              className="flex justify-start w-80 space-x-4 mb-0 md:mb-6  pr-20 pl-6 py-5 rounded-xl mt-6 sm:mt-0"
              style={{
                boxShadow:
                  "1px 1px 1px 1px rgba(0, 0, 0, 0.1), -1px -1px 1px 1px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="p-4 bg-[#F5F5F5] rounded-full text-[#6163CF]">
                <GoPeople size={25} />
              </div>
              <div>
                <h1 className="text-2xl  font-bold mb-1">12,04,4324</h1>
                <span className="text-sm font-semibold text-gray-500">
                  Total Customer
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row md:flex-col lg:space-x-6 lg:flex-row mt-8 sm:mt-0 flex-wrap ">
            <div
              className="flex justify-start w-80 ml-0 mb-0 md:mb-6 space-x-4 pr-0 pl-6 py-5 rounded-xl"
              style={{
                boxShadow:
                  "1px 1px 1px 1px rgba(0, 0, 0, 0.1), -1px -1px 1px 1px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="p-4 bg-[#F5F5F5] rounded-full text-[#009D54]">
                <PiArrowsCounterClockwiseBold size={25} />
              </div>
              <div>
                <h1 className="text-2xl  font-bold mb-1">8,34,3782</h1>
                <span className="text-sm font-semibold text-gray-500">
                  Total Transaction
                </span>
              </div>
            </div>
            <div
              className="flex justify-start w-80 space-x-4 mb-6 pr-20 pl-6 py-5 rounded-xl mt-6 sm:mt-0"
              style={{
                boxShadow:
                  "1px 1px 1px 1px rgba(0, 0, 0, 0.1), -1px -1px 1px 1px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="p-4 bg-[#F5F5F5] rounded-full text-[#6163CF] relative">
                <BsBoxSeam size={25} />
                <GrFormCheckmark className="absolute top-6 bg-white rounded-full right-2" />
              </div>
              <div>
                <h1 className="text-2xl  font-bold mb-1">4,00,9287</h1>
                <span className="text-sm font-semibold text-gray-500">
                  Total Revenue
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
