import React from "react";
import { useState, useEffect } from "react";
import User from "../../../assets/Terminal/Navbar/user.webp";
import { FaLayerGroup } from "react-icons/fa";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa6";
import { ImCancelCircle } from "react-icons/im";
import { Link } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import Notification from "../Sections/Notification";

const array45 = [
  {
    id: 1,
    user: "System Update",
    comment: "You earned a 12% profit this week from new tenant sign-ups.",
  },
  {
    id: 2,
    user: "Ahsan Malik",
    comment:
      "Reported maintenance issue in Property #203 — water leakage in kitchen.",
  },
  {
    id: 3,
    user: "Admin Dashboard",
    comment:
      "2 new properties have been listed in the Defense area. Check insights now.",
  },
  {
    id: 4,
    user: "System Alert",
    comment:
      "One tenant payment is overdue by 3 days — possible rent loss detected.",
  },
];

const Navbar = ({ menuButton, get_valid }) => {
  const [notifications, setNotifications] = useState(array45);
  const [num, setNum] = useState(4);
  const [notify, setNotify] = useState(false);
  const [down, setDown] = useState(false);

  // Functions

  const handelNotify = () => {
    setNotify(!notify);
  };
  const handelDown = () => {
    setDown(!down);
  };

  useEffect(() => {
    if (num === 0 && !notify) {
      setNotifications([]);
    }
  }, [num, notify]);

  return (
    <>
      <header className="min-w-[340px] pt-2 px-4 w-full border-b border-gray-400 bg-white sticky top-0 left-0 z-2000">
        <nav className="flex justify-between items-center">
          <button
            onClick={menuButton}
            type="button"
            className={`${
              get_valid
                ? "text-blue-400 lg:translate-x-45 hover:text-purple-600"
                : "text-purple-600 hover:text-blue-400"
            } text-2xl p-2 cursor-pointer transition-all ease duration-500`}
          >
            <FaLayerGroup />
          </button>
          <div className="font-[] text-2xl bg-gradient-to-r from-[#00CC99] to-blue-400 bg-clip-text text-transparent font-bold">
            <a href="/">PropertyMax</a>
          </div>
          {/* end Block */}
          <div className="sm:flex gap-10 mx-4 hidden">
            <div className="relative">
              <button
                onClick={handelNotify}
                type="button"
                className="cursor-pointer relative text-2xl text-gray-600 p-2"
              >
                <div
                  className="absolute top-1 left-1 flex justify-center items-center w-4 h-4 
            rounded-full border-2 border-white bg-red-500 text-white font-semibold text-[10px]"
                >
                  <span>{num}</span>
                </div>
                <MdOutlineNotificationsActive />
              </button>
              <div
                className={`absolute shadow-2xl transition-all duration-200 bg-white/90 origin-top rounded-lg  right-0 p-2  mx-1 w-60 
                ${notify ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}
              >
                <ul>
                  <div className="flex items-center mb-2 justify-between">
                    <span className="p-2">Notifications</span>
                    <button
                      onClick={handelNotify}
                      className="p-2 cursor-pointer"
                    >
                      <ImCancelCircle />
                    </button>
                  </div>
                  {notifications == "" ? (
                    <div className="text-center text-lg font-semibold py-3">
                      <h3>Not Yet!</h3>
                    </div>
                  ) : (
                    ""
                  )}
                  {notifications.map((item) => (
                    <Link
                      onClick={() => setNotify(!notify)}
                      to="Notifications"
                      key={item.id}
                      className={`${
                        num == 0 ? "text-gray-500" : "text-gray-900"
                      } mb-4 overflow-hidden block hover:bg-blue-100 px-2 py-1 rounded-xl cursor-pointer`}
                    >
                      <h4 className="text-[14px] font-semibold">{item.user}</h4>
                      <p className="text-[12px] whitespace-nowrap">
                        {item.comment}
                      </p>
                    </Link>
                  ))}
                  <div className="flex justify-between mt-2">
                    <Link
                      onClick={() => setNotify(!notify)}
                      to="Notifications"
                      type="button"
                      className="text-sm cursor-pointer"
                    >
                      View All
                    </Link>
                    <button
                      onClick={() => setNum(0)}
                      type="button"
                      className="text-sm cursor-pointer"
                    >
                      Read All
                    </button>
                  </div>
                </ul>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <Link
                to="/Demo/Settings"
                type="button"
                className="p-2 text-xl cursor-pointer "
              >
                <FiSettings />
              </Link>
              <button
                type="button"
                className="cursor-pointer w-9 h-9 rounded-full overflow-hidden bg-blue-100"
              >
                <img src={User} alt="profile" className="object-cover" />
              </button>
            </div>
          </div>
          <div className="relative sm:hidden flex">
            <button
              onClick={handelDown}
              type="button"
              className="p-2 text-xl text-gray-500"
            >
              <FaAngleDown />
            </button>
            <div
              className={`${
                down
                  ? "scale-x-100 opacity-100 origin-top"
                  : "scale-0 opacity-0 origin-top"
              } transition-all ease duration-300 rounded-2xl absolute -right-2 top-10 shadow-2xl bg-white p-2`}
            >
              <nav className="flex flex-col gap-2">
                <button
                  type="button"
                  className="cursor-pointer w-9 h-9 rounded-full overflow-hidden bg-blue-100"
                >
                  <img src={User} alt="profile" className="object-cover" />
                </button>
                <Link
                  onClick={() => setDown(!down)}
                  to="/Demo/Settings"
                  type="button"
                  className="p-2 text-xl cursor-pointer "
                >
                  <FiSettings />
                </Link>
                <Link
                  to="Notifications"
                  onClick={() => {
                    handelNotify, setDown(!down);
                  }}
                  type="button"
                  className="cursor-pointer relative text-2xl text-gray-600 p-2"
                >
                  <div
                    className="absolute top-1 left-1 flex justify-center items-center w-4 h-4 
            rounded-full border-2 border-white bg-red-500 text-white font-semibold text-[10px]"
                  >
                    <span>{num}</span>
                  </div>
                  <MdOutlineNotificationsActive />
                </Link>
              </nav>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
