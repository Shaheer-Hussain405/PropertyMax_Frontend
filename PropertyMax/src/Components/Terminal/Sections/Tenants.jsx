import React, { useState } from "react";

const Tenants = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTenant, setSelectedTenant] = useState(null);
  const tenants = [
    {
      id: 1,
      name: "Ahsan Malik",
      property: "Meezan Tower - Flat #101",
      status: "Active",
      phone: "0321-4567890",
    },
    {
      id: 2,
      name: "Sara Ahmed",
      property: "Meezan Tower - Flat #102",
      status: "Active",
      phone: "0309-9876543",
    },
    {
      id: 3,
      name: "Hamza Ali",
      property: "Meezan Tower - Flat #203",
      status: "Inactive",
      phone: "0345-7891234",
    },
    {
      id: 4,
      name: "Maria Khan",
      property: "Meezan Tower - Flat #204",
      status: "Active",
      phone: "0312-5556677",
    },
    {
      id: 5,
      name: "Bilal Sheikh",
      property: "Meezan Tower - Flat #305",
      status: "Active",
      phone: "0333-8765432",
    },
    {
      id: 6,
      name: "Hina Aslam",
      property: "Meezan Tower - Flat #306",
      status: "Active",
      phone: "0315-1239876",
    },
    {
      id: 7,
      name: "Usman Tariq",
      property: "Meezan Tower - Flat #402",
      status: "Active",
      phone: "0301-8889990",
    },
    {
      id: 8,
      name: "Zara Iqbal",
      property: "Meezan Tower - Flat #403",
      status: "Inactive",
      phone: "0322-1122334",
    },
    {
      id: 9,
      name: "Ali Raza",
      property: "Meezan Tower - Flat #404",
      status: "Active",
      phone: "0300-6677889",
    },
    {
      id: 10,
      name: "Farah Javed",
      property: "Lake View Villa",
      status: "Active",
      phone: "0344-9988776",
    },
  ];

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleAddTenant = () => {
    alert("Add Tenant functionality not implemented yet!");
  };

  const handleTenantClick = (tenant) => {
    setSelectedTenant(tenant);
  };

  const handleCloseModal = () => {
    setSelectedTenant(null);
  };

  const filteredTenants = tenants.filter((tenant) =>
    tenant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-4 w-full min-w-[340px]">
      {/* Search, Filter, and Add Tenant */}
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-2 mb-6">
        <input
          type="text"
          placeholder="Search tenants..."
          value={searchQuery}
          onChange={handleSearch}
          className="border border-gray-300 rounded-md p-2"
        />
        <div className="flex justify-end">
          <button
            onClick={handleAddTenant}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600  w-[10rem]"
          >
            Add Tenant
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="p-4 bg-green-100 rounded-lg shadow-lg">
          <h4 className="text-sm font-semibold text-green-700">
            Total Tenants
          </h4>
          <p className="text-xl font-bold text-green-800">{tenants.length}</p>
        </div>
        <div className="p-4 bg-blue-100 rounded-lg shadow-lg">
          <h4 className="text-sm font-semibold text-blue-700">
            Active Tenants
          </h4>
          <p className="text-xl font-bold text-blue-800">
            {tenants.filter((tenant) => tenant.status === "Active").length}
          </p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg shadow-lg">
          <h4 className="text-sm font-semibold text-gray-700">
            Inactive Tenants
          </h4>
          <p className="text-xl font-bold text-gray-800">
            {tenants.filter((tenant) => tenant.status === "Inactive").length}
          </p>
        </div>
      </div>

      {/* Tenants Table */}
      <div className="bg-white p-4 shadow-md rounded-md">
        <table className="w-full text-left sm:text-sm text-xs border-collapse">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="py-2 px-4 text-gray-600">Name</th>
              <th className="py-2 px-4 text-gray-600 sm:table-cell hidden">
                Property
              </th>
              <th className="py-2 px-4 text-gray-600 sm:table-cell  hidden">
                Status
              </th>
              <th className="py-2 px-4 text-gray-600 sm:table-cell  hidden">
                Phone
              </th>
              <th className="py-2 px-4 text-gray-600 sm:table-cell  hidden">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredTenants.map((tenant) => (
              <tr
                key={tenant.id}
                className="border-border-gray-300b  hover:bg-gray-50"
              >
                <td className="py-3 px-4">{tenant.name}</td>
                <td className="py-3 px-4 sm:block hidden">{tenant.property}</td>
                <td className="py-3 px-4">
                  <span
                    className={`px-2 py-1 rounded-md text-xs sm:block hidden ${
                      tenant.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {tenant.status}
                  </span>
                </td>
                <td className="py-2 px-4 sm:block hidden">{tenant.phone}</td>
                <td className="py-2 px-4">
                  <button
                    onClick={() => handleTenantClick(tenant)}
                    className="text-blue-500 hover:underline"
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Tenant Detail Modal */}
      {selectedTenant && (
        <div className="z-1000 fixed top-0 whitespace-nowrap bg-opacity-50 left-0 w-full flex justify-center items-center h-full">
          <div className="sm:text-default text-sm bg-white p-6 rounded-md shadow-2xl sm:w-[400px] w-[310px]">
            <h4 className="text-lg  font-bold text-gray-700 mb-4">
              Tenant Details
            </h4>
            <p className="mb-2">
              <strong>Name:</strong> {selectedTenant.name}
            </p>
            <p className="mb-2">
              <strong>Property:</strong> {selectedTenant.property}
            </p>
            <p className="mb-2">
              <strong>Status:</strong> {selectedTenant.status}
            </p>
            <p className="mb-4">
              <strong>Phone:</strong> {selectedTenant.phone}
            </p>
            <button
              onClick={handleCloseModal}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tenants;
