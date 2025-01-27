import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";

// Register necessary chart.js components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function PortfolioBreakdown() {
  const [breakdown, setBreakdown] = useState(null);

  useEffect(() => {
    fetch("/PortfolioBreakdown.json")
      .then((res) => res.json())
      .then((data) => {
        setBreakdown(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const data = breakdown
    ? {
        labels: ["Crypto", "ETFs", "Stocks"], // Labels for each section of the pyramid chart
        datasets: [
          {
            label: "Portfolio Breakdown",
            data: [breakdown.crypto, breakdown.etfs, breakdown.stocks], // Data for each section
            backgroundColor: ["#008000",
          "#4C7B46",
          "#9ACC91",
          "#EEFFE3",], // Background colors
            borderWidth: 1,
            borderColor: "#FFFFFF", // Border color for contrast
            barThickness: 50, // Control the width of each bar to create the pyramid effect
            categoryPercentage: 1.0,
            barPercentage: 1.0,
          },
        ],
      }
    : null;

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: "y", // Set the bars to be horizontal
    scales: {
      x: {
        beginAtZero: true,
        max: 100, // Ensure the bars are proportional to the total value
        grid: {
          display: false, // Hide grid lines
        },
        ticks: {
          font: {
            size: 18, // Adjust font size for the x-axis labels
            weight: "bold",
            color: "black", // Set x-axis ticks to white
          },
        },
      },
      y: {
        ticks: {
          font: {
            size: 18, // Increase font size for the y-axis labels
            weight: "bold",
            color: "#FFFFFF", // White font for better visibility
          },
        },
        grid: {
          display: false, // Hide grid lines for a cleaner look
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          title: (tooltipItems) => `${tooltipItems[0].label}`, // Show label in the tooltip
          label: (tooltipItem) => `${tooltipItem.raw}%`, // Show percentage in the tooltip
        },
      },
      legend: {
        labels: {
          font: {
            size: 16, // Increase legend font size
            weight: "bold",
            color: "#FFFFFF", // White font for the legend
          },
        },
      },
    },
  };

  return (
    <div className="m-10 p-10 rounded-md" style={{
      background: `
        linear-gradient(to bottom, #008000
, #1b5e20), 
        radial-gradient(circle at 40% 60%, #004d40, transparent 70%),
        linear-gradient(135deg, #2e7d32, #388e3c)`,
      backgroundBlendMode: "overlay",
      borderRadius: "5px",
      padding: "30px",
    }}>
      <h3 className="sm:text-lg md:text-xl lg:text-2xl font-semibold pb-5 text-white">
        Portfolio Breakdown
      </h3>
      {breakdown ? (
        <div className="relative w-full" style={{ height: "300px" }}>
          <Bar data={data} options={options} />
        </div>
      ) : (
        <p className="text-center text-gray-500">Loading portfolio breakdown...</p>
      )}
    </div>
  );
}
