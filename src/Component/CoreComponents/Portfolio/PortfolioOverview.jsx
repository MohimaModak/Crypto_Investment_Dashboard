import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

export default function PortfolioOverview() {
  const [overview, setOverview] = useState(null);

  useEffect(() => {
    fetch("/PortfolioOverview.json")
      .then((res) => res.json())
      .then((data) => {
        setOverview(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  if (!overview) {
    return (
      <div className="flex justify-center items-center h-screen text-white text-lg">
        Loading...
      </div>
    );
  }

  const { totalValue, growth, currency } = overview;

  return (
    <div
      className="p-8 m-10 rounded-lg shadow-xl text-white max-w-sm mx-auto transform hover:scale-105 transition duration-300"
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
      <h2 className="text-2xl font-semibold text-center mb-6">Portfolio Overview</h2>
      <div className="flex justify-between items-center mb-4">
        <span className="text-xl">Total Value:</span>
        <span className="text-2xl font-bold">
          {new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(totalValue)}
        </span>
      </div>
      <div className="flex justify-between items-center mb-4">
        <span className="text-xl">Growth:</span>
        <span
          className={`text-lg flex items-center ${
            growth >= 0 ? 'text-green-500' : 'text-red-500'
          }`}
        >
          <FontAwesomeIcon
            icon={growth >= 0 ? faArrowUp : faArrowDown}
            className={`mr-2 ${growth >= 0 ? 'animate-bounce' : ''}`}
          />
          <span className="font-semibold">{growth >= 0 ? `+${growth}%` : `${growth}%`}</span>
        </span>
      </div>

      <div className="mt-6">
        <button
          className="w-full p-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition duration-300"
        >
          View Detailed Portfolio
        </button>
      </div>
    </div>
  );
}
