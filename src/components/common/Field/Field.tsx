import type { HTMLInputTypeAttribute } from "react";
import "./Field.css";

type FieldPropType = {
    label?: string;
    placeholder?: string;
    inputType?: HTMLInputTypeAttribute;
    fontWeight?: number;
    wide?: boolean; //TODO сделать нерастягиваемым
    value?: string | number;
    changesHandler: any;
};

function Field({
    label,
    placeholder,
    inputType = "text",
    fontWeight = 400,
    value = "",
    changesHandler,
}: FieldPropType) {
    return (
        <div className="field">
            <label className="field_label">{label}</label>
            <input
                className="field_input"
                type={inputType}
                placeholder={placeholder ?? "Type here"}
                style={{ fontWeight }}
                value={value}
                onChange={changesHandler}
            />
        </div>
    );
}

export default Field;
