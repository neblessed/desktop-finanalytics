import type { TransactionType } from './TransactionType';

export type OperationType = {
   id: string;
   category: string;
   amount: number;
   date: string;
   type: TransactionType;
};
