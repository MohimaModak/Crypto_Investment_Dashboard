import React, { useState, useEffect } from "react";

export default function Watchlist() {
  const [watchlist, setWatchlist] = useState(null);

  useEffect(() => {
    fetch("/Watchlist.json")
      .then((res) => res.json())
      .then((data) => {
        setWatchlist(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  if (!watchlist) {
    return (
      <div className="flex justify-center items-center h-screen text-white text-lg">
        Loading...
      </div>
    );
  }

  return (
    <div className="w-full max-w-5xl mx-auto m-10">
      <h1 className="text-xl sm:text-xl md:text-xl lg:text-2xl font-semibold text-white pb-5 text-center">
        Watchlist
      </h1>

      <div
        className="overflow-hidden rounded-lg shadow-lg"
        style={{
          background: `
            linear-gradient(to bottom, #2c6e49, #1b5e20), 
            radial-gradient(circle at 40% 60%, #004d40, transparent 70%),
            linear-gradient(135deg, #2e7d32, #388e3c)`,
          backgroundBlendMode: "overlay",
          borderRadius: "5px",
          padding: "30px",
        }}
      >
        <table className="w-full table-auto text-left text-white">
          <thead>
            <tr className="bg-gradient-to-r from-green-600 to-green-800">
              <th className="px-6 py-3 border-2 border-green-400 sm:text-sm md:text-base lg:text-lg font-semibold">Asset</th>
              <th className="px-6 py-3 border-2 border-green-400 sm:text-sm md:text-base lg:text-lg font-semibold">Price ($)</th>
              <th className="px-6 py-3 border-2 border-green-400 sm:text-sm md:text-base lg:text-lg font-semibold">Change (%)</th>
            </tr>
          </thead>
          <tbody>
            {watchlist.map((item, index) => (
              <tr
                key={index}
                className={`${index % 2 === 0 ? "bg-green-900" : "bg-green-700 border"
                  } hover:scale-105 transform transition-all duration-300`}
              >
                <td
                  className="border-2 border-green-400 px-6 py-4 sm:text-sm md:text-base lg:text-lg"
                  style={{
                    background: `
                      linear-gradient(to bottom, #2c6e49, #1b5e20), 
                      radial-gradient(circle at 40% 60%, #004d40, transparent 70%),
                      linear-gradient(135deg, #2e7d32, #388e3c)`,
                    backgroundBlendMode: "overlay",
                    borderRadius: "5px",
                    padding: "",
                  }}
                >
                  {item.asset}
                </td>
                <td
                  className="border-2 border-green-400 px-6 py-4 sm:text-sm md:text-base lg:text-lg"
                  style={{
                    background: `
                      linear-gradient(to bottom, #2c6e49, #1b5e20), 
                      radial-gradient(circle at 40% 60%, #004d40, transparent 70%),
                      linear-gradient(135deg, #2e7d32, #388e3c)`,
                    backgroundBlendMode: "overlay",
                    borderRadius: "5px",
                    padding: "",
                  }}
                >
                  ${item.price.toFixed(2)}
                </td>
                <td
                  className={`px-6 py-4 border-2 border-green-400 sm:text-sm md:text-base lg:text-lg font-semibold ${item.change > 0
                      ? "text-green-500"
                      : item.change < 0
                        ? "text-red-500"
                        : "text-gray-300"
                    }`}
                  style={{
                    background: `
                      linear-gradient(to bottom, #2c6e49, #1b5e20), 
                      radial-gradient(circle at 40% 10%, #004d40, transparent 70%),
                      linear-gradient(25deg, #2e7d32, #388e3c)`,
                    backgroundBlendMode: "overlay",
                    borderRadius: "5px",
                    padding: "",
                  }}
                >
                  {item.change > 0 ? "+" : ""}
                  {item.change}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
