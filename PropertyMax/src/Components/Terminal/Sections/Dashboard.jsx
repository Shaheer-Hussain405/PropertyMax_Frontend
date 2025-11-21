import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const profit = 12000; // Example profit value
  const loss = 3000; // Example loss value
  const previousMonthHistory = [
    { month: "September", profit: 10000, loss: 2000 },
    { month: "August", profit: 8000, loss: 1500 },
    { month: "July", profit: 9000, loss: 2500 },
  ];

  const TotalTenants = 10;
  const activeTenants = 9;
  const inactiveTenants = 1;

  const maintenanceRequests = {
    open: 5,
    inProgress: 3,
    resolved: 12,
  };

  const upcomingPayments = [
    {
      id: 1,
      tenant: "Ahsan Malik",
      property: "Meezan Tower - Flat #203",
      dueDate: "2025-10-15",
      amount: 45000,
    },
    {
      id: 2,
      tenant: "Sara Ahmed",
      property: "Meezan Tower - Flat #305",
      dueDate: "2025-10-18",
      amount: 42000,
    },
    {
      id: 3,
      tenant: "Hamza Ali",
      property: "Meezan Tower - Flat #102",
      dueDate: "2025-10-22",
      amount: 38000,
    },
    {
      id: 4,
      tenant: "Maria Khan",
      property: "Creascent Residency - Villa #1",
      dueDate: "2025-10-25",
      amount: 95000,
    },
  ];

  return (
    <div className="p-3 w-full min-w-[340px]">
      {/* Dashboard Header */}
      <div className="my-3 mx-2 mb-8">
        <h3 className="text-lg font-bold text-gray-600">Dashboard</h3>
      </div>

      {/* Profit and Loss Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="p-4 bg-green-100 rounded-lg shadow-lg">
          <h4 className="text-md font-semibold text-green-700">Profit</h4>
          <p className="text-2xl font-bold text-green-800">${profit}</p>
        </div>
        <div className="p-4 bg-red-100 rounded-lg shadow-lg">
          <h4 className="text-md font-semibold text-red-700">Loss</h4>
          <p className="text-2xl font-bold text-red-800">${loss}</p>
        </div>
      </div>

      {/* Previous Month History */}
      <div className="mb-8">
        <h4 className="text-md font-semibold text-gray-700 mb-3">
          Previous Month History
        </h4>
        <div className="bg-white p-4 shadow-md rounded-md">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="py-2 px-4 text-gray-600">Month</th>
                <th className="py-2 px-4 text-gray-600">Profit</th>
                <th className="py-2 px-4 text-gray-600">Loss</th>
              </tr>
            </thead>
            <tbody>
              {previousMonthHistory.map((record, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-300 hover:bg-gray-50"
                >
                  <td className="py-3 px-4 text-green-700">${record.profit}</td>
                  <td className="py-3 px-4 text-red-700">${record.loss}</td>
                  <td className="py-3 px-4">{record.month}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Properties Overview */}
      <div className="mb-8">
        <h4 className="text-md font-semibold text-gray-700 mb-3">
          Properties Overview
        </h4>
        <Link
          to={"/Demo/Properties"}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          <div className="p-4 bg-blue-100 rounded-lg shadow-lg">
            <h5 className="text-sm font-semibold text-blue-700">
              Total Properties
            </h5>
            <p className="text-xl font-bold text-blue-800">2</p>
          </div>
          <div className="p-4 bg-yellow-100 rounded-lg shadow-lg">
            <h5 className="text-sm font-semibold text-yellow-700">
              Occupied Properties
            </h5>
            <p className="text-xl font-bold text-yellow-800">2</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg shadow-lg">
            <h5 className="text-sm font-semibold text-gray-700">
              Vacant Properties
            </h5>
            <p className="text-xl font-bold text-gray-800">0</p>
          </div>
        </Link>
      </div>

      {/* Total Tenants */}
      <div className="mb-8">
        <h4 className="text-md font-semibold text-gray-700 mb-3">
          Tenants Overview
        </h4>
        <Link
          to="/Demo/Tenants"
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <div className="p-4 bg-green-100 rounded-lg shadow-lg">
            <h5 className="text-sm font-semibold text-green-700">
              Active Tenants
            </h5>
            <p className="text-xl font-bold text-green-800">{activeTenants}</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg shadow-lg">
            <h5 className="text-sm font-semibold text-gray-700">
              Inactive Tenants
            </h5>
            <p className="text-xl font-bold text-gray-800">{inactiveTenants}</p>
          </div>
        </Link>
      </div>

      {/* Maintenance Requests */}
      <div className="mb-8">
        <h4 className="text-md font-semibold text-gray-700 mb-3">
          Maintenance Requests
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-red-100 rounded-lg shadow-lg">
            <h5 className="text-sm font-semibold text-red-700">Open</h5>
            <p className="text-xl font-bold text-red-800">
              {maintenanceRequests.open}
            </p>
          </div>
          <div className="p-4 bg-yellow-100 rounded-lg shadow-lg">
            <h5 className="text-sm font-semibold text-yellow-700">
              In-Progress
            </h5>
            <p className="text-xl font-bold text-yellow-800">
              {maintenanceRequests.inProgress}
            </p>
          </div>
          <div className="p-4 bg-green-100 rounded-lg shadow-lg">
            <h5 className="text-sm font-semibold text-green-700">Resolved</h5>
            <p className="text-xl font-bold text-green-800">
              {maintenanceRequests.resolved}
            </p>
          </div>
        </div>
      </div>

      {/* Payment Tracker */}
      <div>
        <h4 className="text-md font-semibold text-gray-700 mb-3">
          Payment Tracker
        </h4>
        <div className="bg-white p-4 shadow-md rounded-md">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="py-2 px-4 text-gray-600">Tenant</th>
                <th className="py-2 px-4 text-gray-600 sm:block hidden">
                  Property
                </th>
                <th className="py-2 px-4 text-gray-600">Due Date</th>
                <th className="py-2 px-4 text-gray-600">Amount</th>
              </tr>
            </thead>
            <tbody>
              {upcomingPayments.map((payment, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-300 hover:bg-gray-50"
                >
                  <td className="py-3 px-4">{payment.tenant}</td>
                  <td className="py-3 px-4 sm:block hidden">
                    {payment.property}
                  </td>
                  <td className="py-3 px-4">{payment.dueDate}</td>
                  <td className="py-3 px-4 text-green-700">
                    ${payment.amount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
