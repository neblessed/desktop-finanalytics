import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { OperationType } from '../../types/OperationType';
import { calculateTotals } from '../utils/calculateTotals';

const initialOperations: OperationType[] = [
   {
      id: '1',
      category: 'Salary',
      amount: 1582.38,
      date: '4/1/2026',
      type: 'earnings',
   },
];

const operationsSlice = createSlice({
   name: 'operations',
   initialState: {
      operations: initialOperations,
      totals: calculateTotals(initialOperations),
   },
   reducers: {
      addOperation: (state, action: PayloadAction<OperationType>) => {
         console.log(action.payload);
         state.operations.push(action.payload);
         state.totals = calculateTotals(state.operations);
      },
   },
});

export const { addOperation } = operationsSlice.actions;
export default operationsSlice.reducer;
