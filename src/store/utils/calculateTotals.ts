import type { OperationType } from '../../types/OperationType';

type Totals = {
   spendings: number;
   earnings: number;
   balance: number;
};

export const calculateTotals = (operations: OperationType[]): Totals => {
   const totals = {
      balance: 0,
      earnings: 0,
      spendings: 0,
   };

   for (const operation of operations) {
      if (operation.type === 'spendings') {
         totals.spendings += operation.amount;
      } else {
         totals.earnings += operation.amount;
      }
   }

   totals.balance = totals.earnings - totals.spendings;
   totals.spendings = -totals.spendings;

   return totals;
};
