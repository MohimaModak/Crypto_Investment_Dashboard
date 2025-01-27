import React, { useEffect, useState } from 'react';

export default function NewsSection() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("/NewsSection.json")
      .then((res) => res.json())
      .then((data) => {
        setNews(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="m-10 p-10 w-96 rounded-md " style={{
      background: `
      radial-gradient(circle at 20% 50%, #6eff62, transparent 60%),
      radial-gradient(circle at 10% 10%, #6eff62, transparent 70%),
      radial-gradient(circle at 70% 10%, #355E3B, transparent 90%),
      radial-gradient(circle at 30% 10%, #003300, transparent 75%)
                                                                  `,
      backgroundBlendMode: 'overlay',
  }}>
      <h1 className="sm:text-lg md:text-xl lg:text-2xl font-semibold pb-5">News Section</h1>
      {news.length === 0 ? (
        <p className="text-center text-lg">Loading...</p>
      ) : (
        <div className="space-y-4">
          {news.map((item, index) => (
            <div key={index} className="bg-gradient-to-br from-green-600 to-green-950  p-4 rounded-md">
              <h2 className="text-base sm:text-lg font-semibold text-white">{item.title}</h2>
              <p className="text-sm sm:text-base text-white">Source: {item.source}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
