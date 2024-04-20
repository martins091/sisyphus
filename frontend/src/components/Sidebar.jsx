import React from "react";
import { Link, useLocation } from "react-router-dom";
import { RiHome5Fill } from "react-icons/ri";
import { GoPeople } from "react-icons/go";
import { FiBox } from "react-icons/fi";
import { LiaMoneyBillSolid } from "react-icons/lia";
import { TbClockCheck } from "react-icons/tb";
import { CiLogout } from "react-icons/ci";

const Sidebar = () => {
  const sidebarItems = [
    { name: "Home", icon: <RiHome5Fill size={25} /> },
    { name: "Customer", icon: <GoPeople size={25} /> },
    { name: "Products", icon: <FiBox size={25} /> },
    { name: "Transactions", icon: <LiaMoneyBillSolid size={25} /> },
    { name: "Log Activities", icon: <TbClockCheck size={25} /> },
  ];

  const location = useLocation();

  return (
    <div
      className="w-80 h-screen relative "
      style={{ boxShadow: "2px 0 0 rgba(0, 0, 0, 0.1)" }}
    >
      <div className="flex space-x-4 justify-center items-center -ml-10 pt-10">
        <img src="logo.png" alt="" />
        <h1 className="text-3xl font-bold mb-4">Sisyphus</h1>
      </div>
      <div className="mt-10">
        {sidebarItems.map((item, index) => (
          <Link
            key={index}
            className={`flex items-center space-x-2 mx-4 px-4 my-3 py-3 text-gray-500 text-lg font-semibold hover:bg-[#F5F5F5] hover:text-[#009D54] rounded-xl ${
              location.pathname === "/" && item.name === "Home"
                ? "bg-[#F5F5F5] text-[#009D54] !important"
                : ""
            }`}
          >
            {React.cloneElement(item.icon, {
              className: `${
                location.pathname === "/" && item.name === "Home"
                  ? "text-[#009D54]"
                  : ""
              }`,
            })}
            <span
              className={
                location.pathname === "/" && item.name === "Home"
                  ? "text-[#009D54]"
                  : ""
              }
            >
              {item.name}
            </span>
          </Link>
        ))}
      </div>
      <div className="flex text-lg font-semibold text-gray-500 space-x-3 items-center absolute bottom-0 left-10 mb-10">
        <CiLogout size={30} />
        <h1>Logout</h1>
      </div>
    </div>
  );
};

export default Sidebar;
