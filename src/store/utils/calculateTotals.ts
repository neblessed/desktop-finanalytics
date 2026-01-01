import type { OperationType } from '../../types/OperationType';

type Totals = {
   expense: number;
   earnings: number;
   balance: number;
};

export const calculateTotals = (operations: OperationType[]): Totals => {
   const totals = operations.reduce(
      (acc, operation) => {
         if (operation.type === 'spendings') {
            acc.expense += operation.amount;
         } else {
            acc.earnings += operation.amount;
         }
         return acc;
      },
      { expense: 0, earnings: 0, balance: 0 },
   );

   totals.balance = totals.earnings - totals.expense;
   return totals;
};
