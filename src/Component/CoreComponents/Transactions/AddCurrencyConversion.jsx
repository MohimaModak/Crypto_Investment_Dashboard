import React, { useState, useEffect } from "react";

export default function AddCurrencyConversion() {
    const [conversion, setConversion] = useState([]);
    const [baseCurrency, setBaseCurrency] = useState("USD"); // Default base currency

    useEffect(() => {
        fetch("/AddCurrencyConversion.json")
            .then((res) => res.json())
            .then((data) => {
                setConversion(data);
                console.log(data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    if (!conversion.length) {
        return <div className="text-2xl">Loading...</div>;
    }

    // Handle currency toggle
    const handleCurrencyToggle = (e) => {
        setBaseCurrency(e.target.value);
    };

    return (
        <div className="">
            <div className="">
                <div className="bg-black  p-10 rounded-lg" style={{
                    background: `
                    radial-gradient(circle at 100% 100%, #6eff62, transparent 60%),
                    radial-gradient(circle at 10% 10%, #6eff62, transparent 70%),
                    radial-gradient(circle at 70% 10%, #355E3B, transparent 90%),
                    radial-gradient(circle at 30% 10%, #003300, transparent 75%)`,
                    backgroundBlendMode: 'overlay',
                }}>
                    <h1 className="text-xl text-white md:text-2xl">Currency Conversion</h1>

                    <div >
                        <label>
                            <h1 className="text-base"> Select Base Currency:</h1>
                            <select
                                className="my-4 px-2 py-2 rounded-lg bg-gradient-to-br from-green-600 to-green-950"
                                value={baseCurrency}
                                onChange={handleCurrencyToggle}
                            >

                                <option className="text-base text-black" value="USD">USD</option>
                                <option className="text-base text-black" value="EUR">EUR</option>
                            </select>
                        </label>
                    </div>

                    <div className="overflow-x-auto">


                        <table className="overflow-x-scroll" style={{ width: "100%", borderCollapse: "collapse" }}>
                            <thead>
                                <tr className="">
                                    <th className="border-2 border-green-800 p-1.5">Date</th>
                                    <th className="border-2 border-green-800 p-1.5">Type</th>
                                    <th className="border-2 border-green-800 p-1.5">Amount</th>
                                    <th className="border-2 border-green-800 p-1.5">Currency</th>
                                    <th className="border-2 border-green-800 p-1.5">Converted Amount</th>
                                </tr>
                            </thead>
                            <tbody className="text-center">
                                {conversion.map((item, index) => (
                                    <tr key={index}>
                                        <td className="border-2 border-green-800 p-1.5">{item.date}</td>
                                        <td className="border-2 border-green-800 p-1.5">{item.type}</td>
                                        <td className="border-2 border-green-800 p-1.5">
                                            <span
                                                title={`Converted: ${baseCurrency === "USD" ? `$${item.convertedAmount}` : `€${item.amount}`}`}
                                                style={{
                                                    textDecoration: "underline dotted",
                                                    cursor: "help",
                                                }}
                                            >
                                                {baseCurrency === "USD" ? `$${item.amount}` : `€${item.convertedAmount}`}
                                            </span>
                                        </td>
                                        <td className="border-2 border-green-800 p-1.5">{item.currency}</td>
                                        <td className="border-2 border-green-800 p-1.5">
                                            {baseCurrency === "USD"
                                                ? `$${item.convertedAmount}`
                                                : `€${item.amount}`}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table></div>
                </div>
            </div>
        </div>
    );
}
