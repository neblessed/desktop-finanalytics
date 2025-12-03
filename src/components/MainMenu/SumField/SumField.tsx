import "./SumField.css";

type Currency = "RUB" | "USD" | "EUR";

type SumProps = {
    value: string;
    currency: Currency;
};

const currencyMapper = (currency: Currency) => {
    const mapper = {
        RUB: "₽",
        USD: "$",
        EUR: "€",
    };

    return mapper[currency];
};

function SumField(props: SumProps) {
    const { value = "0", currency = "RUB" } = props;

    return (
        <div className="sum">
            <span>{value}</span>
            <span>{currencyMapper(currency)}</span>
        </div>
    );
}

export default SumField;
