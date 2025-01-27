import React from 'react';
import BasicData from './BasicData';
import AddDetailedTransactions from './AddDetailedTransactions';
import AddCurrencyConversion from './AddCurrencyConversion';
import TransactionAnalytics from './TransactionAnalytics';
import AdvancedInteractivity from './AdvancedInteractivity';
import Form from './Form';

export default function Transactions() {
  return (
    <div className="h-screen overflow-y-auto text-white  bg-black p-10 rounded-md">
      <div className="">
        <h1 className="text-3xl font-bold">Transactions Dashboard</h1>
        <p className="text-gray-400">Analyze your transaction data with ease</p>
      </div>


        <div className="lg:flex items-center justify-evenly">
          <AdvancedInteractivity />
          <BasicData />
        </div>

        <div className="lg:flex items-center lg:gap-9 justify-evenly lg:my-16">
          <TransactionAnalytics />
          <AddDetailedTransactions />
          <Form />
        </div>

        <div className="">
          <AddCurrencyConversion />
        </div>
      </div>

  );
}
