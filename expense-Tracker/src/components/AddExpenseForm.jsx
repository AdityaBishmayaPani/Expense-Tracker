// src/components/AddExpenseForm.js
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addExpense } from '../slices/expensesSlice';
import { spendAmount } from '../slices/walletSlice';
import { useSnackbar } from 'notistack';

const AddExpenseForm = () => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const balance = useSelector(state => state.wallet.balance);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = (e) => {
    e.preventDefault();
    const expenseAmount = parseFloat(amount);

    if (expenseAmount > balance) {
      enqueueSnackbar('Insufficient balance', { variant: 'error' });
      return;
    }

    dispatch(addExpense({ id: Date.now(), title, amount: expenseAmount, category, date }));
    dispatch(spendAmount(expenseAmount));
    setTitle('');
    setAmount('');
    setCategory('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" required />
      <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" required />
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default AddExpenseForm;
