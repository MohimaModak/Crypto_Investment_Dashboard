import CurrentPortfolioValue from "./CurrentPortfolioValue";
import InvestmentPerformance from "./InvestmentPerformance";
import NewsSection from "./NewsSection";
import PortfolioBreakdown from "./PortfolioBreakdown";
import RecentTransactions from "./RecentTransactions";
import RiskAssessment from "./RiskAssessment";
import SavingsPlan from "./SavingsPlan";
import Watchlist from "./Watchlist";

export default function Dashboard() {
  return (
    <div className="h-screen overflow-y-auto">
      <div className="flex justify-center items-center">
        <div>
          <div className="m-10">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 items-center">
              <InvestmentPerformance />
              <CurrentPortfolioValue />
              <NewsSection />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center">
              <RecentTransactions />
              <Watchlist></Watchlist>
            </div>
            {/*  */}
           
            {/* */}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center">
          <SavingsPlan />
          <PortfolioBreakdown />
            </div>

        </div>
      </div>
    </div>
  );
}
