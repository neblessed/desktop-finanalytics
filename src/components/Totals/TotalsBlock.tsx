import { useAppSelector } from '../../hooks/redux';
import TotalBalance from './components/TotalBalance';
import './TotalsBlock.css';

function TotalsBlock() {
   const { totals } = useAppSelector((state) => state.operationsReducer);

   return (
      <div className="totals">
         <TotalBalance
            icon={<img src="./earnings.svg" />}
            title="Total Balance"
            balance={totals.earnings - totals.expense}
            currency="$"
         />
         <div className="line" />
         <TotalBalance
            icon={<img src="./spendings.svg" />}
            title="Total Expense"
            balance={totals.expense}
            type="spendings"
            currency="$"
         />
      </div>
   );
}

export default TotalsBlock;
