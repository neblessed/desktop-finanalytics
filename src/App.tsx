import { useState } from "react";
import "./App.css";
import Expense from "./components/Expense/Expense";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import PeriodsPanel from "./components/PeriodsPanel/PeriodsPanel";
import TotalsBlock from "./components/Totals/TotalsBlock";
import Modal from "./components/common/Modal/Modal";
import CreationModal from "./components/CreationModal/CreationModal";

function App() {
    const [showCreationModal, setShowCreationModal] = useState(false);

    return (
        <div className="app">
            <div className="top_side">
                <Header />
                <TotalsBlock />
            </div>
            <div className="bottom_side">
                <PeriodsPanel />
                <div className="feed">
                    <Expense
                        icon="./categories/salary.svg"
                        category="Rent"
                        date="August 20"
                        balance={-1582.83}
                        currency="$"
                    />
                    <Expense
                        icon="./categories/salary.svg"
                        category="Salary"
                        date="August 20"
                        balance={13700}
                        currency="$"
                    />
                    <Expense
                        icon="./categories/salary.svg"
                        category="Transport"
                        date="August 20"
                        balance={-1.64}
                        currency="$"
                    />
                </div>
            </div>
            <div className="bottom_menu">
                <Menu
                    onShowCreationModal={() =>
                        setShowCreationModal((prev) => !prev)
                    }
                />
                {showCreationModal && (
                    <CreationModal
                        onCloseModal={() =>
                            setShowCreationModal((prev) => !prev)
                        }
                    />
                )}
            </div>
        </div>
    );
}

export default App;
