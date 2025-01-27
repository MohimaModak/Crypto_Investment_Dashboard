import React from 'react';
import PortfolioPerformance from './PortfolioPerformance';
import AssetAllocation2 from './AssetAllocation2';
import MarketTrends from './MarketTrends';

export default function Analytics() {
  return (
    <div className="h-screen overflow-y-auto bg-black lg:p-8 sm:p-10 p-3">
      <div className="lg:flex lg:space-x-8 lg:mb-12 space-y-8 lg:space-y-0">
        <div className="flex-1 bg-black rounded-lg shadow-xl p-6">
          <MarketTrends />
        </div>

        <div className="flex-1 bg-black rounded-lg shadow-xl p-6">
          <AssetAllocation2 />
        </div>
      </div>

      <div className="mt-8  rounded-lg shadow-xl p-6">
        <PortfolioPerformance />
      </div>
    </div>
  );
}
