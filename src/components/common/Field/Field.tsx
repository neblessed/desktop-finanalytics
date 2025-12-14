import type { HTMLInputTypeAttribute } from "react";
import "./Field.css";

type FieldPropType = {
    label?: string;
    placeholder?: string;
    inputType?: HTMLInputTypeAttribute;
    wide?: boolean; //TODO сделать нерастягиваемым
};

function Field({ label, placeholder, inputType = "text" }: FieldPropType) {
    return (
        <div className="field">
            <label className="field_label">{label}</label>
            <input
                className="field_input"
                type={inputType}
                placeholder={placeholder ?? "Type here"}
            />
        </div>
    );
}

export default Field;
