import React, { useEffect, useState } from "react";

export default function Watchlist() {
  const [watchlist, setWatchlist] = useState([]);
  const [newAsset, setNewAsset] = useState("");
  const [priceAlert, setPriceAlert] = useState({});
  const [sortConfig, setSortConfig] = useState({ key: "currentPrice", direction: "asc" });

  useEffect(() => {
    // Fetch watchlist data
    fetch("/WatchlistFeature.json")
      .then((res) => res.json())
      .then((data) => {
        setWatchlist(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // Sorting functionality
  const sortWatchlist = (key) => {
    const direction = sortConfig.key === key && sortConfig.direction === "asc" ? "desc" : "asc";
    const sorted = [...watchlist].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });
    setSortConfig({ key, direction });
    setWatchlist(sorted);
  };

  // Add a new asset to the watchlist
  const addAsset = () => {
    if (!newAsset) return;
    setWatchlist([
      ...watchlist,
      {
        asset: newAsset,
        symbol: newAsset.slice(0, 3).toUpperCase(),
        currentPrice: 0,
        priceChange24H: { absolute: 0, percentage: 0 },
        marketCap: 0,
      },
    ]);
    setNewAsset("");
  };

  // Remove an asset from the watchlist
  const removeAsset = (symbol) => {
    setWatchlist(watchlist.filter((item) => item.symbol !== symbol));
  };

  // Handle price alert input
  const handlePriceAlert = (symbol, value) => {
    setPriceAlert({ ...priceAlert, [symbol]: value });
  };

  if (!watchlist.length) {
    return (
      <div className="flex justify-center items-center h-96 text-gray-300">
        Loading . . .
      </div>
    );
  }

  return (
    <div className="bg-black text-gray-100 p-6 rounded-lg h-screen overflow-y-auto"  style={{
      background: `
      radial-gradient(circle at 20% 50%, #6eff62, transparent 60%),
      radial-gradient(circle at 10% 10%, #6eff62, transparent 70%),
      radial-gradient(circle at 70% 100%, #355E3B, transparent 90%),
      radial-gradient(circle at 30% 10%, #003300, transparent 75%)
                                                                  `,
      backgroundBlendMode: 'overlay',
  }}>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-semibold">Your Watchlist</h1>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={newAsset}
            onChange={(e) => setNewAsset(e.target.value)}
            placeholder="Add new asset (e.g., Litecoin)"
            className="p-2 bg-black text-white border-2 border-collapse border-green-900 rounded-sm"
          />
          <button
            onClick={addAsset}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-400"
          >
            Add Asset
          </button>
        </div>
      </div>

      <table className="w-full text-left border-collapse overflow-y-auto">
        <thead>
          <tr className="border-b border-white">
            <th className="p-3 cursor-pointer border-2 border-green-900" onClick={() => sortWatchlist("asset")}>
              Asset Name
            </th>
            <th className="p-3 cursor-pointer border-2 border-green-900" onClick={() => sortWatchlist("currentPrice")}>
              Current Price ($)
            </th>
            <th className="p-3 cursor-pointer border-2 border-green-900" onClick={() => sortWatchlist("priceChange24H.percentage")}>
              24H Change (%)
            </th>
            <th className="p-3 cursor-pointer border-2 border-green-900" onClick={() => sortWatchlist("marketCap")}>
              Market Cap ($B)
            </th>
            <th className="p-3 border-2 border-green-900">Price Alert</th>
            <th className="p-3 border-2 border-green-900">Action</th>
          </tr>
        </thead>
        <tbody>
          {watchlist.map((item) => (
            <tr key={item.symbol} className="border-2 border-collapse border-green-900">
              <td className="p-3 border-2 border-green-900">{item.asset} ({item.symbol})</td>
              <td className="p-3 border-2 border-green-900">${item.currentPrice.toLocaleString()}</td>
              <td
                className={`p-3 font-medium border-2 border-green-900 ${item.priceChange24H.percentage > 0 ? "text-green-500" : "text-red-500"
                  }`}
              >
                {item.priceChange24H.percentage > 0 ? "↑" : "↓"} {item.priceChange24H.percentage}%
              </td>
              <td className="p-3 border-2 border-green-900">${(item.marketCap / 1e9).toFixed(2)}B</td>
              <td className="p-3 border-2 border-green-900">
               <div className="flex justify-center">
               <input
                  type="number"
                  value={priceAlert[item.symbol] || ""}
                  onChange={(e) => handlePriceAlert(item.symbol, e.target.value)}
                  placeholder="Set alert"
                  className="p-2 text-white bg-black  border-2 border-collapse border-green-900 rounded-sm"
                />
                </div> 
              </td>
              <td className="p-3 border-2 border-green-900">
              <div className="flex justify-center">     <button
                  onClick={() => removeAsset(item.symbol)}
                  className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-400"
                >
                  Remove
                </button></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
