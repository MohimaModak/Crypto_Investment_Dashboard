import React, { useEffect, useState } from 'react';

export default function RiskAssessment() {
  const [risk, setRisk] = useState(null);

  useEffect(() => {
    fetch("/RiskAssessment.json")
      .then((res) => res.json())
      .then((data) => {
        setRisk(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  if (!risk) {
    return <div className="text-center text-lg">Loading...</div>;
  }

  return (
    <div className="w-96 rounded-md p-10" style={{
      background: `
        radial-gradient(circle at 20% 100%, #004000, transparent 60%),
        radial-gradient(circle at 80% 60%, #014421, transparent 70%),
        radial-gradient(circle at 30% 50%, #355E3B, transparent 90%),
        radial-gradient(circle at 70% 50%, #003300, transparent 75%)
      `,
      backgroundBlendMode: 'overlay',
    }}>
      <div className=" m-10 p-10">
        <span
          className={`inline-block px-4 py-2 text-sm sm:text-base font-semibold text-white shadow-black mb-4 rounded-full ${risk.riskLevel === 'Moderate'
            ? 'bg-gradient-to-br from-green-600 to-green-950'
            : risk.riskLevel === 'High'
              ? 'bg-red-600'
              : 'bg-green-500'
            }`}
        >
        </span>
      </div>

      <h2 className="sm:text-lg md:text-xl lg:text-2xl font-semibold pb-5">Suggestions for Improvement:</h2>
      <ul className="space-y-3">
        {risk.suggestions.map((suggestion, index) => (
          <li key={index} className="bg-gradient-to-br from-green-600 to-green-950 p-3 sm:p-4 rounded-md shadow-sm hover:bg-zinc-600 transition duration-300">
            <p className="text-base sm:text-lg font-medium">{suggestion}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
