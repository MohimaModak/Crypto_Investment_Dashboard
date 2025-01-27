import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

// Register necessary components for Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function RecentTransactions() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Simulating fetching data from RecentTransactions.json
    fetch("/RecentTransactions.json")
      .then((res) => res.json())
      .then((data) => {
        setTransactions(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  if (!transactions.length) {
    return (
      <div className="flex justify-center items-center h-64 text-white">
        Loading...
      </div>
    );
  }

  // Process data for the chart
  const categories = ["Deposit", "Withdrawal", "Buy", "Sell"];
  const groupedData = categories.map((category) =>
    transactions
      .filter((transaction) => transaction.type === category)
      .reduce((sum, transaction) => sum + transaction.amount, 0)
  );

  const chartData = {
    labels: categories,
    datasets: [
      {
        label: "Transaction Amounts",
        data: groupedData,
        backgroundColor: [
          "#008000", // Green for Deposit
          "#4C7B46", // Yellow for Withdrawal
          "#9ACC91", // Orange for Buy
          "#EEFFE3", // Blue for Sell
        ],
        borderColor: [
          "#FFFFFF",
          "#FFFFFF",
          "#FFFFFF",
          "#FFFFFF",
        ],
        borderWidth: 2,
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
          color: "#FFFFFF", // Darker gray for better contrast
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: "#FFFFFF",
        },
        ticks: {
          callback: function (value) {
            return `$${value}`; // Format Y-axis as currency
          },
          color: "#FFFFFF", // Match label color
        },
      },
    },
  };

  return (
    // <div className="flex flex-col items-center justify-center w-max">
    <div className="p-10">
      <h1 className="sm:text-lg md:text-xl lg:text-2xl font-semibold pb-5">
        Recent Transactions
      </h1>
      <div className="w-full max-w-5xl h-96">
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
}
