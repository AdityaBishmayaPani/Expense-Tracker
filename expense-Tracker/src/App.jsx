// src/App.js
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import Header from './components/Header';
import AddExpenseForm from './components/AddExpenseForm';
import AddIncomeForm from './components/AddIncomeForm';
import ExpenseList from './components/ExpenseList';
import ExpenseSummary from './components/ExpenseSummary';
import ExpenseTrends from './components/ExpenseTrends';
import { SnackbarProvider } from 'notistack';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <SnackbarProvider maxSnack={3}>
        <Header />
        <AddIncomeForm />
        <AddExpenseForm />
        <ExpenseList />
        <ExpenseSummary />
        <ExpenseTrends />
      </SnackbarProvider>
    </Provider>
  );
}

export default App;
