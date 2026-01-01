import { useState } from "react";
import "./App.css";
import Expense from "./components/Expense/Expense";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import PeriodsPanel from "./components/PeriodsPanel/PeriodsPanel";
import TotalsBlock from "./components/Totals/TotalsBlock";
import type { MenuItems } from "./types/MenuItems";
import CreationForm from "./components/CreationForm/CreationForm";
import { useOperationsSelector } from "./hooks/redux";

function App() {
    const { operations } = useOperationsSelector(
        (store) => store.operationsReducer
    );
    const [selectedMenu, setSelectedMenu] = useState<MenuItems>("home");

    return (
        <div className="app">
            <div className="top_side">
                <Header />
                <TotalsBlock />
            </div>
            <div className="bottom_side">
                {selectedMenu === "home" && (
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
                                />
                            ))}
                        </div>
                    </>
                )}
                {selectedMenu === "expenses" && <CreationForm />}
            </div>
            <div className="bottom_menu">
                <Menu onMenuItemClick={setSelectedMenu} />
            </div>
        </div>
    );
}

export default App;
