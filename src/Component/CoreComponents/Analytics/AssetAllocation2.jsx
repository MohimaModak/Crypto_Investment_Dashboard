import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function AssetAllocation2() {
  const [asset, setAsset] = useState(null);

  useEffect(() => {
    fetch("/AssetAllocation2.json")
      .then((res) => res.json())
      .then((data) => {
        setAsset(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  if (!asset) {
    return (
      <div className="flex justify-center items-center h-96 text-gray-300">
        Loading . . .
      </div>
    );
  }

  // Prepare data for the chart
  const assetLabels = Object.keys(asset);
  const assetValues = Object.values(asset);
  const totalValue = 15000; // Example total portfolio value for calculating absolute values
  const absoluteValues = assetValues.map(
    (percentage) => ((percentage / 100) * totalValue).toFixed(2)
  );

  const chartData = {
    labels: assetLabels,
    datasets: [
      {
        label: "Asset Allocation",
        data: assetValues,
        backgroundColor: [
          "#003300",
          "#4C7B46",
          "#9ACC91",
          "#EEFFE3",
        ],
        borderColor: [
          "#003300",
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
      tooltip: {
        callbacks: {
          label: (context) => {
            const percentage = context.raw;
            const assetIndex = context.dataIndex;
            return `${context.label}: ${percentage}% ($${absoluteValues[assetIndex]})`;
          },
        },
      },
      legend: {
        position: "right",
        labels: {
          color: "#fff",
        },
      },
    },
  };

  return (
  // <div className="flex justify-center items-center">
    <div className=" text-white p-6 rounded-lg">
      <h1 className="text-3xl text-center font-semibold mb-4">Asset Allocation</h1>
      <div className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[600px] mx-auto">
        <Doughnut data={chartData} options={chartOptions} />
      </div>
    </div>
  // </div>
  );
}
