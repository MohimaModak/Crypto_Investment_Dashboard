import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadarController, RadialLinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register necessary chart.js components
ChartJS.register(RadarController, RadialLinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function InvestmentPerformance() {
    const [performance, setPerformance] = useState(null);

    useEffect(() => {
        fetch("/InvestmentPerformance.json")
            .then((res) => res.json())
            .then((data) => {
                setPerformance(data);
                console.log(data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    // Radar chart data
    const radarData = {
        labels: ['Total Profit Or Loss', 'Percentage Change'], // Labels for the radar chart axes
        datasets: [
            {
                label: 'Investment Performance',
                data: [
                    performance ? performance.totalProfitOrLoss : 0,
                    performance ? performance.percentageChange : 0,
                ],
                backgroundColor: 'rgba(75, 192, 192, 0.2)', // Light green background for the radar chart area
                borderColor: 'rgba(75, 192, 192, 1)', // Darker green border color
                borderWidth: 1,
            },
        ],
    };

    // Radar chart options with infinite animation and larger white text
    const radarOptions = {
        responsive: true,
        scale: {
            ticks: {
                beginAtZero: true,
                font: {
                    size: 18, // Larger font size for ticks
                    weight: 'bold',
                    color: 'white', // White text for tick labels
                },
            },
            pointLabels: {
                font: {
                    size: 20, // Larger font size for axis labels (point labels)
                    weight: 'bold',
                    color: 'white', // White text for point labels
                },
            },
        },
        elements: {
            line: {
                tension: 0.4, // Smooth lines
            },
        },
        plugins: {
            tooltip: {
                titleColor: 'white', // White text for tooltip titles
                bodyColor: 'white', // White text for tooltip bodies
                backgroundColor: 'rgba(0, 0, 0, 0.7)', // Dark background for tooltips
            },
            legend: {
                labels: {
                    font: {
                        size: 16, // Larger font size for legend labels
                        weight: 'bold',
                        color: 'white', // White text for legend labels
                    },
                },
            },
        },
        animation: {
            duration: 10000, // Duration of one complete rotation (in milliseconds)
            animateRotate: true, // Enable the rotation animation
            loop: true, // Infinite loop
            easing: 'linear', // Smooth continuous rotation
        },
    };

    return (
        <div className='m-5'>
            <div className='rounded-lg p-10 w-max max-w-lg' style={{
                background: `
            radial-gradient(circle at 20% 50%, #6eff62, transparent 60%),
            radial-gradient(circle at 10% 10%, #6eff62, transparent 70%),
            radial-gradient(circle at 70% 10%, #355E3B, transparent 90%),
            radial-gradient(circle at 30% 10%, #003300, transparent 75%)`,
                backgroundBlendMode: 'overlay',
            }}>
                {performance ? (
                    <div className="w-full text-white">
                        <div className="flex items-center justify-between">
                            <h1 className="sm:text-lg md:text-xl lg:text-2xl font-semibold pb-5">Investment Performance</h1>
                        </div>
                        <div className='flex items-center justify-between mt-4'>
                            <div className="font-semibold text-sm sm:text-base">
                                <p className="text-sm">
                                    <span className="font-semibold">Total Profit Or Loss:</span>
                                    <span className="text-green-400"> ${performance.totalProfitOrLoss}</span>
                                </p>
                                <p className="text-sm sm:text-base flex items-center mt-2">
                                    <span className="font-semibold mr-2">Percentage Change:</span>
                                    <span className="text-green-400 mr-2">{performance.percentageChange} %</span>
                                </p>
                            </div>

                        </div>
                        <div className="mt-6">
                            {/* Radar chart */}
                            <Radar data={radarData} options={radarOptions} />
                        </div>
                    </div>
                ) : (
                    <p className="text-center text-lg text-white">Loading data...</p> // Ensure text is white while loading
                )}

            </div>
        </div>
    );
}
