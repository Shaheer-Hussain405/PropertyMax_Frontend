import React, { useEffect } from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../Components/Terminal/Components/Navbar";
import Sidenav from "../Components/Terminal/Components/Sidenav";
import { Outlet } from "react-router-dom";

const Terminal = () => {
  const [clicked, setClicked] = useState("");
  useEffect(() => {
    const check = () => {
      if (window.innerWidth < 640) {
        setClicked(false);
      } else setClicked(true);
    };
    window.addEventListener("resize", check);
    check();

    return () => window.removeEventListener("resize", check);
  }, []);
  const handelClick = () => {
    setClicked(!clicked);
  };
  const closely = () => {
    if (window.innerWidth < 640) setClicked(false);
  };
  return (
    <>
      <Navbar menuButton={handelClick} get_valid={clicked} />
      <div className="flex">
        <Sidenav isOpen={clicked} closely={closely} />
        <div
          className={`${
            clicked ? "md:ml-60" : "md:ml-15"
          } transition-all duration-400 w-full`}
        >
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Terminal;
