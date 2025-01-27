import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the necessary chart components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function BasicData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/BasicData.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  if (!data) {
    return <div className="text-gray-300 text-center">Loading...</div>;
  }

  // Prepare data for the bar chart
  const chartData = {
    labels: data.map((item) => item.type),
    datasets: [
      {
        label: "Transaction Amount (USD)",
        data: data.map((item) => item.amount),
        backgroundColor: [
          "#008000", // Deposit (Green)
          "#9ACC91", // Withdrawal (Yellow)
        ],
        borderColor: [
          "#003300", // Deposit (Green Border)
          "#9ACC91", // Withdrawal (Yellow Border)
        ],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: "#FFFFFF", // White text for legend
        },
      },
      title: {
        display: true,
        text: "Basic data",
        color: "#FFFFFF", // White text for title
        font: {
          size: 20,
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
    <div className="p-5">
      <div className="relative lg:w-[600px] md:w-[300px] w-80 h-72 sm:h-80 md:h-96 lg:h-96 ">
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
}
