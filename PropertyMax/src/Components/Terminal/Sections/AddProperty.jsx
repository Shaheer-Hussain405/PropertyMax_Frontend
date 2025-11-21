import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";

const AddProperty = () => {
  const [on, setOn] = useState(false);
  const handelProttotype = () => {
    setOn(!on);
    setTimeout(() => {
      setOn(false);
    }, 2000);
  };
  return (
    <>
      <section>
        <main>
          <h2 className="text-center font-bold text-xl">Add Property</h2>
          <div className="sm:mx-15 mx-5 my-10 flex flex-col gap-5">
            <div className="form grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div>
                <input
                  type="text"
                  placeholder="Property Name"
                  className="w-full outline-0 border text-[16px] border-gray-400 py-1 px-3 rounded-md"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Location"
                  className="w-full outline-0 border text-[16px] border-gray-400 py-1 px-3 rounded-md"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Manager"
                  className="w-full outline-0 border text-[16px] border-gray-400 py-1 px-3 rounded-md"
                />
              </div>
              <div className="mx-2 flex gap-2 text-gray-600">
                <select
                  name="Select Status"
                  className="outline-0 border-1 border-gray-400 px-2 flex-1 rounded-md"
                >
                  <option value="Available" className="rounded-md">
                    Available
                  </option>
                  <option value="Occupied" className="rounded-md">
                    Occupied
                  </option>
                </select>
                <select
                  name="Select Status"
                  className="outline-0 border-1 border-gray-400 px-2 flex-1 rounded-md "
                >
                  <option value="Apartment" className="rounded-md">
                    Apartment
                  </option>
                  <option value="Building" className="rounded-md">
                    Building
                  </option>
                  <option value="Villa" className="rounded-md">
                    Villa
                  </option>
                </select>
              </div>
            </div>
            <div className="flex justify-center">
              <label
                htmlFor="photo-upload"
                className="inline-flex items-center hover:from-blue-500 px-4 py-2 bg-gradient-to-r from-purple-400 to-blue-400 text-white font-medium text-sm rounded-lg shadow hover:bg-blue-700 cursor-pointer transition"
              >
                <span className="pr-2">
                  <FaPlus />
                </span>
                Upload Photo
              </label>
              <input
                id="photo-upload"
                type="file"
                accept="image/*"
                className="hidden"
                // onChange={(e) => console.log(e.target.files[0])}
              />
            </div>
            <div className="flex flex-col gap-3">
              <div className="relative">
                <button
                  onClick={handelProttotype}
                  type="button"
                  className="w-full py-2 bg-gradient-to-r hover:from-blue-600 hover:to-purple-400 from-purple-500 to-blue-500 rounded-lg text-white"
                >
                  Add Property
                </button>
                <div
                  className={`${
                    on ? "block scale-100" : "scale-0 hidden"
                  } h-[20vh] rounded-md transition-all duration-100 absolute left-1/2 translate-x-[-50%] bottom-10 p-2 bg-gradient-to-bl text-white font-bold from-purple-500 to-blue-500 shadow-[1px_2px_12px_rgba(0,0,0,0.15)] flex flex-col justify-center`}
                >
                  <span>This Is Just ProtoType Version!</span>
                </div>
              </div>
              <Link
                to="/Demo/Properties"
                type="button"
                className="text-center w-full py-2 bg-gradient-to-r bg-white border border-gray-500 hover:bg-gray-100 rounded-lg "
              >
                Exit
              </Link>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default AddProperty;
