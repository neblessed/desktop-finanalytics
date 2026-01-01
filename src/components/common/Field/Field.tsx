import type { ChangeEventHandler, HTMLInputTypeAttribute } from "react";
import "./Field.css";

type FieldPropType = {
    label?: string;
    placeholder?: string;
    inputType?: HTMLInputTypeAttribute;
    fontWeight?: number;
    wide?: boolean; //TODO сделать нерастягиваемым
    value?: string | number;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    changesHandler?: (e?: any) => void;
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
