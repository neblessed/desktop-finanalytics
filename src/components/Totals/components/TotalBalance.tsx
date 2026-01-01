import type { ReactNode } from 'react';
import './TotalBalance.css';
import { formatBalance } from '../../../utils/formatBalance';
import type { TransactionType } from '../../../types/TransactionType';

type TotalBalancePropType = {
   icon: ReactNode;
   title: string;
   balance: number;
   type?: TransactionType;
   currency: string;
};

function TotalBalance({
   icon,
   title,
   balance,
   type = 'earnings',
   currency,
}: TotalBalancePropType) {
   return (
      <div className="total_balance">
         <div className="total_balance_head">
            <div className="icon">{icon}</div>
            <span className="title">{title}</span>
         </div>
         <span
            className={`total_balance_sum ${type === 'spendings' ? 'loss' : ''}`}
         >
            {formatBalance(balance, currency, type)}
         </span>
      </div>
   );
}

export default TotalBalance;
