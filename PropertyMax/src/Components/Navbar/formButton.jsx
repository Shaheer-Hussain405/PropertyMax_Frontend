import React from "react";
import { Link } from "react-router-dom";

const formButton = () => {
  return (
    <>
      <div className={"text-white items-center flex gap-2 font-semibold mx-10"}>
        <Link
          to="/login-Page"
          className="login relative cursor-pointer overflow-hidden hover:bg-slate-400 mx-2
          active:scale-96 py-2 px-5 outline-0 text-blue-500 border-0 bg-slate-200 rounded-l-lg"
        >
          <span className="title-1">Login</span>
        </Link>
        <span className="text-gray text-lg">|</span>
        <Link
          to="/signup-Page"
          className="signup relative cursor-pointer overflow-hidden hover:bg-emerald-500 mx-2
          active:scale-96 py-2 px-5 outline-0 border-0 bg-emerald-400 rounded-r-lg"
        >
          <span className="title-2">SignUp</span>
        </Link>
      </div>
    </>
  );
};

export default formButton;
