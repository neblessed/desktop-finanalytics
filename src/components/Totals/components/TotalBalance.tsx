import type { ReactNode } from "react";
import "./TotalBalance.css";
import { formatBalance } from "../../../utils/formatBalance";

type TotalBalancePropType = {
    icon: ReactNode;
    title: string;
    balance: number;
    currency: string;
};

function TotalBalance({
    icon,
    title,
    balance,
    currency,
}: TotalBalancePropType) {
    return (
        <div className="total_balance">
            <div className="total_balance_head">
                <div className="icon">{icon}</div>
                <span className="title">{title}</span>
            </div>
            <span className={`total_balance_sum ${balance < 0 ? "loss" : ""}`}>
                {formatBalance(balance, currency)}
            </span>
        </div>
    );
}

export default TotalBalance;
