import React, { useState, useEffect } from "react";

export default function Account() {
  const [account, setAccount] = useState(null);

  useEffect(() => {
    fetch("/Account.json")
      .then((res) => res.json())
      .then((data) => {
        setAccount(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleDeleteAccount = () => {
    const confirmation = window.confirm(
      "Are you sure you want to delete your account? This action cannot be undone."
    );
    if (confirmation) {
      console.log("Account deletion initiated.");
      // Implement account deletion logic here
    }
  };

  if (!account) {
    return (
      <div className="flex justify-center items-center h-96 text-gray-300">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex justify-center m-10 rounded-md"  style={{
      background: `
      radial-gradient(circle at 20% 50%, #6eff62, transparent 60%),
      radial-gradient(circle at 10% 10%, #6eff62, transparent 70%),
      radial-gradient(circle at 70% 10%, #355E3B, transparent 90%),
      radial-gradient(circle at 30% 10%, #003300, transparent 75%)
                                                                  `,
      backgroundBlendMode: 'overlay',
  }}>
    <div className=" p-8 rounded-md w-max shadow-lg">
      <h1 className="text-2xl font-bold mb-2.5">Account Settings</h1>

      {/* Terms and Privacy */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Terms & Privacy Policy</h2>
        <p className="text-white text-sm mb-4">
          By using this platform, you agree to
          <br /> our terms and privacy policy.
        </p>
        <a
          href={account.termsAndPrivacy}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          View Terms & Privacy Policy
        </a>
      </div>

      {/* Delete Account */}
      <div className="flex justify-center">
      <div >
        <h2 className="text-lg font-semibold mb-2">Delete Account</h2>

        <button
          onClick={handleDeleteAccount}
          className="bg-red-700 text-white py-2 px-4 rounded-lg focus:outline-none"
        >
          Delete Account
        </button>
      </div>
      </div>
      </div>
    </div>
  );
}
