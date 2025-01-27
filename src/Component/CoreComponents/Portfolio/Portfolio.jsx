import React from 'react'
import PortfolioOverview from './PortfolioOverview'
import AssetAllocation from './AssetAllocation'
import RecentTransactions from './RecentTransactions'
import Watchlist from './Watchlist'
import GoalTracking from './GoalTracking'

export default function Portfolio() {
  return (
    <div className="h-screen overflow-y-auto">
      <div className="lg:flex justify-around">
        <div className='lg:w-3/4'>
          <RecentTransactions></RecentTransactions>
          <Watchlist></Watchlist>
        </div>
        <div className='flex justify-center'>
        <div className=''>
          <PortfolioOverview></PortfolioOverview>
          <AssetAllocation></AssetAllocation>
            <GoalTracking></GoalTracking>
        </div>
        </div>

      </div>
    </div>
  )
}

