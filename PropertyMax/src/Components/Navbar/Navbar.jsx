import React, { useState } from "react";
import logo from "../../assets/Navbar/logo.png";
import FormButton from "./formButton";
// import logo2 from "../../assets/Navbar/logo-2.webp";
import { FaBars } from "react-icons/fa6";
import { ImCancelCircle } from "react-icons/im";
import "./navbar.css";

const Nav = [
  {
    id: 1,
    name: "What We Do",
    link: "",
  },
  {
    id: 2,
    name: "Features",
    link: "",
  },
  {
    id: 3,
    name: "How It Works",
    link: "",
  },
  {
    id: 4,
    name: "Pricing",
    link: "",
  },
];

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const menuClick = () => {
    setMenu(!menu);
  };
  return (
    <>
      <nav className="parent relative text-white flex items-center justify-between px-5 py-2 mx-4">
        <div className="Logo">
          <a href="#">
            <img src={logo} alt="Logo" className="w-20" />
          </a>
        </div>
        <ul className="lg:flex gap-6 text-lg hidden ">
          {Nav.map((data) => (
            <li key={data.id} className="hover:text-emerald-300 ">
              <a href={data.link} className="py-1">
                {data.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="lg:block hidden">
          <FormButton />
        </div>

        {/* bars */}
        <div className="Menu lg:hidden block relative">
          <button onClick={menuClick} className="text-2xl">
            <FaBars />
          </button>
        </div>

        {/* menu  */}
        <div
          className={`z-100 text-black absolute top-0 -right-4 py-5 bg-white h-[100vh] p-2 w-[200px]
            ${
              menu
                ? "sm:w-[300px] w-[250px] opacity-100 -scale-z-100"
                : "w-0 opacity-0 scale-z-0"
            } transition-all duration-300`}
        >
          <div className="flex justify-end">
            <button onClick={menuClick} className="p-3 text-2xl">
              <ImCancelCircle />
            </button>
          </div>
          <div className="flex flex-col justify-between h-[80vh]">
            <ul className="my-8">
              {Nav.map((data) => (
                <li key={data.id} className="py-3 px-3 text-xl">
                  <a href={data.link}>{data.name}</a>
                </li>
              ))}
            </ul>
            <div className="lg:hidden flex justify-center my-5 scale-90 sm:scale-100">
              <FormButton />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
