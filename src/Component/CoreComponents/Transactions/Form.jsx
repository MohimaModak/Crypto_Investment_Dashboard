import React, { useState, useEffect } from "react";

export default function Form() {
    const [form, setForm] = useState(null);
    const [formData, setFormData] = useState({
        type: "",
        asset: "",
        amount: "",
        currency: "",
        date: "",
    });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        fetch("/AddTransactionForm.json")
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                return res.json();
            })
            .then((data) => {
                setForm(data);
                console.log(data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    const validateForm = () => {
        let tempErrors = {};
        if (!formData.type) tempErrors.type = "Transaction type is required.";
        if (!formData.amount || isNaN(formData.amount))
            tempErrors.amount = "Valid amount is required.";
        if (!formData.currency) tempErrors.currency = "Currency is required.";
        if (formData.type === "Buy" || formData.type === "Sell") {
            if (!formData.asset) tempErrors.asset = "Asset is required.";
        }
        if (!formData.date) tempErrors.date = "Date is required.";
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("Form Data Submitted:", formData);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    if (!form) {
        return (
            <div className="text-center text-lg font-semibold text-gray-600 mt-10">
                Loading...
            </div>
        );
    }

    return (

        <div className="container w-max p-5 mb-5 rounded-md shadow-md m-10" style={{
            background: `
              linear-gradient(to bottom, #2c6e49, #1b5e20), 
              radial-gradient(circle at 40% 60%, #004d40, transparent 70%),
              linear-gradient(135deg, #2e7d32, #388e3c)`,
            backgroundBlendMode: "overlay",
            borderRadius: "5px",
            padding: "30px",
        }}>

            <div className="">
                <h1 className="text-xl md:text-2xl ">
                    Transaction Form
                </h1>
                <form onSubmit={handleSubmit} className="my-5">
                    <div className="mb-4">
                        <label className="block text-white font-semibold mb-2">
                            Transaction Type *
                        </label>
                        <select
                            name="type"
                            value={formData.type}
                            onChange={handleChange}
                            className="md:w-full bg-black rounded-lg p-2 focus:outline-blue-500"
                        >
                            <option value="">Select a type</option>
                            {form.types.map((type, index) => (
                                <option key={index} value={type}>
                                    {type}
                                </option>
                            ))}
                        </select>
                        {errors.type && (
                            <span className="text-red-600 text-sm">{errors.type}</span>
                        )}
                    </div>

                    {(formData.type === "Buy" || formData.type === "Sell") && (
                        <div className="mb-4">
                            <label className="block text-white font-semibold mb-2">
                                Asset *
                            </label>
                            <select
                                name="asset"
                                value={formData.asset}
                                onChange={handleChange}
                                className="md:w-full bg-black rounded-lg p-2 focus:outline-blue-500"
                            >
                                <option value="">Select an asset</option>
                                {form.assets.map((asset, index) => (
                                    <option key={index} value={asset}>
                                        {asset}
                                    </option>
                                ))}
                            </select>
                            {errors.asset && (
                                <span className="text-red-600 text-sm">{errors.asset}</span>
                            )}
                        </div>
                    )}

                    <div className="mb-4">
                        <label className="block text-white font-semibold mb-2">
                            Currency *
                        </label>
                        <select
                            name="currency"
                            value={formData.currency}
                            onChange={handleChange}
                            className="md:w-full bg-black rounded-lg p-2 focus:outline-blue-500"
                        >
                            <option value="">Select a currency</option>
                            {form.currencies.map((currency, index) => (
                                <option key={index} value={currency}>
                                    {currency}
                                </option>
                            ))}
                        </select>
                        {errors.currency && (
                            <span className="text-red-600 text-sm">{errors.currency}</span>
                        )}
                    </div>

                    <div className="mb-4">
                        <label className="block text-white font-semibold mb-2">
                            Date *
                        </label>
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            className="md:w-full bg-black rounded-lg p-2 focus:outline-blue-500"
                        />
                        {errors.date && (
                            <span className="text-red-600 text-sm">{errors.date}</span>
                        )}
                    </div>

                    <div className="mb-4">
                        <label className="block text-white font-semibold mb-2">
                            Amount (in USD) *
                        </label>
                        <input
                            type="text"
                            name="amount"
                            placeholder="Enter amount"
                            value={formData.amount}
                            onChange={handleChange}
                            className="md:w-full bg-black rounded-lg p-2 focus:outline-blue-500"
                        />
                        {errors.amount && (
                            <span className="text-red-600 text-sm">{errors.amount}</span>
                        )}
                    </div>

                    <div className="text-center">
                        <button
                            type="submit"
                            className="md:w-full bg-black text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-600"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>

        </div>
    );
}
