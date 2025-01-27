import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function MarketTrends() {
  const [trends, setTrends] = useState(null);
  const [activeAsset, setActiveAsset] = useState("Bitcoin");

  useEffect(() => {
    fetch("/MarketTrends.json")
      .then((res) => res.json())
      .then((data) => {
        setTrends(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  if (!trends) {
    return (
      <div className="flex justify-center items-center h-96 text-gray-300">
        Loading . . .
      </div>
    );
  }

  const { assets, dates, values } = trends;

  // Chart Data for the selected asset
  const chartData = {
    labels: dates,
    datasets: [
      {
        label: activeAsset,
        data: values[activeAsset],
        fill: true,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        pointBorderColor: "rgba(54, 162, 235, 1)",
        pointBackgroundColor: "#fff",
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { mode: "index", intersect: false },
    },
    scales: {
      x: {
        ticks: { color: "#fff" },
        grid: { display: false },
      },
      y: {
        ticks: { color: "#fff" },
        grid: { color: "rgba(255, 255, 255, 0.1)" },
      },
    },
  };

  return (
    <div className=" text-white p-6 rounded-lg shadow-sm shadow-green-400"   style={{
      background: `
  radial-gradient(circle at 20% 50%, #6eff62, transparent 60%),
  radial-gradient(circle at 10% 10%, #6eff62, transparent 70%),
  radial-gradient(circle at 70% 10%, #355E3B, transparent 90%),
  radial-gradient(circle at 30% 10%, #003300, transparent 75%)`,
      backgroundBlendMode: 'overlay',
  }}>
      <h1 className="text-3xl font-semibold mb-4">Market Trends</h1>

      {/* Tabs for toggling assets */}
      <div className="flex flex-wrap justify-center space-x-4 mb-6">
        {assets.map((asset) => (
          <button
            key={asset}
            onClick={() => setActiveAsset(asset)}
            className={`px-4 py-2 rounded-lg text-white ${
              activeAsset === asset
                ? ""
                : "bg-gradient-to-br from-green-600 to-green-950"
            }`}
          >
            {asset}
          </button>
        ))}
      </div>

      <div className="h-96">
        <Line data={chartData} options={chartOptions} />
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4">Sparklines</h2>
        <div className=" grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {assets.map((asset) => {
            const sparklineData = {
              labels: dates,
              datasets: [
                {
                  data: values[asset],
                  borderColor: "rgba(255, 206, 86, 1)",
                  pointRadius: 0,
                  borderWidth: 2,
                  tension: 0.4,
                },
              ],
            };

            const sparklineOptions = {
              responsive: true,
              plugins: { legend: { display: false } },
              scales: {
                x: { display: false },
                y: { display: false },
              },
            };

            return (
              <div
                key={asset}
                className="p-4 bg-green-950 shadow shadow-green-400 rounded-lg flex flex-col items-center"
              >
                <h3 className="text-lg font-medium">{asset}</h3>
                <div className="h-24 w-full">
                  <Line data={sparklineData} options={sparklineOptions} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
