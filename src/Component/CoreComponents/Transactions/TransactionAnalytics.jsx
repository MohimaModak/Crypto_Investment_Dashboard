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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

export default function TransactionAnalytics() {
  const [analytics, setAnalytics] = useState(null);

  useEffect(() => {
    fetch("/TransactionAnalytics.json")
      .then((res) => res.json())
      .then((data) => {
        setAnalytics(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  if (!analytics) {
    return <div className="text-white text-center">Loading...</div>;
  }

  // Prepare data for the Bar chart (for individual time periods)
  const barData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"],
    datasets: [
      {
        label: "Deposit",
        data: analytics.Deposit,
        backgroundColor: "#008000",
        borderColor: "#003300",
        width: '600px',
        borderWidth: 2,
      },
      {
        label: "Withdrawal",
        data: analytics.Withdrawal,
        backgroundColor: "#4C7B46",
        borderColor: "#4C7B46",
        borderWidth: 2,
      },
      {
        label: "Buy",
        data: analytics.Buy,
        backgroundColor: "#9ACC91",
        borderColor: "#9ACC91",
        borderWidth: 2,
      },
      {
        label: "Sell",
        data: analytics.Sell,
        backgroundColor: "#EEFFE3",
        borderColor: "#EEFFE3",
        borderWidth: 2,
      },
    ],
  };

  // Chart options for the Bar chart
  const barChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: {
            size: 14,
            weight: "bold",
          },
          color: "#FFFFFF",
        },
      },
      tooltip: {
        backgroundColor: "#333",
        titleColor: "#FFFFFF",
        bodyColor: "#FFFFFF",
        padding: 10,
        cornerRadius: 5,
      },
    },
    scales: {
      x: {
        grid: {
          color: "#444",
        },
        ticks: {
          color: "#FFFFFF",
        },
      },
      y: {
        grid: {
          color: "#FFFFFF",
        },
        ticks: {
          color: "#FFFFFF",
        },
      },
    },
    animation: {
      duration: 1000,
      easing: "easeOutBounce",
    },
  };

  return (
    <div className="relative p-5">
      <h1 className="text-xl text-white md:text-2xl font-semibold pb-5">
        Transaction Analytics
      </h1>

      {/* Bar chart */}
      <div className="w-full sm:w-96 md:w-96 lg:w-[650px] h-64 sm:h-80 md:h-96 lg:h-[96] mx-auto mt-10">
        <Bar data={barData} options={barChartOptions} />
      </div>
    </div>
  );
}
