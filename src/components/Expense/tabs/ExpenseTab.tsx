import type { TransactionType } from '../../../types/TransactionType';
import './ExpenseTab.css';

type ExpenseTabPropsType = {
   transactionType: TransactionType;
   setTransactionType: (tab: TransactionType) => void;
};

function ExpenseTab({
   transactionType,
   setTransactionType,
}: ExpenseTabPropsType) {
   return (
      <div className="category-controls">
         <div
            className={`category ${
               transactionType === 'spendings' ? 'category-selected' : ''
            }`}
            onClick={() => setTransactionType('spendings')}
         >
            Spendings
         </div>
         <div
            className={`category ${
               transactionType === 'earnings' ? 'category-selected' : ''
            }`}
            onClick={() => setTransactionType('earnings')}
         >
            Earnings
         </div>
      </div>
   );
}

export default ExpenseTab;
