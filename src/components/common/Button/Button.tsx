import "./Button.css";

type ButtonPropType = {
    title: string;
};

function Button({ title }: ButtonPropType) {
    return <button className="fin_button">{title}</button>;
}

export default Button;
