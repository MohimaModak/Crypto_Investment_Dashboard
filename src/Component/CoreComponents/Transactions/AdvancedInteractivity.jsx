
import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register necessary chart components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function AdvancedInteractivity() {
  const [interactivity, setInteractivity] = useState([]);

  useEffect(() => {
    fetch("/AdvancedInteractivity.json")
      .then((res) => res.json())
      .then((data) => {
        setInteractivity(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  if (!interactivity.length) {
    return <div className="text-gray-300 text-center">Loading...</div>;
  }

  // Prepare data for the Line chart
  const chartData = {
    labels: interactivity.map((item) => item.date), // Use transaction dates as x-axis labels
    datasets: [
      {
        label: "Transaction Amount",
        data: interactivity.map((item) => item.amount), // Use transaction amounts as y-axis data
        backgroundColor: "rgba(75, 192, 192, 0.2)", // Light green fill under the line
        borderColor: "rgba(0, 255, 0)", // Green line
        borderWidth: 2,
        pointBackgroundColor: "rgba(75, 192, 192, 1)", // Green points
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(75, 192, 192, 1)",
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: "#FFFFFF", // White text for the legend
        },
      },
      title: {
        display: true,
        text: "Transaction Amount Over Time",
        color: "#FFFFFF", // White text for title
        font: {
          size: 18,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#FFFFFF", // White text for x-axis
        },
        grid: {
          color: "#FFFFFF", // Light gridlines
        },
      },
      y: {
        ticks: {
          color: "#FFFFFF", // White text for y-axis
        },
        grid: {
          color: "#FFFFFF", // Light gridlines
        },
      },
    },
  };

  return (
      <div className="p-5" >
        <div className="relative lg:w-[800px] w-96 md:h-96 h-max  flex justify-center" >
          <Line data={chartData} options={chartOptions} />
        </div>
      </div>
  );
}

