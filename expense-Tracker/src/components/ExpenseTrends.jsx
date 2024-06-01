// src/components/ExpenseTrends.js
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useSelector } from 'react-redux';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const ExpenseTrends = () => {
  const expenses = useSelector(state => state.expenses.expenses);

  const data = expenses.reduce((acc, expense) => {
    const category = acc.find(item => item.name === expense.category);
    if (category) {
      category.value += expense.amount;
    } else {
      acc.push({ name: expense.category, value: expense.amount });
    }
    return acc;
  }, []);

  return (
    <BarChart width={600} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="value" fill="#8884d8" />
    </BarChart>
  );
};

export default ExpenseTrends;
