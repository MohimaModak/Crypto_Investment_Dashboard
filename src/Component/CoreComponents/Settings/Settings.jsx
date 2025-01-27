import React from 'react';
import Profile from './Profile';
import Notification from './Notification';
import Security from './Security';
import LanguageCurrency from './LanguageCurrency';
import Account from './Account';
import Theme from './Theme';

export default function Settings() {
  return (
    <div className="flex justify-center">
    <div className="h-screen overflow-y-auto bg-black p-5">
      <div className=''>
        <div className='lg:flex justify-evenly '>
          <Notification/>
          <Profile />
          <LanguageCurrency />
        </div>
      </div>
      <div className='lg:flex justify-evenly lg:space-x-5 items-center'>
        <Security />
        <Account />
        <Theme />
      </div>
    </div>
    </div>
  );
}
