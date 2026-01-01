import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { OperationType } from '../../types/OperationType';

const operations: OperationType[] = [
   {
      id: '1',
      category: 'Rent',
      amount: 1582.38,
      date: '4/1/2026',
   },
];

const operationsSlice = createSlice({
   name: 'operations',
   initialState: {
      operations,
   },
   reducers: {
      addOperation: (state, action: PayloadAction<OperationType>) => {
         state.operations.push(action.payload);
      },
   },
});

export const { addOperation } = operationsSlice.actions;
export default operationsSlice.reducer;
