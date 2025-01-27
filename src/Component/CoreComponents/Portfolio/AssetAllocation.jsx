import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

export default function AssetAllocation() {
  const [asset, setAsset] = useState(null);

  useEffect(() => {
    fetch("/AssetAllocation.json")
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
    return <div className="flex justify-center items-center h-64 text-gray-500">Loading...</div>;
  }

  const data = {
    labels: ['Stocks', 'ETFs', 'Crypto'], // Labels for the chart
    datasets: [
      {
        data: [asset.stocks, asset.etfs, asset.crypto], // Values for the chart
        backgroundColor: ["#008000","#4C7B46","#9ACC91"],
        hoverBackgroundColor: ["#008000","#4C7B46","#9ACC91"], // Hover colors
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            const label = tooltipItem.label || '';
            const value = tooltipItem.raw || 0;
            return `${label}: ${value}%`;
          },
        },
      },
      legend: {
        position: 'bottom',
        labels: {
          color: '#FFFFFF',
        },
      },
    },
  };

  return (
    <div className="m-10">
      <div className="p-4 py-4 max-w-md mx-auto rounded-lg shadow-md">
        <h2 className="sm:text-lg md:text-xl lg:text-2xl font-semibold pb-5 text-center">Asset Allocation</h2>
        <div className="relative" style={{ height: '350px' }}>
          <Doughnut data={data} options={options} />
        </div>
      </div>
    </div>
  );
}
