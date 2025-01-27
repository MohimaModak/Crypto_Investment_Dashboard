import React, { useState, useEffect } from "react";

export default function Security() {
  const [security, setSecurity] = useState(null);

  useEffect(() => {
    fetch("/Security.json")
      .then((res) => res.json())
      .then((data) => {
        setSecurity(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  if (!security) {
    return (
      <div className="flex justify-center items-center h-96 text-gray-300">
        Loading...
      </div>
    );
  }

  const handleToggle2FA = () => {
    setSecurity((prev) => ({
      ...prev,
      twoFactorAuth: !prev.twoFactorAuth,
    }));
  };

  const handleLogoutAll = () => {
    console.log("Logging out from all devices...");
    // Add logic to handle logging out from all devices
  };

  return (
    <div className="">
    <div className="p-8 rounded-md shadow-lg m-10 rounded-md"  style={{
      background: `
      radial-gradient(circle at 20% 50%, #6eff62, transparent 60%),
      radial-gradient(circle at 10% 10%, #6eff62, transparent 70%),
      radial-gradient(circle at 70% 10%, #355E3B, transparent 90%),
      radial-gradient(circle at 30% 10%, #003300, transparent 75%)
                                                                  `,
      backgroundBlendMode: 'overlay',
  }}>
      <h1 className="text-2xl font-bold mb-6">Security Settings</h1>

      {/* Two-Factor Authentication */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-3">Two-Factor Authentication</h2>
        <div className="flex items-center justify-between bg-black p-4 rounded-lg">
          <span>Enable 2FA</span>
          <button
            onClick={handleToggle2FA}
            className={`w-12 h-6 flex items-center ${
              security.twoFactorAuth ? "bg-green-600" : "bg-gray-600"
            } rounded-full p-1 cursor-pointer`}
          >
            <div
              className={`bg-white w-4 h-4 rounded-full transform ${
                security.twoFactorAuth ? "translate-x-6" : "translate-x-0"
              } transition`}
            ></div>
          </button>
        </div>
      </div>

      {/* Active Sessions */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-3">Active Sessions</h2>
        <div className="bg-black p-4 rounded-lg">
          {security.activeSessions.map((session, index) => (
            <div
              key={index}
              className="flex items-center justify-between mb-3 last:mb-0"
            >
              <div>
                <p className="text-sm font-medium">{session.device}</p>
                <p className="text-xs text-gray-400">
                  IP: {session.ipAddress} | Last Active: {session.lastActive}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Logout from All Devices */}
      <div className="text-center">
        <button
          onClick={handleLogoutAll}
          className="bg-black text-white px-4 py-2 rounded-lg font-medium shadow-md"
        >
          Logout from All Devices
        </button>
      </div>
    </div>
    </div>
  );
}
