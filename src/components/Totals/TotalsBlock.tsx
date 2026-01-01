import TotalBalance from "./components/TotalBalance";
import "./TotalsBlock.css";

function TotalsBlock() {
    return (
        <div className="totals">
            <TotalBalance
                icon={<img src="./earnings.svg" />}
                title="Total Balance"
                balance={7783.09}
                currency="$"
            />
            <div className="line" />
            <TotalBalance
                icon={<img src="./spendings.svg" />}
                title="Total Expense"
                balance={-1187.13}
                currency="$"
            />
        </div>
    );
}

export default TotalsBlock;
