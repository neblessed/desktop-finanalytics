import type { ReactNode } from "react";
import "./TotalBalance.css";

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
    const formatBalance = (balance: number, currency: string) => {
        const formattedNumber = Math.abs(balance).toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });

        if (balance < 0) {
            return `–${currency}${formattedNumber}`;
        } else {
            return `${currency}${formattedNumber}`;
        }
    };

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
