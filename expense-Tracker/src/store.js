// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import walletReducer from './slices/walletSlice';
import expensesReducer from './slices/expensesSlice';

export const store = configureStore({
  reducer: {
    wallet: walletReducer,
    expenses: expensesReducer,
  },
});
