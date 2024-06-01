// src/components/AddIncomeForm.js
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addIncome } from '../slices/walletSlice';

const AddIncomeForm = () => {
  const [amount, setAmount] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addIncome(parseFloat(amount)));
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Add Income" required />
      <button type="submit">Add Income</button>
    </form>
  );
};

export default AddIncomeForm;
