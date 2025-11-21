import React from "react";
import { FaFilter } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import property_image from "../../../assets/Terminal/Property/prop-1.jpeg";
import property_image2 from "../../../assets/Terminal/Property/prop-2.jpg";
import { FaHome } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { Link, Outlet } from "react-router-dom";

const properties = [
  {
    id: 1,
    name: "Meezan Tower",
    lastChecked: "14/10/2025",
    image: property_image,
    tenants: 9,
    vacant: 18,
    location: "Karachi, Maymar Town",
    type: "Apartment",
    status: "Available",
    maintenance: "Passed",
    size: "34580 sq.ft",

    tenant: null, // no tenant since it's available

    maintenanceRequests: [
      {
        id: 1,
        issue: "Lift maintenance check completed",
        status: "Resolved",
      },
      {
        id: 2,
        issue: "Water pump inspection scheduled",
        status: "In-Progress",
      },
    ],

    financials: {
      monthlyRent: 0,
      lastPaymentDate: "-",
      nextPaymentDue: "-",
    },
  },

  {
    id: 2,
    name: "Crescent Residency",
    lastChecked: "10/10/2025",
    image: property_image2,
    tenants: 1,
    vacant: 0,
    location: "Lahore, DHA Phase 6",
    type: "Villa",
    status: "Occupied",
    maintenance: "Pending",
    size: "34580 sq.ft",

    tenant: {
      name: "Ali Raza",
      phone: "0301-2345678",
      email: "ali.raza@example.com",
    },

    maintenanceRequests: [
      {
        id: 1,
        issue: "AC not cooling properly",
        status: "In-Progress",
      },
      {
        id: 2,
        issue: "Kitchen sink leakage",
        status: "Resolved",
      },
    ],

    financials: {
      monthlyRent: 85000,
      lastPaymentDate: "05/10/2025",
      nextPaymentDue: "05/11/2025",
    },
  },
];

const Property = () => {
  const [querry, setQuerry] = React.useState("");

  const handel_querry = (e) => {
    setQuerry(e.target.value);
  };
  const filtered_properties = properties.filter((property) =>
    property.name.toLowerCase().includes(querry.toLowerCase())
  );
  return (
    <>
      <section className="p-3 w-full ">
        {/* index name  */}
        <div className="my-3 mx-2 mb-8">
          <h3 className="text-lg font-bold text-gray-600">Properties</h3>
        </div>
        <Outlet />

        {/* property tool bar  */}
        <div className="bg-white shadow-[4px_2px_15px_rgba(0,0,0,0.15)] my-2 p-2 py-3 rounded-lg flex justify-between items-center">
          <div>
            <h3 className="tag px-2 text-sm">Active properties</h3>
          </div>
          <div className="flex gap-15">
            <div className="sm:flex gap-2 hidden">
              <input
                type="text"
                value={querry}
                onChange={handel_querry}
                placeholder="Search property"
                className="border-0 border-b border-gray-700 outline-0 text-[13px]"
              />
              <button className="cursor-pointer text-lg">
                <IoIosSearch />
              </button>
            </div>
            <button
              type="button"
              className="cursor-pointer hover:text-gray-700 px-2"
            >
              <FaFilter />
            </button>
          </div>
        </div>

        {/* mobile search bar && Add Property*/}
        <div className="flex sm:justify-end justify-between my-7 ">
          <Link to="Add-Property" className="group relative">
            <div className="border-1 border-gray-500 rounded-md p-1 mx-3 sm:mx-15">
              <FaPlus />
            </div>
            <div
              className="text-white text-[12px] rounded-lg transition-all duration-100 
                  group-hover:scale-100 scale-0 absolute bottom-7 right-7 bg-black hover:bg-gray-800 px-2 py-1 whitespace-nowrap"
            >
              <a href="">Add Property</a>
            </div>
          </Link>
          <div className="flex gap-2 mx-3 sm:hidden">
            <input
              type="text"
              value={querry}
              onChange={handel_querry}
              placeholder="Search property"
              className="border-0 border-b border-gray-700 outline-0 text-[13px]"
            />
            <button className="cursor-pointer text-lg">
              <IoIosSearch />
            </button>
          </div>
        </div>

        {/* Properties list  */}
        <main className="bg-white shadow-[4px_2px_15px_rgba(0,0,0,0.15)] p-2 py-3 sm:mt-10 mt-3 rounded-lg flex flex-col gap-5">
          {filtered_properties.map((data) => (
            <Link
              to="/Demo/Prop_Details"
              state={{ property: data }}
              className="group hover:bg-gray-100 sm:bg-white bg-gray-50 sm:shadow-none shadow rounded-lg px-2 py-1"
            >
              <div className="rounded-lg p-2 flex sm:justify-between justify-center">
                <h2 className="text-[16px] font-semibold">{data.name}</h2>
                <span className="text-gray-700 text-[12px] px-3 hidden sm:block">
                  last Checked : {data.lastChecked}
                </span>
              </div>
              <a href="/">
                <div className="flex justify-between sm:justify-start">
                  <img
                    src={data.image}
                    alt="property image"
                    className="w-30 rounded-md"
                  />
                  <div className="mx-10 flex">
                    <ul className="text-[13px] flex flex-col justify-center gap-2 sm:gap-0 whitespace-nowrap">
                      <li className="flex items-center gap-2">
                        <span>
                          <FaUserTie />
                        </span>
                        <span>Tenants {data.tenants}</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span>
                          <FaHome />
                        </span>
                        <span>Vacants {data.vacant}</span>
                      </li>
                    </ul>
                    <div className="hidden sm:flex view_details transition-all duration-200 group-hover:opacity-100 opacity-0 mx-10 h-full justify-end items-center">
                      <span className="ps-20 text-gray-700 text-sm">
                        View Prop Details
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <ul className="flex sm:flex-row flex-col sm:gap-3 gap-1 text-[12px] mt-4">
                    <li>
                      <span>{data.location} </span>
                    </li>
                    <li>
                      <span>{data.type} </span>
                    </li>
                    <li>
                      <span
                        className={`${
                          data.status.toLowerCase() !== "available"
                            ? "text-blue-500"
                            : "text-green-400"
                        }`}
                      >
                        {data.status}
                      </span>
                    </li>
                  </ul>
                  <div className="flex flex-col justify-between mt-4">
                    <span className="text-gray-700 text-[13px] mx-3">
                      Maintainance :{" "}
                      <span
                        className={`${
                          data.maintenance.toLowerCase() === "passed"
                            ? "text-green-400"
                            : "text-red-400"
                        }`}
                      >
                        {data.maintenance}
                      </span>
                    </span>
                    <div>
                      <span className="text-gray-700 text-[12px] px-3 sm:hidden ">
                        last Checked : {data.lastChecked}
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </Link>
          ))}
        </main>
        <br />
        <br />
        <br />
      </section>
    </>
  );
};

export default Property;
