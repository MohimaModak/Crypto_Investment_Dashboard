import React, { useState, useEffect } from "react";

export default function Theme() {
  const [theme, setTheme] = useState(null);
  const [previewTheme, setPreviewTheme] = useState({});

  useEffect(() => {
    fetch("/Theme.json")
      .then((res) => res.json())
      .then((data) => {
        setTheme(data.theme);
        setPreviewTheme(data.theme);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleBackgroundChange = (bgType, value) => {
    setPreviewTheme((prev) => ({
      ...prev,
      background: { type: bgType, value },
    }));
  };

  if (!theme) {
    return (
      <div className="flex justify-center items-center h-96 text-gray-300">
        Loading...
      </div>
    );
  }

  return (
    <div
      className="flex justify-center m-10 rounded-md"
      style={{
        background: `
        radial-gradient(circle at 20% 50%, #6eff62, transparent 60%),
        radial-gradient(circle at 10% 10%, #6eff62, transparent 70%),
        radial-gradient(circle at 70% 10%, #355E3B, transparent 90%),
        radial-gradient(circle at 30% 10%, #003300, transparent 75%)
                                                                    `,
        backgroundBlendMode: 'overlay',
    }}
    >
      <div>
        <div className="p-8 rounded-lg w-max">
          <h1 className="text-2xl font-bold mb-2 text-center">Theme Settings</h1>

          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-4 text-center">Background Options</h2>
            <div className="flex justify-center gap-4">
              <div className="space-y-5">
                <button
                  onClick={() =>
                    handleBackgroundChange("solid", "#ffffff")
                  }
                  className="py-2 px-4 rounded-md border-2 border-green-600"
                >
                  Solid White
                </button>
                <br />
                <button
                  onClick={() =>
                    handleBackgroundChange("solid", "#333333")
                  }
                  className="rounded-md border-2 border-green-600 py-2 px-4 text-white"
                >
                  Solid Black
                </button>
              </div>

              <div className="space-y-5">
                <button
                  onClick={() =>
                    handleBackgroundChange(
                      "gradient",
                      "linear-gradient(to right, #1d2671, #c33764)"
                    )
                  }
                  className="rounded-md border-2 border-green-600 py-2 px-4 text-white"
                >
                  Gradient
                </button>
                <br />
                <button
                  onClick={() =>
                    handleBackgroundChange("solid", "#4caf50")
                  }
                  className="rounded-md border-2 border-green-600 py-2 px-4 text-white"
                >
                  Green
                </button>
              </div>
            </div>
          </div>

          <div
            className=" mt-6"
          
          >
            <p className="text-lg bg-black p-4 rounded-lg">This is a preview of your selected theme!</p>
          </div>
        </div>
      </div>      
    </div>
  );
}
