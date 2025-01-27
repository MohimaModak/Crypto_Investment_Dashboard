import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  PointElement,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, LineElement, Tooltip, Legend, PointElement);

export default function PortfolioPerformance() {
  const [portfolio, setPortfolio] = useState(null);
  const [timeRange, setTimeRange] = useState("all");

  useEffect(() => {
    fetch("/PortfolioPerformance.json")
      .then((res) => res.json())
      .then((data) => {
        setPortfolio(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  if (!portfolio) {
    return (
      <div className="flex justify-center items-center h-96 text-white">
        Loading . . .
      </div>
    );
  }

  // Filter data by time range
  const filteredDates =
    timeRange === "all"
      ? portfolio.date
      : portfolio.date.slice(portfolio.date.length - timeRange);
  const filteredValues =
    timeRange === "all"
      ? portfolio.value
      : portfolio.value.slice(portfolio.value.length - timeRange);

  const totalValue = filteredValues[filteredValues.length - 1];
  const percentageChange = portfolio.growthPercentage;

  const chartData = {
    labels: filteredDates,
    datasets: [
      {
        label: "Portfolio Value ($)",
        data: filteredValues,
        borderColor: "rgba(255, 255, 255, 1)",
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) {
            return;
          }
          const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
          gradient.addColorStop(0, "rgba(75, 192, 192, 0.4)");
          gradient.addColorStop(1, "rgba(75, 192, 192, 0)");
          return gradient;
        },
        fill: true,
        pointBackgroundColor: "rgba(75, 192, 192, 1)",
        pointRadius: 5,
      },
    ],
  };


  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context) =>
            `Portfolio Value: $${context.raw.toLocaleString()}`,
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
    <div className="text-white p-6 rounded-lg" style={{
      background: `
  radial-gradient(circle at 20% 50%, #6eff62, transparent 60%),
  radial-gradient(circle at 10% 10%, #6eff62, transparent 70%),
  radial-gradient(circle at 70% 10%, #355E3B, transparent 90%),
  radial-gradient(circle at 30% 10%, #003300, transparent 75%)`,
      backgroundBlendMode: 'overlay',
  }}>
      <h1 className="text-xl md:text-2xl lg:text-3xl mb-4">Portfolio Performance</h1>
      <div className="mb-6">
        <h2 className="text-xl">
          Total Portfolio Value:{" "}
          <span className="text-green-400">${totalValue.toLocaleString()}</span>
        </h2>
        <h2 className="text-xl">
          Growth:{" "}
          <span
            className={`${percentageChange > 0 ? "text-green-400" : "text-red-400"
              }`}
          >
            {percentageChange > 0 ? "+" : ""}
            {percentageChange}%
          </span>
        </h2>
      </div>
      <div className="flex justify-between items-center mb-4">
        <select
          className="bg-gradient-to-br from-green-600 to-green-950 text-white p-2 rounded-md"
          value={timeRange}
          onChange={(e) => setTimeRange(e.target.value)}
        >
          <option className="text-black" value="all">All Time</option>
          <option className="text-black" value={3}>Last 3 Entries</option>
          <option className="text-black" value={2}>Last 2 Entries</option>
        </select>
      </div>
      <div className="lg:h-80">
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>

  );
}
