import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";  // Import Axios for data fetching
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function CurrentPortfolioValue() {
  const [current, setCurrent] = useState(null);
  const [loading, setLoading] = useState(true);  // Loading state for spinner

  useEffect(() => {
    axios
      .get("/CurrentPortfolioValue.json")  // Use Axios to fetch data
      .then((response) => {
        setCurrent(response.data);
        setLoading(false);  // Stop loading once data is fetched
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);  // Stop loading on error
      });
  }, []);

  // Return the loading spinner if data is still loading
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64 text-gray-500">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-green-500 border-solid"></div>
      </div>
    );
  }

  const chartData = {
    labels: ["Portfolio Value", "Total Invested", "Profit/Loss"],
    datasets: [
      {
        label: "Amount (in USD)",
        data: [
          current.portfolioValue,
          current.totalInvested,
          current.totalProfitOrLoss,
        ],
        backgroundColor: [
          "#008000",
          "#4C7B46",
          "#9ACC91",
        ],
        borderColor: [
          "#FFFFFF",
          "#FFFFFF",
          "#FFFFFF",
        ],
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          color: "#4A5568", // Dark gray for better contrast
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#FFFFFF", // Match label color
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: "#FFFFFF",
        },
        ticks: {
          callback: function (value) {
            return `$${value}`;
          },
          color: "#FFFFFF", // Match label color
        },
      },
    },
  };

  return (
    // <div className="flex flex-col items-center justify-center w-maxma md:w-max lg:w-full">
    <div className="p-10 w-max">
      <h1 className="text-lg sm:text-lg md:text-xl lg:text-2xl font-semibold pb-5">
        Current Portfolio Value
      </h1>
      <div className="w-full md:h-72 lg:h-96 max-w-2xl">
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
}






