import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { deflate } from 'zlib';

interface CounterState {
  count: number;
  value: number;
  custom: number;
}

const initialState: CounterState = {
  count: 0,
  value: 0,
  custom: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incremented(state){
      state.count++ 
    },
    amountAdded(state, action: PayloadAction<number>) {
      state.value += action.payload
    },
    customAmountAdded(state, action: PayloadAction<number>) {
      state.custom += action.payload
    }
  }
})

export const { incremented, amountAdded, customAmountAdded } = counterSlice.actions;
export default counterSlice.reducer;
