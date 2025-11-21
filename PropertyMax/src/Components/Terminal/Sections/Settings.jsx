import React, { useState } from "react";

const Settings = () => {
  // State for user settings
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [notifications, setNotifications] = useState({
    emailUpdates: false,
    smsUpdates: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setNotifications((prev) => ({ ...prev, [name]: checked }));
  };

  const handleSave = () => {
    // Simulate saving data (e.g., API call)
    console.log("Profile:", profile);
    console.log("Notifications:", notifications);
    alert("Settings saved successfully!");
  };

  return (
    <section>
      <main>
        <div className="my-3 mx-2 mb-8">
          <h3 className="text-lg font-bold text-gray-600">Settings</h3>
        </div>
        <div className="p-4 bg-white shadow-md rounded-md">
          {/* Profile Settings */}
          <h4 className="text-md font-semibold text-gray-700 mb-3">Profile</h4>
          <div className="mb-4">
            <label className="block text-sm text-gray-600 mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm text-gray-600 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm text-gray-600 mb-1">Phone</label>
            <input
              type="tel"
              name="phone"
              value={profile.phone}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="Enter your phone number"
            />
          </div>

          {/* Notification Settings */}
          <h4 className="text-md font-semibold text-gray-700 mb-3">
            Notifications
          </h4>
          <div className="mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="emailUpdates"
                checked={notifications.emailUpdates}
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              Email Updates
            </label>
          </div>
          <div className="mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="smsUpdates"
                checked={notifications.smsUpdates}
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              SMS Updates
            </label>
          </div>

          {/* Save Button */}
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Save Changes
          </button>
        </div>
      </main>
    </section>
  );
};

export default Settings;
