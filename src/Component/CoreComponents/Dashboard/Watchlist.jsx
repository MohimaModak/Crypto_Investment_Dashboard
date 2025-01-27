import React, { useEffect, useState } from "react";

export default function Watchlist() {
    const [watchlist, setWatchlist] = useState([]);

    useEffect(() => {
        fetch("/Watchlist.json")
            .then((res) => res.json())
            .then((data) => {
                setWatchlist(data);
                console.log(data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    const handleAddToPortfolio = (asset) => {
        alert(`${asset} has been added to your portfolio!`);
    };

    return (
        <div className=" p-10 h-max " style={{ padding: "", maxWidth: "800px", margin: "0 auto", }}>
            <h1 className="sm:text-lg md:text-xl lg:text-2xl font-semibold pb-5">Watchlist</h1>
            {watchlist.length > 0 ? (
                <div className="overflow-x-auto">
                    <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
                        <thead>
                            <tr>
                                <th style={headerStyle}>Asset</th>
                                <th style={headerStyle}>Price (USD)</th>
                                <th style={headerStyle}>Change (%)</th>
                                <th style={headerStyle}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {watchlist.map((item, index) => (
                                <tr key={index} style={{ borderBottom: "1px solid #ccc" }}>
                                    <td style={cellStyle}>{item.asset}</td>
                                    <td style={cellStyle}>${item.price.toFixed(2)}</td>
                                    <td
                                        style={{
                                            ...cellStyle,
                                            color: item.change < 0 ? "red" : "green",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        {item.change > 0 ? `+${item.change}%` : `${item.change}%`}
                                    </td>
                                    <td style={cellStyle}>
                                        <button style={{
                                            background: `
                                            radial-gradient(circle at 20% 50%, #6eff62, transparent 60%),
                                            radial-gradient(circle at 10% 10%, #6eff62, transparent 70%),
                                            radial-gradient(circle at 70% 10%, #355E3B, transparent 90%),
                                            radial-gradient(circle at 30% 10%, #003300, transparent 75%)
                                                                                                        `,
                                            backgroundBlendMode: 'overlay',
                                        }}
                                            className="rounded-sm p-2 text-sm md:text-sm lg:text-base shadow-lg shadow-green-950/50 border border-white font-medium"
                                            onClick={() => handleAddToPortfolio(item.asset)}
                                        >
                                            Add to Portfolio
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table></div>
            ) : (
                <p>Loading watchlist...</p>
            )}
        </div>
    );
}

const headerStyle = {
    borderBottom: "2px solid #000",
    padding: "10px",
    fontWeight: "bold",
    textAlign: "left",
};

const cellStyle = {
    padding: "10px",
    textAlign: "left",
};

const buttonStyle = {
    padding: "6px 12px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
};

buttonStyle[":hover"] = {
    backgroundColor: "#218838",
};
