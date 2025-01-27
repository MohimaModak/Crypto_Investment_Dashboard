import React, { useState, useEffect } from 'react';

export default function GoalTracking() {
    const [tracking, setTracking] = useState(null);

    useEffect(() => {
        fetch("/GoalTracking.json")
            .then((res) => res.json())
            .then((data) => {
                setTracking(data);
                console.log(data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    if (!tracking) {
        return <div className="text-center text-gray-500">Loading...</div>;
    }

    const {
        goal = "Goal not defined",
        currentProgress = 0,
        remainingAmount = 0,
        completionPercentage = 0,
    } = tracking || {};

    return (
        <div className="w-max m-10"  style={{
            background: `
              linear-gradient(to bottom, #2c6e49, #1b5e20), 
              radial-gradient(circle at 40% 60%, #004d40, transparent 70%),
              linear-gradient(135deg, #2e7d32, #388e3c)`,
            backgroundBlendMode: "overlay",
            borderRadius: "5px",
            padding: "30px",
          }}>
            <div className=" rounded shadow">
                <h1 className="sm:text-xl md:text-xl lg:text-2xl font-semibold pb-5">Goal Tracking</h1>
                <p className="text-lg font-semibold text-center">{goal}</p>
                <div className="mt-4">
                    <div className="w-full bg-white rounded-full h-4">
                        <div
                            className="bg-green-400 h-4 rounded-full"
                            style={{ width: `${completionPercentage}%` }}
                        ></div>
                    </div>
                    <p className="mt-2 text-center text-sm ">
                        {completionPercentage}% completed
                    </p>
                </div>
                <p className="mt-4 text-center text-lg ">
                    "You’re {completionPercentage}% closer to your goal!"
                </p>
                <div className="mt-4 text-sm text-white text-center">
                    <p>Current Progress: ${currentProgress.toLocaleString()}</p>
                    <p>Remaining Amount: ${remainingAmount.toLocaleString()}</p>
                </div>
            </div>
        </div>
    );
}
