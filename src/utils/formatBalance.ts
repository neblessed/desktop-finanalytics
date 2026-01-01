import type { TransactionType } from '../types/TransactionType';

export const formatBalance = (
   balance: number,
   currency: string,
   type: TransactionType,
) => {
   const formattedNumber = Math.abs(balance).toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
   });

   if (type === 'spendings') {
      return `-${currency}${formattedNumber}`;
   }
   return `${currency}${formattedNumber}`;
};
