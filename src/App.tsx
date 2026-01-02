import './App.css';
import Expense from './components/Expense/Expense';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import PeriodsPanel from './components/PeriodsPanel/PeriodsPanel';
import TotalsBlock from './components/Totals/TotalsBlock';
import CreationForm from './components/CreationForm/CreationForm';
import { useAppSelector } from './hooks/redux';
import CategoriesForm from './components/CategoriesForm/CategoriesForm';

function App() {
   const { operations } = useAppSelector((store) => store.operationsReducer);
   const menu = useAppSelector((store) => store.menuReducer);

   return (
      <div className="app">
         <div className="top_side">
            <Header />
            <TotalsBlock />
         </div>
         <div className="bottom_side">
            {menu === 'home' && (
               <>
                  <PeriodsPanel />
                  <div className="feed">
                     {operations.map((operation) => (
                        <Expense
                           key={operation.id}
                           icon="./categories/salary.svg"
                           category={operation.category}
                           date={operation.date}
                           balance={operation.amount}
                           transactionType={operation.type}
                        />
                     ))}
                  </div>
               </>
            )}
            {menu === 'expenses' && <CreationForm />}
            {menu === 'categories' && <CategoriesForm />}
         </div>
         <div className="bottom_menu">
            <Menu />
         </div>
      </div>
   );
}

export default App;
