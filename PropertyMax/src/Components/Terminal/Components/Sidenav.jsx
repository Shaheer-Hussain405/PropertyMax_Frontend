import React from "react";
import { useRef } from "react";
import { NavLink } from "react-router-dom";
import { MdSpaceDashboard } from "react-icons/md";
import { VscRobot } from "react-icons/vsc";

import {
  FaBuilding,
  FaUsers,
  FaFileContract,
  FaMoneyBillWave,
  FaTools,
  FaBell,
  FaCog,
  FaHeadset,
  FaSignOutAlt,
  FaBullhorn,
  FaChartBar,
} from "react-icons/fa";

const asideNav = [
  { id: 1, name: "Dashboard", icon: <MdSpaceDashboard />, link: "" },
  { id: 2, name: "Properties", icon: <FaBuilding />, link: "Properties" },
  { id: 3, name: "Tenants", icon: <FaUsers />, link: "/Demo/Tenants" },
  { id: 4, name: "Leases", icon: <FaFileContract />, link: "/leases" },
  { id: 5, name: "Payments", icon: <FaMoneyBillWave />, link: "/payments" },
  { id: 6, name: "Maintenance", icon: <FaTools />, link: "/maintenance" },
  { id: 9, name: "AI Help", icon: <VscRobot />, link: "/messages" },
  {
    id: 10,
    name: "Notifications",
    icon: <FaBell />,
    link: "/Demo/Notifications",
  },
];

const tools = [
  { id: 3, name: "Settings", icon: <FaCog />, link: "/Demo/Settings" },
  { id: 4, name: "Support & Help", icon: <FaHeadset />, link: "/support" },
  { id: 5, name: "Logout", icon: <FaSignOutAlt />, link: "/" },
];

const Sidenav = ({ isOpen, closely }) => {
  const sidebar = useRef(null);

  return (
    <>
      <main
        ref={sidebar}
        className={`min-h-screen fixed left-0 top-10 transition-all duration-100 bg-white  z-1000 ${
          isOpen
            ? "lg:w-60 w-55"
            : "lg:w-16 w-0 duration-400 transition-all ease"
        } shadow-2xl`}
      >
        <aside>
          <nav className="my-2 h-[90vh] flex flex-col gap-10 ">
            <div>
              {asideNav.map((data) => {
                return (
                  <NavLink
                    to={data.link}
                    key={data.id}
                    onClick={closely}
                    className={`group flex gap-3 py-3 px-4 ${
                      isOpen
                        ? "ms-8 overflow-hidden flex"
                        : " mx-2 hidden sm:flex"
                    } relative transition-all ease duration-300 `}
                  >
                    <a
                      href="/"
                      className={`gap-2 ${isOpen ? "flex" : "hidden sm:flex"} 
                        `}
                    >
                      <span
                        className={`${
                          isOpen
                            ? "text-blue-500"
                            : "text-purple-500 lg:scale-100 scale-0"
                        } text-xl transition-all duration-200`}
                      >
                        {data.icon}
                      </span>
                      <span
                        className={`whitespace-nowrap text-sm font-normal hover: group-hover:translate-x-[10%] 
                    transition-all duration-300 ${
                      isOpen ? "opacity-100 scale-100" : "scale-0 opacity-0"
                    }`}
                      >
                        {data.name}
                      </span>
                    </a>
                    {/* Toolip  */}
                    {!isOpen && (
                      <div
                        className="text-white text-[12px] rounded-lg transition-all duration-100 
                  group-hover:scale-100 scale-0 absolute left-12 bg-black hover:bg-gray-800 px-2 py-1"
                      >
                        <a href={data.link}>{data.name}</a>
                      </div>
                    )}
                  </NavLink>
                );
              })}
            </div>
            <div>
              {tools.map((item) => (
                <NavLink
                  to={item.link}
                  key={item.id}
                  onClick={closely}
                  className={`group flex gap-2 py-3 mx-2 px-4 overflow-hidden ${
                    isOpen ? "flex" : "hidden sm:flex"
                  }`}
                >
                  <a
                    href="/"
                    className={`gap-2 ${isOpen ? "flex" : "hidden sm:flex"}`}
                  >
                    <span
                      className={`${
                        isOpen
                          ? "text-blue-500"
                          : "text-purple-500 lg:scale-100 scale-0"
                      } text-xl transition-all duration-200`}
                    >
                      {item.icon}
                    </span>
                    <span
                      className={`${
                        isOpen ? "opacity-100" : "opacity-0"
                      } text-sm font-normal whitespace-nowrap transition-all ease duration-300`}
                    >
                      {item.name}
                    </span>
                  </a>
                  {!isOpen && (
                    <div
                      className="text-white text-[12px] rounded-lg transition-all duration-100 
                  group-hover:scale-100 scale-0 absolute left-12 bg-black hover:bg-gray-800 px-2 py-1"
                    >
                      <a href={item.link}>{item.name}</a>
                    </div>
                  )}
                </NavLink>
              ))}
            </div>
          </nav>
        </aside>
      </main>
    </>
  );
};

export default Sidenav;
