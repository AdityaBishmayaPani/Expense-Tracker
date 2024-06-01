/* eslint-disable no-unused-vars */
// src/components/Header.jsx
import React from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
  const balance = useSelector(state => state.wallet.balance);
  return (
    <header>
      <h1>Expense Tracker</h1>
      <div>Wallet Balance: ${balance}</div>
    </header>
  );
};

export default Header;
