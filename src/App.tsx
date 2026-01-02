import './App.css';
import Expense from './components/Expense/Expense';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import PeriodsPanel from './components/PeriodsPanel/PeriodsPanel';
import TotalsBlock from './components/Totals/TotalsBlock';
import CreationForm from './components/CreationForm/CreationForm';
import { useAppSelector } from './hooks/redux';
import CategoriesForm from './components/CategoriesForm/CategoriesForm';
import { useState } from 'react';

function App() {
   const { operations } = useAppSelector((store) => store.operationsReducer);
   const menu = useAppSelector((store) => store.menuReducer);

   const [daily, setDaily] = useState(true);
   const [weekly, setWeekly] = useState(false);
   const [monthly, setMonthly] = useState(false);

   return (
      <div className="app">
         <div className="top_side">
            <Header />
            <TotalsBlock />
         </div>
         <div className="bottom_side">
            {menu === 'home' && (
               <>
                  <PeriodsPanel
                     daily={daily}
                     setDaily={setDaily}
                     weekly={weekly}
                     setWeekly={setWeekly}
                     monthly={monthly}
                     setMonthly={setMonthly}
                  />
                  <div className="feed">
                     {operations
                        .filter((operation) => {
                           const now = new Date();
                           const date = new Date();
                           const operationDate = new Date(operation.date);

                           if (daily) {
                              return date.getDate() === operationDate.getDate();
                           }

                           if (weekly) {
                              // Находим начало текущей недели (понедельник)
                              const startOfWeek = new Date(now);
                              const dayOfWeek = now.getDay(); // 0 - воскресенье, 1 - понедельник
                              const diff =
                                 now.getDate() -
                                 dayOfWeek +
                                 (dayOfWeek === 0 ? -6 : 1); // коррекция для начала недели с понедельника
                              startOfWeek.setDate(diff);
                              startOfWeek.setHours(0, 0, 0, 0);

                              // Находим конец текущей недели (воскресенье)
                              const endOfWeek = new Date(startOfWeek);
                              endOfWeek.setDate(endOfWeek.getDate() + 6);
                              endOfWeek.setHours(23, 59, 59, 999);

                              // Проверяем, попадает ли операция в текущую неделю
                              return (
                                 operationDate >= startOfWeek &&
                                 operationDate <= endOfWeek
                              );
                           }

                           if (monthly) {
                              return (
                                 date.getMonth() === operationDate.getMonth() &&
                                 date.getFullYear() ===
                                    operationDate.getFullYear()
                              );
                           }
                        })
                        .map((operation) => (
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
