import React from "react";
import { useLocation } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const PropertyDetails = () => {
  const location = useLocation();
  const { property } = location.state || {};
  if (!property) {
    return (
      <div className="p-4 w-full">
        <p className="text-red-500">No property details available.</p>
      </div>
    );
  }

  return (
    <div className="p-4 w-full">
      {/* Property Header */}
      <div className="my-3 mx-2 sm:mb-8 flex items-center gap-2 mb-5">
        <Link to="/Demo/properties" className="p-2">
          <FaArrowLeft />
        </Link>
        <h3 className="text-lg font-bold text-gray-600">Property Details</h3>
      </div>

      {/* Property Overview */}
      <div className="mb-8">
        <h4 className="text-md font-semibold text-gray-700 mb-3">
          Property Overview
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-4 shadow-md rounded-md">
          <p>
            <strong>Name:</strong> {property.name}
          </p>
          <p>
            <strong>Location:</strong> {property.location}
          </p>
          <p>
            <strong>Type:</strong> {property.type}
          </p>
          <p>
            <strong>Size:</strong> {property.size}
          </p>
          <p>
            <strong>Status:</strong>{" "}
            <span
              className={`px-2 py-1 rounded-md text-xs ${
                property.status === "Occupied"
                  ? "bg-green-100 text-green-700"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              {property.status}
            </span>
          </p>
        </div>
      </div>

      {/* Tenant Information */}
      {property.status === "Occupied" && (
        <div className="mb-8">
          <h4 className="text-md font-semibold text-gray-700 mb-3">
            Tenant Information
          </h4>
          <div className="bg-white p-4 shadow-md rounded-md">
            <p>
              <strong>Name:</strong> {property.tenant.name}
            </p>
            <p>
              <strong>Phone:</strong> {property.tenant.phone}
            </p>
            <p>
              <strong>Email:</strong> {property.tenant.email}
            </p>
          </div>
        </div>
      )}

      {/* Maintenance Requests */}
      <div className="mb-8">
        <h4 className="text-md font-semibold text-gray-700 mb-3">
          Maintenance Requests
        </h4>
        <div className="bg-white p-4 shadow-md rounded-md">
          {property.maintenanceRequests.length > 0 ? (
            <ul>
              {property.maintenanceRequests.map((request) => (
                <li
                  key={request.id}
                  className="flex justify-between items-center border-b border-gray-300 py-2"
                >
                  <span>{request.issue}</span>
                  <span
                    className={`px-2 py-1 rounded-md text-xs ${
                      request.status === "In-Progress"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {request.status}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No maintenance requests available.</p>
          )}
        </div>
      </div>

      {/* Financial Details */}
      <div>
        <h4 className="text-md font-semibold text-gray-700 mb-3">
          Financial Details
        </h4>
        <div className="bg-white p-4 shadow-md rounded-md">
          <p>
            <strong>Monthly Rent:</strong> ${property.financials.monthlyRent}
          </p>
          <p>
            <strong>Last Payment Date:</strong>{" "}
            {property.financials.lastPaymentDate}
          </p>
          <p>
            <strong>Next Payment Due:</strong>{" "}
            {property.financials.nextPaymentDue}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
