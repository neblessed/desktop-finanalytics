import { formatBalance } from "../../utils/formatBalance";
import "./Expense.css";

type ExpensePropType = {
    icon: string;
    category: string;
    date: string;
    balance: number;
    currency?: string;
};

function Expense({
    icon,
    category,
    date,
    balance,
    currency = "$",
}: ExpensePropType) {
    return (
        <div className="expense">
            <div className="expense_content">
                <div className="expense_icon">
                    <img src={icon} alt="icon" />
                </div>
                <div className="expense_title">
                    <span className="expense_category">{category}</span>
                    <span className="expense_date">{date}</span>
                </div>
            </div>
            <span className={`expense_sum ${balance < 0 ? "loss" : ""}`}>
                {formatBalance(balance, currency)}
            </span>
        </div>
    );
}

export default Expense;
