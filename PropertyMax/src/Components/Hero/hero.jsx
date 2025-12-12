import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import curve from "../../assets/Hero/Wave Line.svg";
import "./hero.css";

const hero = () => {
  return (
    <>
      <section className="kota-2 relative overflow-hidden ">
        <img
          src={curve}
          alt="curve"
          className="absolute lg:top-20 top-60 left-0 "
        />
        <Navbar />
        <main className="container mx-auto mt-10 pt-14 pb-21">
          <div className="relative py-25 overflow-hidden">
            <h1 className="initial md:text-4xl text-3xl text-center mx-1 font-semibold bg-gradient-to-r from-blue-200 to-purple-100 bg-clip-text text-transparent">
              Rental & Properties Management
              <br />
              Software
            </h1>
            <div className="flex justify-center my-8">
              <Link
                to="/Demo"
                className="shadow-2xl get_started relative w-52 h-9 hover:bg-white transition-bg duration-500 overflow-hidden font-semibold text-white bg-[#00CC99] py-2 px-4 rounded-xl active:scale-96"
              >
                <span className="start">Get Started with Demo</span>
                <span className="start2 text-black font-normal">
                  Get Started with Demo
                </span>
              </Link>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default hero;
