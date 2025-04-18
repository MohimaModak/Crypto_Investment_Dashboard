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
import AddDetailedTransactions from "./Component/CoreComponents/Transactions/AddDetailedTransactions";
import Security from "./Component/CoreComponents/Settings/Security";
import NewsSection from "./Component/CoreComponents/Dashboard/NewsSection";
import InvestmentPerformance from "./Component/CoreComponents/Dashboard/InvestmentPerformance";
import BasicData from "./Component/CoreComponents/Transactions/BasicData";
import SavingsPlan from "./Component/CoreComponents/Dashboard/SavingsPlan";
import Miscellaneous from "./Component/CoreComponents/Miscellaneous/Miscellaneous";
import Theme from "./Component/CoreComponents/Settings/Theme";
import RecentTransactions from "./Component/CoreComponents/Dashboard/RecentTransactions";
import PortfolioBreakdown from "./Component/CoreComponents/Dashboard/PortfolioBreakdown";
import RiskAssessment from "./Component/CoreComponents/Dashboard/RiskAssessment";
import GoalTracking from "./Component/CoreComponents/Portfolio/GoalTracking";
import PortfolioOverview from "./Component/CoreComponents/Portfolio/PortfolioOverview";
import ListenningOne from "./Component/CoreComponents/ListenningOne/ListenningOne";
import WrittingOne from "./Component/WrittingOne/WrittingOne";
import Code from "./Component/CoreComponents/Code/Code";
import CodeOne from "./Component/CoreComponents/CodeOne/CodeOne";
import WritingTwo from "./Component/CoreComponents/WritingTwo/WritingTwo";
import WrittingThree from "./Component/CoreComponents/WrittingThree/WrittingThree";
import Listenningtwo from "./Component/CoreComponents/Listenningtwo/Listenningtwo";
import ReadingOne from "./Component/ReadingOne/ReadingOne";
import ReadingTwo from "./Component/CoreComponents/ReadingTwo/ReadingTwo";
import WrrttingOne from "./Component/CoreComponents/WrrttingOne/WrrttingOne";
import ListnningTwo from "./Component/CoreComponents/ListnningTwo/ListnningTwo";
import WrittingSvnTwo from "./Component/CoreComponents/WrittingSvnTwo/WrittingSvnTwo";
import ReadingTHree from "./Component/CoreComponents/ReadingTHree/ReadingTHree";

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
      {
        path: "/AddDetailedTransactions",
        element: <AddDetailedTransactions></AddDetailedTransactions>,
      },
      {
        path: "/Security",
        element: <Security></Security>,
      },
      {
        path: "/NewsSection",
        element: <NewsSection></NewsSection>,
      },
      {
        path: "/InvestmentPerformance",
        element: <InvestmentPerformance></InvestmentPerformance>,
      },
      {
        path: "/BasicData",
        element: <BasicData></BasicData>,
      },
      {
        path: "/SavingsPlan",
        element: <SavingsPlan></SavingsPlan>,
      },
      {
        path: "/Miscellaneous",
        element: <Miscellaneous></Miscellaneous>,
      },
      {
        path: "/Theme",
        element: <Theme></Theme>,
      },
      {
        path: "/RecentTransactions",
        element: <RecentTransactions></RecentTransactions>,
      },
      {
        path: "/PortfolioBreakdown",
        element: <PortfolioBreakdown></PortfolioBreakdown>,
      },
      {
        path: "/RiskAssessment",
        element: <RiskAssessment></RiskAssessment>,
      },
      {
        path: "/GoalTracking",
        element: <GoalTracking></GoalTracking>,
      },
      {
        path: "/PortfolioOverview",
        element: <PortfolioOverview></PortfolioOverview>,
      },
      {
        path: "/ListenningOne",
        element: <ListenningOne></ListenningOne>,
      },
      {
        path: "/WrittingOne",
        element: <WrittingOne></WrittingOne>,
      },
      {
        path: "/Code",
        element: <Code></Code>,
      },
      {
        path: "/CodeOne",
        element: <CodeOne></CodeOne>,
      },
      {
        path: "/WritingTwo",
        element: <WritingTwo></WritingTwo>,
      },
      {
        path: "/WrittingThree",
        element: <WrittingThree></WrittingThree>,
      },
      {
        path: "/Listenningtwo",
        element: <Listenningtwo></Listenningtwo>,
      },
      {
        path: "/ReadingOne",
        element: <ReadingOne></ReadingOne>,
      },
      {
        path: "/ReadingTwo",
        element: <ReadingTwo></ReadingTwo>,
      },
      {
        path: "/WrrttingOne",
        element: <WrrttingOne></WrrttingOne>,
      },
    
      {
        path: "/ListnningTwo",
        element: <ListnningTwo></ListnningTwo>,
      },
    
      {
        path: "/WrittingSvnTwo",
        element: <WrittingSvnTwo></WrittingSvnTwo>,
      },
      {
        path: "/ReadingTHree",
        element: <ReadingTHree></ReadingTHree>,
      },
    
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(

  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);






