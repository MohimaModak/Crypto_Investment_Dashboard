import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function RecentTransactions() {
  const [transactions, setTransactions] = useState(null);

  useEffect(() => {
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

  if (!transactions) {
    return (
      <div className="flex justify-center items-center h-96 text-gray-300">
        Loading...
      </div>
    );
  }

  // Group transactions by type
  const groupedTransactions = transactions.reduce(
    (acc, transaction) => {
      const { type, amount } = transaction;
      acc[type] = (acc[type] || 0) + amount;
      return acc;
    },
    { Deposit: 0, Withdrawal: 0, Buy: 0, Sell: 0 }
  );

  // Data for the bar chart
  const chartData = {
    labels: Object.keys(groupedTransactions),
    datasets: [
      {
        label: "Transaction Amount ($)",
        data: Object.values(groupedTransactions),
        backgroundColor: [
          "#008000", // Deposit: Greenish
          "#4C7B46", // Withdrawal: Reddish
          "#9ACC91", // Buy: Blueish
          "#EEFFE3", // Sell: Yellowish
        ],
        borderColor: [
          "#008000",
          "#4C7B46",
          "#9ACC91",
          "#EEFFE3",
        ],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: (context) => `$${context.raw.toFixed(2)}`,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#FFFFFF", // White text for x-axis
          font: {
            size: 15, // Adjust font size on smaller screens
          },
        },
        grid: {
          color: "#FFFFFF", // Light gridlines
        },
      },
      y: {
        ticks: {
          color: "#FFFFFF", // White text for y-axis
          font: {
            size: 12, // Adjust font size on smaller screens
          },
        },
        grid: {
          color: "#FFFFFF", // Light gridlines
        },
      },
    },
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-4 m-10">
      <h1 className="text-2xl mb-6 text-center text-white">
        Recent Transactions
      </h1>
      <div className="w-full">
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
}




