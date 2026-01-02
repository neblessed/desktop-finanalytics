import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { OperationType } from '../../types/OperationType';
import { calculateTotals } from '../utils/calculateTotals';
import type { OperationsInitialStateType } from '../types/OperationsInitialStateType';
import type { Category } from '../../types/CategoryType';

const initialOperations: OperationType[] = [
   {
      id: '1',
      category: 'Salary',
      amount: 1582.38,
      date: '1/4/2026',
      type: 'earnings',
   },
];

const initialState: OperationsInitialStateType = {
   operations: initialOperations,
   totals: calculateTotals(initialOperations),
   categories: [
      { name: 'Food', iconPath: './categories/food.svg' },
      { name: 'Transport', iconPath: './categories/transport.svg' },
      { name: 'Medicine', iconPath: './categories/medicine.svg' },
      { name: 'Groceries', iconPath: './categories/groceries.svg' },
      { name: 'Rent', iconPath: './categories/rent.svg' },
      { name: 'Gifts', iconPath: './categories/gift.svg' },
      { name: 'Savings', iconPath: './categories/savings.svg' },
      { name: 'Entertainment', iconPath: './categories/entertainment.svg' },
   ],
};

const operationsSlice = createSlice({
   name: 'operations',
   initialState,
   reducers: {
      addOperation: (state, action: PayloadAction<OperationType>) => {
         state.operations.push(action.payload);
         state.totals = calculateTotals(state.operations);
      },
      addCategory: (state, action: PayloadAction<Category>) => {
         state.categories.push(action.payload);
      },
   },
});

export const { addOperation, addCategory } = operationsSlice.actions;
export default operationsSlice.reducer;
