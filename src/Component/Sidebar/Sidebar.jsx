import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTachometerAlt, faBriefcase, faExchangeAlt, faChartLine, faList, faCog, faLifeRing, faEllipsisH, faSignInAlt, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
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
        <h1 className="custom-h1 text-2xl text-center font-semibold my-10 relative">Vadra <br />KALI.</h1>
      </div>
      <div>
        <div className="border border-dotted text-slate-100"></div>
        <h2 className="text-green-500 text-sm uppercase py-2.5">Menu</h2>
        <div className="border border-dotted text-slate-100 mb-5"></div>

        <NavLink
          to="/"
          className="flex items-center px-3 py-2 hover:bg-gradient-to-r from-black to-green-900 rounded"
        >
          <FontAwesomeIcon icon={faTachometerAlt} className="mr-2 text-green-500" />
          <h1 className=" text-xl">Listening-10-test-01</h1>
        </NavLink>
        <NavLink
          to="/portfolio"
          className="flex items-center px-3 py-2 hover:bg-gradient-to-r from-black to-green-900 rounded"
        >
          <FontAwesomeIcon icon={faBriefcase} className="mr-2 text-green-500" />
          <h1 className="text-xl">Listening-10-test-02</h1>
        </NavLink>
        <NavLink
          to="/transactions"
          className="flex items-center px-3 py-2 hover:bg-gradient-to-r from-black to-green-900 rounded"
        >
          <FontAwesomeIcon icon={faExchangeAlt} className="mr-2 text-green-500" />
          <h1 className="text-xl">Listening-10-test-03</h1>
        </NavLink>

        <NavLink
          to="/analytics"
          className="flex items-center px-3 py-2 hover:bg-gradient-to-r from-black to-green-900 rounded"
        >
          <FontAwesomeIcon icon={faChartLine} className="mr-2 text-green-500" />
          <h1 className="text-xl">Listening-10-test-04</h1>
        </NavLink>
        <NavLink
          to="/watchlist"
          className="flex items-center px-3 py-2 hover:bg-gradient-to-r from-black to-green-900 rounded"
        >
          <FontAwesomeIcon icon={faList} className="mr-2 text-green-500" />
          <h1 className="text-xl">Watchlist</h1>
        </NavLink>
      </div>

      {/* Help Section */}
      <div className="mt-6">
        <div className="border border-dotted text-slate-100"></div>
        <h2 className="text-green-500 text-sm uppercase py-2.5">Help</h2>
        <div className="border border-dotted text-slate-100 mb-5"></div>

        <NavLink
          to="/settings"
          className="flex items-center px-3 py-2 hover:bg-gradient-to-r from-black to-green-900 rounded"
        >
          <FontAwesomeIcon icon={faCog} className="mr-2 text-green-500" />
          <h1 className="text-xl">Settings</h1>
        </NavLink>
        <NavLink
          to="/helpAndSupport"
          className="flex items-center px-3 py-2 hover:bg-gradient-to-r from-black to-green-900 rounded"
        >
          <FontAwesomeIcon icon={faLifeRing} className="mr-2 text-green-500" />
          <h1 className="text-xl">Help And Support</h1>
        </NavLink>
        <NavLink
          to=""
          className="flex items-center px-3 py-2 hover:bg-gradient-to-r from-black to-green-900 rounded"
        >
          <FontAwesomeIcon icon={faEllipsisH} className="mr-2 text-green-500" />
          <h1 className="text-xl">Miscellaneous</h1>
        </NavLink>
      </div>

      {/* Other Section */}
      <div className="mt-6">
        <div className="border border-dotted text-slate-100"></div>
        <h2 className="text-green-500 text-sm uppercase py-2.5">Others</h2>
        <div className="border border-dotted text-slate-100 mb-5"></div>

        <NavLink
          to="/login"
          className="flex items-center px-3 py-2 hover:bg-gradient-to-r from-black to-green-900 rounded"
        >
          <FontAwesomeIcon icon={faSignInAlt} className="mr-2 text-green-500" />
          <h1 className="text-xl">Login</h1>
        </NavLink>
        <NavLink
          to="/logout"
          className="flex items-center px-3 py-2 hover:bg-gradient-to-r from-black to-green-900 rounded mt-2"
        >
          <FontAwesomeIcon icon={faSignOutAlt} className="mr-2 text-green-500" />
          <h1 className="text-xl">Logout</h1>
        </NavLink>
      </div>
    </div>
  );
}
