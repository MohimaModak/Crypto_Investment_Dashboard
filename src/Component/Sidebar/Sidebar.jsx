import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTachometerAlt, faBriefcase, faExchangeAlt, faChartLine, faList, faCog, faLifeRing } from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
  const [isListeningOpen, setIsListeningOpen] = useState(false);
  const [isReading, setisReading] = useState(false)
  const [isWritting, setisWritting] = useState(false)

  const toggleListeningMenu = () => {
    setIsListeningOpen(!isListeningOpen);
  };

  const toggleReadingMenu = () => {
    setisReading(!isReading)
  }

  const toggleWrittingMenu = () => {
    setisWritting(!isWritting)
  }

  return (
    <div className="h-screen overflow-y-auto h-full w-full bg-white text-black shadow-2xl">
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
        <h1 className=" text-2 text-2xl uppercase text-center font-semibold my-10 mx-5 relative">Drabin</h1>
      </div>
      <div className="flex justify-center items-center gap-3 px-3">
        <li className="relative group ">
          <button
            className="hover:text-[#f59425] "
            onClick={toggleListeningMenu}
          >
            Listening ▼
          </button>
          {isListeningOpen && (
            <ul className="absolute left-0 mt-2 rounded-lg shadow-lg transition-opacity">
              <li>
                <NavLink
                  to="/"
                  className="flex items-center px-3 py-2 hover:bg-gradient-to-r from-white to-gray-300 shadow-2xl rounded"
                >
                  <FontAwesomeIcon icon={faTachometerAlt} className="mr-2 text-green-500" />
                  <h1 className="text-lg">Listening-10-test-01</h1>
                </NavLink>
                <NavLink
                  to="/portfolio"
                  className="flex items-center px-3 py-2 hover:bg-gradient-to-r from-white to-gray-300 shadow-2xl rounded"
                >
                  <FontAwesomeIcon icon={faBriefcase} className="mr-2 text-green-500" />
                  <h1 className="text-lg">Listening-10-test-02</h1>
                </NavLink>
                <NavLink
                  to="/transactions"
                  className="flex items-center px-3 py-2 hover:bg-gradient-to-r from-white to-gray-300 shadow-2xl rounded"
                >
                  <FontAwesomeIcon icon={faExchangeAlt} className="mr-2 text-green-500" />
                  <h1 className="text-lg">Listening-10-test-03</h1>
                </NavLink>
                <NavLink
                  to="/analytics"
                  className="flex items-center px-3 py-2 hover:bg-gradient-to-r from-white to-gray-300 shadow-2xl rounded"
                >
                  <FontAwesomeIcon icon={faChartLine} className="mr-2 text-green-500" />
                  <h1 className="text-lg">Listening-10-test-04</h1>
                </NavLink>
                <div className="border border-dotted text-black my-1.5"></div>
                <div className="border border-dotted text-black my-1.5"></div>
                <NavLink
                  to="/watchlist"
                  className="flex items-center px-3 py-2 hover:bg-gradient-to-r from-white to-gray-300 shadow-2xl rounded"
                >
                  <FontAwesomeIcon icon={faList} className="mr-2 text-green-500" />
                  <h1 className="text-lg">Listening-11-test-01</h1>
                </NavLink>
                <NavLink
                  to="/settings"
                  className="flex items-center px-3 py-2 hover:bg-gradient-to-r from-white to-gray-300 shadow-2xl rounded"
                >
                  <FontAwesomeIcon icon={faCog} className="mr-2 text-green-500" />
                  <h1 className="text-lg">Listening-11-test-02</h1>
                </NavLink>
                <NavLink
                  to="/helpAndSupport"
                  className="flex items-center px-3 py-2 hover:bg-gradient-to-r from-white to-gray-300 shadow-2xl rounded"
                >
                  <FontAwesomeIcon icon={faLifeRing} className="mr-2 text-green-500" />
                  <h1 className="text-lg">Listening-11-test-03</h1>
                </NavLink>
                <NavLink
                  to="/login"
                  className="flex items-center px-3 py-2 hover:bg-gradient-to-r from-white to-gray-300 shadow-2xl rounded"
                >
                  <FontAwesomeIcon icon={faLifeRing} className="mr-2 text-green-500" />
                  <h1 className="text-lg">Listening-11-test-04</h1>
                </NavLink>
                <div className="border border-dotted text-black my-1.5"></div>
                <div className="border border-dotted text-black my-1.5"></div>
                <NavLink
                  to="/logout"
                  className="flex items-center px-3 py-2 hover:bg-gradient-to-r from-white to-gray-300 shadow-2xl rounded"
                >
                  <FontAwesomeIcon icon={faLifeRing} className="mr-2 text-green-500" />
                  <h1 className="text-lg">Listening-12-test-01</h1>
                </NavLink>
                <NavLink
                  to="/Bright"
                  className="flex items-center px-3 py-2 hover:bg-gradient-to-r from-white to-gray-300 shadow-2xl rounded"
                >
                  <FontAwesomeIcon icon={faLifeRing} className="mr-2 text-green-500" />
                  <h1 className="text-lg">Listening-12-test-02</h1>
                </NavLink>
                <NavLink
                  to="/Golden"
                  className="flex items-center px-3 py-2 hover:bg-gradient-to-r from-white to-gray-300 shadow-2xl rounded"
                >
                  <FontAwesomeIcon icon={faLifeRing} className="mr-2 text-green-500" />
                  <h1 className="text-lg">Listening-12-test-03</h1>
                </NavLink>
                <NavLink
                  to="/Swift"
                  className="flex items-center px-3 py-2 hover:bg-gradient-to-r from-white to-gray-300 shadow-2xl rounded"
                >
                  <FontAwesomeIcon icon={faLifeRing} className="mr-2 text-green-500" />
                  <h1 className="text-lg">Listening-12-test-04</h1>
                </NavLink>
                <div className="border border-dotted text-black my-1.5"></div>
                <div className="border border-dotted text-black my-1.5"></div>
                <NavLink
                  to="/Jayanti"
                  className="flex items-center px-3 py-2 hover:bg-gradient-to-r from-white to-gray-300 shadow-2xl rounded"
                >
                  <FontAwesomeIcon icon={faLifeRing} className="mr-2 text-green-500" />
                  <h1 className="text-lg">Listening-13-test-01</h1>
                </NavLink>
                <NavLink
                  to="/AssetAllocation2"
                  className="flex items-center px-3 py-2 hover:bg-gradient-to-r from-white to-gray-300 shadow-2xl rounded"
                >
                  <FontAwesomeIcon icon={faLifeRing} className="mr-2 text-green-500" />
                  <h1 className="text-lg">Listening-13-test-02</h1>
                </NavLink>
                <NavLink
                  to="/MarketTrends"
                  className="flex items-center px-3 py-2 hover:bg-gradient-to-r from-white to-gray-300 shadow-2xl rounded"
                >
                  <FontAwesomeIcon icon={faLifeRing} className="mr-2 text-green-500" />
                  <h1 className="text-lg">Listening-13-test-03</h1>
                </NavLink>
                <NavLink
                  to="/PortfolioPerformance"
                  className="flex items-center px-3 py-2 hover:bg-gradient-to-r from-white to-gray-300 shadow-2xl rounded"
                >
                  <FontAwesomeIcon icon={faLifeRing} className="mr-2 text-green-500" />
                  <h1 className="text-lg">Listening-13-test-04</h1>
                </NavLink>
                <div className="border border-dotted text-black my-1.5"></div>
                <div className="border border-dotted text-black my-1.5"></div>
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
                    className="flex items-center px-3 py-2 hover:bg-gradient-to-r from-white to-gray-300 shadow-2xl rounded"
                  >
                    <FontAwesomeIcon icon={faLifeRing} className="mr-2 text-green-500" />
                    <h1 className="text-lg">Reading-10-test-01</h1>
                  </NavLink>
                  <NavLink
                    to="/AssetAllocation"
                    className="flex items-center px-3 py-2 hover:bg-gradient-to-r from-white to-gray-300 shadow-2xl rounded"
                  >
                    <FontAwesomeIcon icon={faLifeRing} className="mr-2 text-green-500" />
                    <h1 className="text-lg">Reading-10-test-02</h1>
                  </NavLink>
                  <NavLink
                    to="/Notification"
                    className="flex items-center px-3 py-2 hover:bg-gradient-to-r from-white to-gray-300 shadow-2xl rounded"
                  >
                    <FontAwesomeIcon icon={faLifeRing} className="mr-2 text-green-500" />
                    <h1 className="text-lg">Reading-10-test-03</h1>
                  </NavLink>
                  <NavLink
                    to="/CurrentPortfolioValue"
                    className="flex items-center px-3 py-2 hover:bg-gradient-to-r from-white to-gray-300 shadow-2xl rounded"
                  >
                    <FontAwesomeIcon icon={faLifeRing} className="mr-2 text-green-500" />
                    <h1 className="text-lg">Reading-10-test-04</h1>
                  </NavLink>
                  <NavLink
                    to="/Profile"
                    className="flex items-center px-3 py-2 hover:bg-gradient-to-r from-white to-gray-300 shadow-2xl rounded"
                  >
                    <FontAwesomeIcon icon={faLifeRing} className="mr-2 text-green-500" />
                    <h1 className="text-lg">Reading-19-test-01</h1>
                  </NavLink>
                  <NavLink
                    to="/AdvancedInteractivity"
                    className="flex items-center px-3 py-2 hover:bg-gradient-to-r from-white to-gray-300 shadow-2xl rounded"
                  >
                    <FontAwesomeIcon icon={faLifeRing} className="mr-2 text-green-500" />
                    <h1 className="text-lg">Reading-19-test-02</h1>
                  </NavLink>
                  <NavLink
                    to="/AddDetailedTransactions"
                    className="flex items-center px-3 py-2 hover:bg-gradient-to-r from-white to-gray-300 shadow-2xl rounded"
                  >
                    <FontAwesomeIcon icon={faLifeRing} className="mr-2 text-green-500" />
                    <h1 className="text-lg">Reading-19-test-03</h1>
                  </NavLink>
                  <NavLink
                    to="/Security"
                    className="flex items-center px-3 py-2 hover:bg-gradient-to-r from-white to-gray-300 shadow-2xl rounded"
                  >
                    <FontAwesomeIcon icon={faLifeRing} className="mr-2 text-green-500" />
                    <h1 className="text-lg">Reading-19-test-04</h1>
                  </NavLink>
                  <NavLink
                    to="/BasicData"
                    className="flex items-center px-3 py-2 hover:bg-gradient-to-r from-white to-gray-300 shadow-2xl rounded"
                  >
                    <FontAwesomeIcon icon={faLifeRing} className="mr-2 text-green-500" />
                    <h1 className="text-lg">Reading-18-test-01</h1>
                  </NavLink>
                  <NavLink
                    to="/SavingsPlan"
                    className="flex items-center px-3 py-2 hover:bg-gradient-to-r from-white to-gray-300 shadow-2xl rounded"
                  >
                    <FontAwesomeIcon icon={faLifeRing} className="mr-2 text-green-500" />
                    <h1 className="text-lg">Reading-18-test-02</h1>
                  </NavLink>
                </li>
              </ul>
            )
          }
        </li>

        <li className="relative group">
          <button onClick={toggleWrittingMenu}>
            Writting ▼
          </button>
          {
            isWritting && (
              <ul className="absolute left-0 mt-2 rounded-lg shadow-lg transition-opacity">
                <li>
                  <NavLink
                    to="/Account"
                    className="flex items-center px-3 py-2 hover:bg-gradient-to-r from-white to-gray-300 shadow-2xl rounded"
                  >
                    <FontAwesomeIcon icon={faLifeRing} className="mr-2 text-green-500" />
                    <h1 className="text-lg">Writting-10-test-01</h1>
                  </NavLink>
                  <br />
                  <NavLink
                    to="/LanguageCurrency"
                    className="flex items-center px-3 py-2 hover:bg-gradient-to-r from-white to-gray-300 shadow-2xl rounded"
                  >
                    <FontAwesomeIcon icon={faLifeRing} className="mr-2 text-green-500" />
                    <h1 className="text-lg">Writting-10-test-02</h1>
                  </NavLink>
                  <br />
                  <NavLink
                    to="/TransactionAnalytics"
                    className="flex items-center px-3 py-2 hover:bg-gradient-to-r from-white to-gray-300 shadow-2xl rounded"
                  >
                    <FontAwesomeIcon icon={faLifeRing} className="mr-2 text-green-500" />
                    <h1 className="text-lg">Writting-10-test-03</h1>
                  </NavLink>
                  <br />
                  <NavLink
                    to="/Form"
                    className="flex items-center px-3 py-2 hover:bg-gradient-to-r from-white to-gray-300 shadow-2xl rounded"
                  >
                    <FontAwesomeIcon icon={faLifeRing} className="mr-2 text-green-500" />
                    <h1 className="text-lg">Writting-10-test-04</h1>
                  </NavLink>
                  <br />
                  <NavLink
                    to="/NewsSection"
                    className="flex items-center px-3 py-2 hover:bg-gradient-to-r from-white to-gray-300 shadow-2xl rounded"
                  >
                    <FontAwesomeIcon icon={faLifeRing} className="mr-2 text-green-500" />
                    <h1 className="text-lg">Writting-19-test-01</h1>
                  </NavLink>
                  <br />
                  <NavLink
                    to="/InvestmentPerformance"
                    className="flex items-center px-3 py-2 hover:bg-gradient-to-r from-white to-gray-300 shadow-2xl rounded"
                  >
                    <FontAwesomeIcon icon={faLifeRing} className="mr-2 text-green-500" />
                    <h1 className="text-lg">Writting-19-test-02</h1>
                  </NavLink>
                </li>
              </ul>
            )
          }
        </li>

      </div>
    </div>
  );
}

