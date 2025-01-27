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

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function SavingsPlan() {
  const [savings, setSavings] = useState(null);

  useEffect(() => {
    fetch("/SavingsPlan.json")
      .then((res) => res.json())
      .then((data) => {
        setSavings(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  if (!savings) {
    return <div className="text-center text-lg text-white">Loading...</div>;
  }

  const chartData = {
    labels: ["Goal", "Current Progress", "Remaining"],
    datasets: [
      {
        label: "Savings Data",
        data: [50000, savings.currentProgress, savings.remainingAmount],
        backgroundColor: ["#008000","#4C7B46","#9ACC91",
        ], // Green, Blue, Red gradient
        borderColor: ["#FFFFFF", "#FFFFFF", "#FFFFFF"], // Dark Green, Dark Blue, Dark Red
        borderWidth: 1,
        borderRadius: 2, // Rounded corners on bars
        hoverBackgroundColor: ["#003300", "#4C7B46", "#9ACC91",
        ],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    animation: {
      duration: 1500, // Smooth animation time
      easing: "easeOutBounce", // Bounce effect for a more playful feel
      onComplete: function () {
        console.log("Animation Complete");
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          color: "#FFFFFF", // White color for the legend labels
        },
      },
      tooltip: {
        enabled: true,
        backgroundColor: "#333", // Darker background for tooltips
        titleColor: "#FFFFFF", // White title color for tooltips
        bodyColor: "#FFFFFF", // White body color for tooltips
        padding: 10, // Padding inside the tooltip for better readability
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Hides the grid lines on the x-axis for a cleaner look
        },
        ticks: {
          color: "#FFFFFF", // White color for the x-axis labels
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: "#444", // Darker grid lines for contrast
        },
        ticks: {
          color: "#FFFFFF", // White color for the y-axis labels
          callback: function (value) {
            return `$${value}`; // Format y-axis with a dollar sign
          },
        },
      },
    },
  };

  return (
    <div className="text-center w-max
    ">
     
      <div
        className=" text-white"
        style={{
          background: `
            linear-gradient(to bottom, #2c6e49, #1b5e20), 
            radial-gradient(circle at 40% 60%, #004d40, transparent 70%),
            linear-gradient(135deg, #2e7d32, #388e3c)`,
          backgroundBlendMode: "overlay",
          borderRadius: "5px",
          padding: "30px",
        }}
      > <h2 className="sm:text-lg md:text-xl lg:text-2xl font-semibold pb-5 text-white">
      Savings Plan
    </h2>
        <Bar className="w-[500px] h-96 mx-auto" data={chartData} options={chartOptions} />
      </div>
    </div>
  );
}
