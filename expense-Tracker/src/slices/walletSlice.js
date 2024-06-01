// src/slices/walletSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  balance: 5000,
};

const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    addIncome: (state, action) => {
      state.balance += action.payload;
    },
    spendAmount: (state, action) => {
      state.balance -= action.payload;
    },
  },
});

export const { addIncome, spendAmount } = walletSlice.actions;
export default walletSlice.reducer;
