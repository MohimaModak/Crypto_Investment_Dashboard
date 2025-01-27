import React, { useState, useEffect } from "react";

export default function LanguageCurrency() {
  const [settings, setSettings] = useState(null);

  useEffect(() => {
    fetch("/LanguageCurrency.json")
      .then((res) => res.json())
      .then((data) => {
        setSettings(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  if (!settings) {
    return (
      <div className="flex justify-center items-center h-96 text-gray-300">
        Loading...
      </div>
    );
  }

  const handleLanguageChange = (event) => {
    setSettings((prev) => ({ ...prev, language: event.target.value }));
  };

  const handleCurrencyChange = (event) => {
    setSettings((prev) => ({ ...prev, currency: event.target.value }));
  };

  return (
    <div className=" p-8 rounded-md"  style={{
      background: `
      radial-gradient(circle at 20% 50%, #6eff62, transparent 60%),
      radial-gradient(circle at 10% 10%, #6eff62, transparent 70%),
      radial-gradient(circle at 70% 10%, #355E3B, transparent 90%),
      radial-gradient(circle at 30% 10%, #003300, transparent 75%)
                                                                  `,
      backgroundBlendMode: 'overlay',
  }}>
      <h1 className="text-2xl font-bold mb-6">Language & Currency</h1>

      {/* Language Selection */}
      <div className="mb-6">
        <label className="block text-lg font-medium mb-2" htmlFor="language">
          Preferred Language
        </label>
        <select
          id="language"
          value={settings.language}
          onChange={handleLanguageChange}
          className="w-full p-3 bg-black text-gray-100 rounded-lg focus:outline-none focus:ring focus:ring-indigo-500"
        >
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
          <option value="French">French</option>
          <option value="German">German</option>
          <option value="Chinese">Chinese</option>
        </select>
      </div>

      {/* Currency Selection */}
      <div className="mb-6">
        <label className="block text-lg font-medium mb-2" htmlFor="currency">
          Default Currency
        </label>
        <select
          id="currency"
          value={settings.currency}
          onChange={handleCurrencyChange}
          className="w-full p-3 bg-black text-gray-100 rounded-lg focus:outline-none focus:ring focus:ring-indigo-500"
        >
          <option value="USD">USD - US Dollar</option>
          <option value="EUR">EUR - Euro</option>
          <option value="BTC">BTC - Bitcoin</option>
          <option value="JPY">JPY - Japanese Yen</option>
          <option value="GBP">GBP - British Pound</option>
        </select>
      </div>

      {/* Summary */}
      <div className="text-center">
        <p className="text-sm text-white mb-3">
          Current Language: <span className="font-medium">{settings.language}</span>
        </p>
        <p className="text-sm text-white">
          Current Currency: <span className="font-medium">{settings.currency}</span>
        </p>
      </div>
    </div>
  );
}
