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
import Bright from "./Component/Sidebar/Bright/Bright";
import Golden from "./Component/Golden/Golden";
import Swift from "./Component/Swift/Swift";
import Jayanti from "./Component/CoreComponents/Jayanti/Jayanti";
import AssetAllocation2 from "./Component/CoreComponents/Analytics/AssetAllocation2";
import MarketTrends from "./Component/CoreComponents/Analytics/MarketTrends";
import PortfolioPerformance from "./Component/CoreComponents/Analytics/PortfolioPerformance";
import TopMovers from "./Component/CoreComponents/Analytics/TopMovers";
import AssetAllocation from "./Component/CoreComponents/Portfolio/AssetAllocation";
import Account from "./Component/CoreComponents/Settings/Account";
import LanguageCurrency from "./Component/CoreComponents/Settings/LanguageCurrency";
import Notification from "./Component/CoreComponents/Settings/Notification";
import CurrentPortfolioValue from "./Component/CoreComponents/Dashboard/CurrentPortfolioValue";
import Profile from "./Component/CoreComponents/Settings/Profile";
import AdvancedInteractivity from "./Component/CoreComponents/Transactions/AdvancedInteractivity";
import TransactionAnalytics from "./Component/CoreComponents/Transactions/TransactionAnalytics";
import Form from "./Component/CoreComponents/Transactions/Form";

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
      {
        path: "/Bright",
        element: <Bright></Bright>,
      },
      {
        path: "/Golden",
        element: <Golden></Golden>,
      },
      {
        path: "/Swift",
        element: <Swift></Swift>,
      },
      {
        path: "/Jayanti",
        element: <Jayanti></Jayanti>,
      },
      {
        path: "/AssetAllocation2",
        element: <AssetAllocation2></AssetAllocation2>,
      },
      {
        path: "/MarketTrends",
        element: <MarketTrends></MarketTrends>,
      },
      {
        path: "/PortfolioPerformance",
        element: <PortfolioPerformance></PortfolioPerformance>,
      },
      {
        path: "/TopMovers",
        element: <TopMovers></TopMovers>,
      },
      {
        path: "/AssetAllocation",
        element: <AssetAllocation></AssetAllocation>,
      },
      {
        path: "/Account",
        element: <Account></Account>,
      },
      {
        path: "/LanguageCurrency",
        element: <LanguageCurrency></LanguageCurrency>,
      },
      {
        path: "/Notification",
        element: <Notification></Notification>,
      },
      {
        path: "/CurrentPortfolioValue",
        element: <CurrentPortfolioValue></CurrentPortfolioValue>,
      },
      {
        path: "/Profile",
        element: <Profile></Profile>,
      },
      {
        path: "/AdvancedInteractivity",
        element: <AdvancedInteractivity></AdvancedInteractivity>,
      },
      {
        path: "/TransactionAnalytics",
        element: <TransactionAnalytics></TransactionAnalytics>,
      },
      {
        path: "/Form",
        element: <Form></Form>,
      },

    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);