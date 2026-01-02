import type { TransactionType } from '../../types/TransactionType';
import { formatBalance } from '../../utils/formatBalance';
import './Expense.css';

type ExpensePropType = {
   icon: string;
   category: string;
   date: string;
   balance: number;
   transactionType: TransactionType;
   currency?: string;
};

function Expense({
   icon,
   category,
   date,
   balance,
   transactionType,
   currency = '$',
}: ExpensePropType) {
   return (
      <div className="expense">
         <div className="expense_content">
            <div className="expense_icon">
               <img src={icon} alt="icon" />
            </div>
            <div className="expense_title">
               <span className="expense_category">{category}</span>
               <span className="expense_date">
                  {new Date(date).toLocaleDateString('en-GB', {
                     day: '2-digit',
                     month: 'long',
                     year: 'numeric',
                  })}
               </span>
            </div>
         </div>
         <span
            className={`expense_sum ${transactionType === 'spendings' ? 'loss' : ''}`}
         >
            {formatBalance(balance, currency, transactionType)}
         </span>
      </div>
   );
}

export default Expense;
