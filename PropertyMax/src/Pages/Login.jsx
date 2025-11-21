import React from "react";
import Google from "../assets/google.svg";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <section>
        <main className="grid lg:grid-cols-2 grid-cols-1 bg">
          <div className="flex flex-col gap-3 justify-center lg:h-[100vh] my-5 lg:my-0 sm:mx-10 px-10 ">
            <h1 className="text-4xl text-[#00CC99] font-bold text-center lg:text-start">
              PropertyMax
            </h1>
            <p className="hidden lg:block text-lg">
              Your smart gateway to effortless property management.
            </p>
          </div>
          <div className="p-10 lg:mx-18 sm:mx-30  flex gap-2 flex-col justify-center ">
            <h3 className="text-2xl font-semibold">Login</h3>
            <p>Welcome to The Life of Peace..</p>
            <form action="#" className="flex flex-col gap-3 my-2 mb-5">
              <input
                type="email"
                required
                placeholder="Email"
                className="border-0 border-b-1 border-gray-400 w-full outline-0 px-2 py-2"
              />
              <input
                type="password"
                required
                placeholder="Password"
                className="border-0 border-b-1 border-gray-400 w-full outline-0 px-2 py-2"
              />
              <div className="flex justify-between text-[14px] my-2">
                <div className="flex gap-2 items-center">
                  <input type="checkbox" id="remember" value="remember" />
                  <label htmlFor="remember">Remember me</label>
                </div>
                <a href="#" className="underline text-blue-500">
                  forget password?
                </a>
              </div>
              <div className="flex flex-col gap-2">
                <button
                  type="submit"
                  className="w-full py-2 bg-black hover:bg-gray-800 text-white m rounded-lg font-semibold"
                >
                  Login
                </button>
                <Link
                  to="/signup-Page"
                  type="button"
                  className="w-full py-2 text-center bg-white hover:bg-gray-200 border-1 border-gray-600 text-black rounded-lg font-semibold"
                >
                  Register
                </Link>
              </div>
            </form>
            {/* or line  */}
            <div className="relative text-gray-500 flex justify-center border-t border-gray-500">
              <div className="text-center translate-y-[-60%]">
                <span className=" bg-white px-1">or</span>
              </div>
            </div>
            {/* google button  */}
            <div>
              <button
                type="button"
                className="w-full flex gap-2 justify-center hover:bg-gray-100 border-1 border-gray-400 py-2 rounded-lg"
              >
                <img src={Google} alt="google" className="w-5" />
                <span>Login in with Google</span>
              </button>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Login;
