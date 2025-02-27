import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTachometerAlt, faBriefcase, faExchangeAlt, faChartLine, faList, faCog, faLifeRing } from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
  const [isListeningOpen, setIsListeningOpen] = useState(false);
  const [isReading, setisReading] = useState(false)

  const toggleListeningMenu = () => {
    setIsListeningOpen(!isListeningOpen);
  };

  const toggleReadingMenu = () => {
    setisReading(!isReading)
  }

  return (
    <div className="h-screen overflow-y-auto w-full bg-black">
      <style>
        {`
          @keyframes animate {
            0%, 50% {
              color:  #00000;
              letter-spacing: 10px;
              text-shadow: 0 0 5px #4CAF50, 0 0 20px #4CAF50, 0 0 30px #4CAF50, 0 0 40px #4CAF50;
            }
            100% {
              color: #00000;
              letter-spacing: 10px;
              text-shadow: 0 0 5px #4CAF50, 0 0 20px #4CAF50, 0 0 30px #4CAF50, 0 0 40px #4CAF50;
            }
          }

          .custom-h1 {
            line-height: 1em;
            outline: none;
            animation: animate 15s linear infinite;
            -webkit-box-reflect: below 1px linear-gradient(transparent, green);
          }
        `}
      </style>

      <div>
        <h1 className="custom-h1 text-2 text-2xl uppercase text-center font-semibold my-10 mx-5 relative">Drabin</h1>
      </div>

      <li className="relative group">
        <button
          className="hover:text-[#f59425]"
          onClick={toggleListeningMenu}
        >
          Listening ▼
        </button>
        {isListeningOpen && (
          <ul className="absolute left-0 mt-2 rounded-lg shadow-lg transition-opacity">
            <li>
              <NavLink
                to="/"
                className="flex items-center px-3 py-2 hover:bg-gradient-to-r from-black to-green-900 rounded"
              >
                <FontAwesomeIcon icon={faTachometerAlt} className="mr-2 text-green-500" />
                <h1 className="text-lg">Listening-10-test-01</h1>
              </NavLink>
              <NavLink
                to="/portfolio"
                className="flex items-center px-3 py-2 hover:bg-gradient-to-r from-black to-green-900 rounded"
              >
                <FontAwesomeIcon icon={faBriefcase} className="mr-2 text-green-500" />
                <h1 className="text-lg">Listening-10-test-02</h1>
              </NavLink>
              <NavLink
                to="/transactions"
                className="flex items-center px-3 py-2 hover:bg-gradient-to-r from-black to-green-900 rounded"
              >
                <FontAwesomeIcon icon={faExchangeAlt} className="mr-2 text-green-500" />
                <h1 className="text-lg">Listening-10-test-03</h1>
              </NavLink>
              <NavLink
                to="/analytics"
                className="flex items-center px-3 py-2 hover:bg-gradient-to-r from-black to-green-900 rounded"
              >
                <FontAwesomeIcon icon={faChartLine} className="mr-2 text-green-500" />
                <h1 className="text-lg">Listening-10-test-04</h1>
              </NavLink>
              <div className="border border-dotted text-slate-100 my-1.5"></div>
              <div className="border border-dotted text-slate-100 my-1.5"></div>
              <NavLink
                to="/watchlist"
                className="flex items-center px-3 py-2 hover:bg-gradient-to-r from-black to-green-900 rounded"
              >
                <FontAwesomeIcon icon={faList} className="mr-2 text-green-500" />
                <h1 className="text-lg">Listening-11-test-01</h1>
              </NavLink>
              <NavLink
                to="/settings"
                className="flex items-center px-3 py-2 hover:bg-gradient-to-r from-black to-green-900 rounded"
              >
                <FontAwesomeIcon icon={faCog} className="mr-2 text-green-500" />
                <h1 className="text-lg">Listening-11-test-02</h1>
              </NavLink>
              <NavLink
                to="/helpAndSupport"
                className="flex items-center px-3 py-2 hover:bg-gradient-to-r from-black to-green-900 rounded"
              >
                <FontAwesomeIcon icon={faLifeRing} className="mr-2 text-green-500" />
                <h1 className="text-lg">Listening-11-test-03</h1>
              </NavLink>
              <NavLink
                to="/login"
                className="flex items-center px-3 py-2 hover:bg-gradient-to-r from-black to-green-900 rounded"
              >
                <FontAwesomeIcon icon={faLifeRing} className="mr-2 text-green-500" />
                <h1 className="text-lg">Listening-11-test-04</h1>
              </NavLink>
              <div className="border border-dotted text-slate-100 my-1.5"></div>
              <div className="border border-dotted text-slate-100 my-1.5"></div>
              <NavLink
                to="/logout"
                className="flex items-center px-3 py-2 hover:bg-gradient-to-r from-black to-green-900 rounded"
              >
                <FontAwesomeIcon icon={faLifeRing} className="mr-2 text-green-500" />
                <h1 className="text-lg">Listening-12-test-01</h1>
              </NavLink>
              <NavLink
                to="/Bright"
                className="flex items-center px-3 py-2 hover:bg-gradient-to-r from-black to-green-900 rounded"
              >
                <FontAwesomeIcon icon={faLifeRing} className="mr-2 text-green-500" />
                <h1 className="text-lg">Listening-12-test-02</h1>
              </NavLink>
              <NavLink
                to="/Golden"
                className="flex items-center px-3 py-2 hover:bg-gradient-to-r from-black to-green-900 rounded"
              >
                <FontAwesomeIcon icon={faLifeRing} className="mr-2 text-green-500" />
                <h1 className="text-lg">Listening-12-test-03</h1>
              </NavLink>
              <NavLink
                to="/Swift"
                className="flex items-center px-3 py-2 hover:bg-gradient-to-r from-black to-green-900 rounded"
              >
                <FontAwesomeIcon icon={faLifeRing} className="mr-2 text-green-500" />
                <h1 className="text-lg">Listening-12-test-04</h1>
              </NavLink>
              <div className="border border-dotted text-slate-100 my-1.5"></div>
              <div className="border border-dotted text-slate-100 my-1.5"></div>
              <NavLink
                to="/Jayanti"
                className="flex items-center px-3 py-2 hover:bg-gradient-to-r from-black to-green-900 rounded"
              >
                <FontAwesomeIcon icon={faLifeRing} className="mr-2 text-green-500" />
                <h1 className="text-lg">Listening-13-test-01</h1>
              </NavLink>
              <NavLink
                to="/AssetAllocation2"
                className="flex items-center px-3 py-2 hover:bg-gradient-to-r from-black to-green-900 rounded"
              >
                <FontAwesomeIcon icon={faLifeRing} className="mr-2 text-green-500" />
                <h1 className="text-lg">Listening-13-test-02</h1>
              </NavLink>
              <NavLink
                to="/MarketTrends"
                className="flex items-center px-3 py-2 hover:bg-gradient-to-r from-black to-green-900 rounded"
              >
                <FontAwesomeIcon icon={faLifeRing} className="mr-2 text-green-500" />
                <h1 className="text-lg">Listening-13-test-03</h1>
              </NavLink>
              <NavLink
                to="/PortfolioPerformance"
                className="flex items-center px-3 py-2 hover:bg-gradient-to-r from-black to-green-900 rounded"
              >
                <FontAwesomeIcon icon={faLifeRing} className="mr-2 text-green-500" />
                <h1 className="text-lg">Listening-13-test-04</h1>
              </NavLink>
              <div className="border border-dotted text-slate-100 my-1.5"></div>
              <div className="border border-dotted text-slate-100 my-1.5"></div>
            </li>
          </ul>
        )}
      </li>

      <li className="relative group">
        <button onClick={toggleReadingMenu}>
        Reading ▼
        </button>
        {
          isReading && (
            <ul className="absolute left-0 mt-2 rounded-lg shadow-lg transition-opacity">
          <li>   
            <NavLink
                to="/TopMovers"
                className="flex items-center px-3 py-2 hover:bg-gradient-to-r from-black to-green-900 rounded"
              >
                <FontAwesomeIcon icon={faLifeRing} className="mr-2 text-green-500" />
                <h1 className="text-lg">Reading-10-test-01</h1>
              </NavLink>
              <NavLink
                to="/AssetAllocation"
                className="flex items-center px-3 py-2 hover:bg-gradient-to-r from-black to-green-900 rounded"
              >
                <FontAwesomeIcon icon={faLifeRing} className="mr-2 text-green-500" />
                <h1 className="text-lg">Reading-10-test-02</h1>
              </NavLink>
              </li> 
            </ul>
          )
        }
      </li>


    </div>
  );
}

