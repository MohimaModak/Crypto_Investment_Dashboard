import React, { useState, useEffect } from "react";

export default function AddDetailedTransactions() {
    const [detailed, setDetailed] = useState(null);
    const [filteredData, setFilteredData] = useState([]);
    const [filters, setFilters] = useState({ type: "", asset: "", sortBy: "" });
    const [totals, setTotals] = useState({ deposits: 0, withdrawals: 0, investments: 0 });

    useEffect(() => {
        fetch("/AddDetailedTransactions.json")
            .then((res) => res.json())
            .then((data) => {
                setDetailed(data);
                setFilteredData(data);
                calculateTotals(data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    const calculateTotals = (data) => {
        let deposits = 0,
            withdrawals = 0,
            investments = 0;

        data.forEach((item) => {
            if (item.type === "Deposit") deposits += item.amount;
            else if (item.type === "Withdrawal") withdrawals += item.amount;
            else investments += item.amount;
        });

        setTotals({ deposits, withdrawals, investments });
    };

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        const newFilters = { ...filters, [name]: value };
        setFilters(newFilters);

        let filtered = detailed;

        // Filter by type
        if (newFilters.type) {
            filtered = filtered.filter((item) => item.type === newFilters.type);
        }

        // Filter by asset
        if (newFilters.asset) {
            filtered = filtered.filter((item) => item.asset.includes(newFilters.asset));
        }

        // Sort by date
        if (newFilters.sortBy === "recent") {
            filtered = filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
        } else if (newFilters.sortBy === "oldest") {
            filtered = filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
        }

        setFilteredData(filtered);
    };

    if (!detailed) {
        return <div className="text-center text-gray-500">Loading...</div>;
    }

    return (
        <div className="">
            <div className="p-5  rounded-md" style={{
                background: `
      radial-gradient(circle at 20% 50%, #6eff62, transparent 60%),
      radial-gradient(circle at 10% 10%, #6eff62, transparent 70%),
      radial-gradient(circle at 70% 10%, #355E3B, transparent 90%),
      radial-gradient(circle at 30% 10%, #003300, transparent 75%)
                                                                  `,
                backgroundBlendMode: 'overlay',
            }}>
                <h1 className="text-xl text-white md:text-2xl text-center mb-3" >Detailed Transactions</h1>

                <div className="flex flex-wrap justify-center gap-4" >
                    <div className="">
                        <label className="text-sm font-medium">Filter by Type:</label>
                        <br />
                        <select
                            name="type"
                            onChange={handleFilterChange}
                            className="p-2 rounded-md bg-black my-5"
                        >
                            <option value="">All</option>
                            <option value="Buy">Buy</option>
                            <option value="Sell">Sell</option>
                            <option value="Deposit">Deposit</option>
                            <option value="Withdrawal">Withdrawal</option>
                        </select>
                    </div>
                    <div className="">
                        <label className="text-sm font-medium">Filter by Asset:</label>
                        <br />
                        <select
                            name="asset"
                            onChange={handleFilterChange}
                            className="p-2 rounded-md bg-black my-5"
                        >
                            <option className="border-2 border-green-800" value="">All</option>
                            <option className="border-2 border-green-800" value="Tesla">Tesla</option>
                            <option className="border-2 border-green-800" value="Bitcoin">Bitcoin</option>
                            <option className="border-2 border-green-800" value="Apple">Apple</option>
                        </select>
                    </div>
                    <div className="">
                        <label className="text-sm font-medium">Sort by Date:</label>
                        <br />
                        <select
                            name="sortBy"
                            onChange={handleFilterChange}
                            className="p-2 rounded-md bg-black my-5"
                        >
                            <option value="">None</option>
                            <option value="recent">Recent First</option>
                            <option value="oldest">Oldest First</option>
                        </select>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full table-auto border-collapse shadow-md rounded-lg overflow-x-auto">
                        <thead>
                            <tr className=" text-left">
                                <th className="border-2 border-green-800 py-3 px-4 border-b font-semibold">Date</th>
                                <th className="border-2 border-green-800 py-3 px-4 border-b font-semibold">Type</th>
                                <th className="border-2 border-green-800 py-3 px-4 border-b font-semibold">Asset</th>
                                <th className="border-2 border-green-800 py-3 px-4 border-b font-semibold">Amount</th>
                            </tr>
                        </thead>
                        <tbody className="rounded-md">
                            {filteredData.map((item, index) => (
                                <tr key={index} className="hover:bg-gray-50 rounded-md">
                                    <td className="py-3 px-4 border-2 border-green-800">{item.date}</td>
                                    <td
                                        className={`py-3 px-4 border-b font-semibold border-2 border-green-800 ${item.type === "Buy" || item.type === "Deposit"
                                            ? "text-green-500"
                                            : "text-red-500"
                                            }`}
                                    >
                                        {item.type === "Buy" ? (
                                            <span>&#x25B2;</span> // Upward arrow for Buy
                                        ) : item.type === "Sell" ? (
                                            <span>&#x25BC;</span> // Downward arrow for Sell
                                        ) : null}{" "}
                                        {item.type}
                                    </td>
                                    <td className="py-3 px-4 border-2 border-green-800">{item.asset}</td>
                                    <td className="py-3 px-4 border-2 border-green-800">${item.amount}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
