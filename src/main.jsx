import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./Component/Root/Root";
import Sidebar from "./Component/Sidebar/Sidebar";
import Dashboard from "./Component/CoreComponents/Dashboard/Dashboard";
import Portfolio from "./Component/CoreComponents/Portfolio/Portfolio";
import Transactions from "./Component/CoreComponents/Transactions/Transactions";
import Analytics from "./Component/CoreComponents/Analytics/Analytics";
import Watchlist from "./Component/CoreComponents/Watchlist/Watchlist";
import Settings from "./Component/CoreComponents/Settings/Settings";
import HelpAndSupport from "./Component/CoreComponents/HelpAndSupport/HelpAndSupport";
import Login from "./Component/CoreComponents/Authentication/Login";
import Logout from "./Component/CoreComponents/Authentication/Logout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [

      {
        path: "/",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/Sidebar",
        element: <Sidebar></Sidebar>,
      },
      {
        path: "/portfolio",
        element: <Portfolio></Portfolio>,
      },
      {
        path: "/transactions",
        element: <Transactions></Transactions>,
      },
      {
        path: "/analytics",
        element: <Analytics></Analytics>,
      },
      {
        path: "/watchlist",
        element: <Watchlist></Watchlist>,
      },
      {
        path: "/settings",
        element: <Settings></Settings>,
      },
      {
        path: "/helpAndSupport",
        element: <HelpAndSupport></HelpAndSupport>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/logout",
        element: <Logout></Logout>,
      },
    
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);