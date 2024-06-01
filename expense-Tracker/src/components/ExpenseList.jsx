// src/components/ExpenseList.js
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteExpense } from '../slices/expensesSlice';

const ExpenseList = () => {
  const expenses = useSelector(state => state.expenses.expenses);
  const dispatch = useDispatch();

  return (
    <ul>
      {expenses.map(expense => (
        <li key={expense.id}>
          <span>{expense.title} - ${expense.amount} - {expense.category} - {expense.date}</span>
          <button onClick={() => dispatch(deleteExpense(expense.id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ExpenseList;
