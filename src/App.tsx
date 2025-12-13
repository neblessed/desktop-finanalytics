import "./App.css";
import Header from "./components/Header/Header";
import PeriodsPanel from "./components/PeriodsPanel/PeriodsPanel";
import TotalsBlock from "./components/Totals/TotalsBlock";

function App() {
    return (
        <div className="app">
            <div className="top_side">
                <Header />
                <TotalsBlock />
            </div>
            <div className="bottom_side">
                <PeriodsPanel />
            </div>
        </div>
    );
}

export default App;
