import type { MouseEventHandler } from "react";
import "./Button.css";

type ButtonPropType = {
    title: string;
    type?: "submit" | "reset" | "button";
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
};

function Button({ title, type, onClick }: ButtonPropType) {
    return (
        <button className="fin_button" type={type} onClick={onClick}>
            {title}
        </button>
    );
}

export default Button;
