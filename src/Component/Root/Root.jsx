import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

export default function Root() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Cursor Effect Logic
  // useEffect(() => {
    // const handleMouseMove = (e) => {
      // const cursorEffect = document.getElementById("cursor-effect");

      // Create a money particle
      // const money = document.createElement("div");
      // money.style.position = "absolute";
      // money.style.fontSize = "16px";
      // money.style.color = "green";
      // money.style.left = `${e.pageX}px`;
      // money.style.top = `${e.pageY}px`;
      // money.style.animation = "fade-out 10s forwards ease-out";
      // money.innerText = "$"; // You can replace this with an emoji or other symbols

      // Append the money to the cursor-effect container
      // cursorEffect.appendChild(money);

      // Remove the money after animation ends
    //   setTimeout(() => {
    //     money.remove();
    //   }, 1000); // Match the animation duration
    // };

    // Attach mousemove event listener
    // document.addEventListener("mousemove", handleMouseMove);

    // Cleanup on unmount
  //   return () => {
  //     document.removeEventListener("mousemove", handleMouseMove);
  //   };
  // }, []);

  // // Inline Styles for Animations
  // const styles = `
  //   @keyframes fade-out {
  //     0% {
  //       opacity: 1;
  //       transform: translateY(0) scale(1);
  //     }
  //     100% {
  //       opacity: 0;
  //       transform: translateY(-50px) scale(0.5);
  //     }
  //   }

  //   /* Continuous rotation animation for the star */
  //   @keyframes spin-star {
  //     0% {
  //       transform: rotate(0deg);
  //     }
  //     100% {
  //       transform: rotate(360deg);
  //     }
  //   }

  //   .spinning-star {
  //     animation: spin-star 5s linear infinite; /* 5 seconds for a full rotation */
  //   }
  // `;

  return (
    <div className="flex h-screen bg-black text-white">
      {/* Add Cursor Effect Container */}
      {/* <style>{styles}</style> */}
      <div
        id="cursor-effect"
        style={{ position: "fixed", top: 0, left: 0, pointerEvents: "none" }}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full p-4 z-50 transition-transform transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:relative md:translate-x-0 `}
      >
        <Sidebar />
      </div>

      {/* Sidebar Toggle Button with continuous rotation */}
      <button
        className={`absolute top-4 left-4 text-green-600 text-6xl rounded-md md:hidden z-50 ${isSidebarOpen ? "spinning-star" : ""}`}
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? "*" : "*"}
      </button>

      {/* Main Content */}
      <div className="flex-1 p-4 bg-black">
        <Outlet />
      </div>
    </div>
  );
}
