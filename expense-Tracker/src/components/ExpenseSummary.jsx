// src/components/ExpenseSummary.js
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useSelector } from 'react-redux';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const ExpenseSummary = () => {
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

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <PieChart width={400} height={400}>
      <Pie dataKey="value" data={data} cx="50%" cy="50%" outerRadius={100} fill="#8884d8">
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
};

export default ExpenseSummary;
