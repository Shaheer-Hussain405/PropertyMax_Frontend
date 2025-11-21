import React, { useState } from "react";

const Notification = () => {
  const array45 = [
    {
      id: 1,
      user: "System Update",
      comment: "You earned a 12% profit this week from new tenant sign-ups.",
      read: false,
    },
    {
      id: 2,
      user: "Ahsan Malik",
      comment:
        "Reported maintenance issue in Property #203 — water leakage in kitchen.",
      read: false,
    },
    {
      id: 3,
      user: "Admin Dashboard",
      comment:
        "2 new properties have been listed in the Defense area. Check insights now.",
      read: false,
    },
    {
      id: 4,
      user: "System Alert",
      comment:
        "One tenant payment is overdue by 3 days — possible rent loss detected.",
      read: false,
    },
  ];
  // State for notifications
  const [notifications, setNotifications] = useState(array45);

  // Mark a notification as read/unread
  const toggleReadStatus = (id) => {
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === id && notification.read === false
          ? { ...notification, read: !notification.read }
          : notification
      )
    );
  };

  // Clear all notifications
  const clearNotifications = () => {
    setNotifications([]);
  };

  return (
    <section>
      <main className="min-w-[340px] p-1 w-full">
        <div className="my-3 mx-2 mb-8">
          <h3 className="text-lg font-bold text-gray-600">Notifications</h3>
        </div>
        <div className="p-4  bg-white shadow-md rounded-lg">
          {notifications.length > 0 ? (
            <>
              <ul className="mb-4">
                {notifications.map((notification) => (
                  <li
                    key={notification.id}
                    className={`flex justify-between items-end sm:items-center  py-1 ps-2 sm:p-3 mb-2 border border-gray-400 rounded-lg ${
                      notification.read ? "bg-gray-100" : "bg-blue-50"
                    }`}
                  >
                    <span
                      className={`sm:text-sm text-[12px]  ${
                        notification.read ? "text-gray-500" : "text-gray-800"
                      }`}
                    >
                      {notification.comment}
                    </span>
                    <button
                      onClick={() => toggleReadStatus(notification.id)}
                      className={`sm:text-xs px-2 py-1 rounded-md mx-2 text-[10px] whitespace-nowrap ${
                        notification.read
                          ? "bg-blue-400 text-white"
                          : "bg-gray-300 text-gray-700"
                      }`}
                    >
                      {notification.read ? "Seened" : "Mark as Read"}
                    </button>
                  </li>
                ))}
              </ul>
              <button
                onClick={clearNotifications}
                className="bg-gradient-to-r from-purple-400 to-blue-300 hover:from-blue-400 hover:to-purple-500 text-white px-4 py-2 rounded-md hover:bg-red-500 my-3"
              >
                Clear All Notifications
              </button>
            </>
          ) : (
            <p className="text-gray-500 text-sm">No notifications available.</p>
          )}
        </div>
      </main>
    </section>
  );
};

export default Notification;
