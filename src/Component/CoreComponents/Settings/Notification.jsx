import React, { useState, useEffect } from "react";

export default function Notification() {
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    fetch("/Notification.json")
      .then((res) => res.json())
      .then((data) => {
        setNotification(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  if (!notification) {
    return (
      <div className="flex justify-center items-center h-96 text-gray-300">
        Loading...
      </div>
    );
  }

  // Update notification settings
  const handleToggle = (key, subKey = null) => {
    setNotification((prev) => {
      const updated = { ...prev };
      if (subKey) {
        updated.preferences[subKey] = !updated.preferences[subKey];
      } else {
        updated[key] = !updated[key];
      }
      return updated;
    });
  };

  return (
    
    <div
      className="p-8 rounded-md shadow-lg m-10"
      style={{
        background: `
        radial-gradient(circle at 20% 50%, #6eff62, transparent 60%),
        radial-gradient(circle at 10% 10%, #6eff62, transparent 70%),
        radial-gradient(circle at 70% 10%, #355E3B, transparent 90%),
        radial-gradient(circle at 30% 10%, #003300, transparent 75%)
                                                                    `,
        backgroundBlendMode: 'overlay',
    }}
    >     
    <div className="flex justify-center">
    <div className="">
     <h1 className="text-2xl font-bold">Notification Settings</h1>
      <div className="space-y-6">
        <div className="md:flex justify-center md:space-x-10">

          <div>
            <h2 className="text-lg font-semibold m-3">General Alerts</h2>
            <div className="flex items-center justify-around w-max bg-black p-4 rounded-lg">
              <span className="mr-8">Email Alerts</span>
              <button
                onClick={() => handleToggle("emailAlerts")}
                className={`w-12 h-6 flex items-center ${notification.emailAlerts ? "bg-green-600" : "bg-gray-600"
                  } rounded-full p-1 cursor-pointer`}
              >
                <div
                  className={`bg-white w-4 h-4 rounded-full transform ${notification.emailAlerts ? "translate-x-6" : "translate-x-0"
                    } transition`}
                ></div>
              </button>
            </div>

            <div className="flex items-center justify-around w-max bg-black p-4 rounded-lg mt-4">
              <span className="mr-8">SMS Alerts</span>
              <button
                onClick={() => handleToggle("smsAlerts")}
                className={`w-12 h-6 flex items-center ${notification.smsAlerts ? "bg-green-600" : "bg-gray-600"
                  } rounded-full p-1 cursor-pointer`}
              >
                <div
                  className={`bg-white w-4 h-4 rounded-full transform ${notification.smsAlerts ? "translate-x-6" : "translate-x-0"
                    } transition`}
                ></div>
              </button>
            </div>

            <div className="flex items-center justify-around w-max bg-black p-4 rounded-lg mt-4">
              <span className="mr-5">In-App Alerts</span>
              <button
                onClick={() => handleToggle("inAppAlerts")}
                className={`w-12 h-6 flex items-center ${notification.inAppAlerts ? "bg-green-600" : "bg-gray-600"
                  } rounded-full p-1 cursor-pointer`}
              >
                <div
                  className={`bg-white w-4 h-4 rounded-full transform ${notification.inAppAlerts ? "translate-x-6" : "translate-x-0"
                    } transition`}
                ></div>
              </button>
            </div>
          </div>

          {/* Preferences */}
          <div>
            <h2 className="text-lg font-semibold m-3">Preferences</h2>
            <div className="flex items-center justify-around w-max bg-black p-4 rounded-lg">
              <span className="mr-14">Price Alerts</span>
              <button
                onClick={() => handleToggle("preferences", "priceAlerts")}
                className={`w-12 h-6 flex items-center ${notification.preferences.priceAlerts ? "bg-green-600" : "bg-gray-600"
                  } rounded-full p-1 cursor-pointer`}
              >
                <div
                  className={`bg-white w-4 h-4 rounded-full transform ${notification.preferences.priceAlerts ? "translate-x-6" : "translate-x-0"
                    } transition`}
                ></div>
              </button>
            </div>

            <div className="flex items-center justify-around w-max bg-black p-4 rounded-lg mt-4">
              <span className="mr-5">Portfolio Updates</span>
              <button
                onClick={() => handleToggle("preferences", "portfolioUpdates")}
                className={`w-12 h-6 flex items-center ${notification.preferences.portfolioUpdates ? "bg-green-600" : "bg-gray-600"
                  } rounded-full p-1 cursor-pointer`}
              >
                <div
                  className={`bg-white w-4 h-4 rounded-full transform ${notification.preferences.portfolioUpdates ? "translate-x-6" : "translate-x-0"
                    } transition`}
                ></div>
              </button>
            </div>

            <div className="flex items-center justify-around w-max bg-black p-4 rounded-lg mt-4">
              <span className="mr-14">Market News</span>
              <button
                onClick={() => handleToggle("preferences", "marketNews")}
                className={`w-12 h-6 flex items-center ${notification.preferences.marketNews ? "bg-green-600" : "bg-gray-600"
                  } rounded-full p-1 cursor-pointer`}
              >
                <div
                  className={`bg-white w-4 h-4 rounded-full transform ${notification.preferences.marketNews ? "translate-x-6" : "translate-x-0"
                    } transition`}
                ></div>
              </button>
            </div>
          </div>
        </div>

      </div>
      </div>
      </div>

    </div>
  );
}
