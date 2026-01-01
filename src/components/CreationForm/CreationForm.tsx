import { useState } from "react";
import Button from "../common/Button/Button";
import DatePicker from "../common/DatePicker/DatePicker";
import DropdownSelect from "../common/DropdownSelect/DropdownSelect";
import Field from "../common/Field/Field";
import "./CreationForm.css";
import { useAppDispatch } from "../../hooks/redux";
import { addOperation } from "../../store/slices/operations.slice";
import { setMenu } from "../../store/slices/menu.slice";

function CreationForm() {
    const dispatch = useAppDispatch();

    const [date, setDate] = useState<null | string>(null);
    const [category, setCategory] = useState("");
    const [amount, setAmount] = useState(0);

    return (
        <form className="creation_form">
            <DatePicker handleDateChange={setDate} />
            <DropdownSelect
                label="Category"
                placeholder="Select the category"
                category={category}
                handleCategoryChange={setCategory}
                options={[
                    { name: "Salary", iconPath: "./categories/salary.svg" },
                    { name: "Rent", iconPath: "./categories/rent.svg" },
                    {
                        name: "Savings",
                        iconPath: "./categories/savings.svg",
                    },
                    {
                        name: "Groceries",
                        iconPath: "./categories/groceries.svg",
                    },
                    {
                        name: "Transfers",
                        iconPath: "./categories/salary.svg",
                    },
                    { name: "Taxi", iconPath: "./categories/rent.svg" },
                ]}
            />
            <Field
                label="Amount"
                inputType="number"
                placeholder="Type amount"
                fontWeight={500}
                value={amount}
                changesHandler={(e) => setAmount(e.target.value)}
            />
            <div className="create_btn">
                <Button
                    title="Save"
                    type="submit"
                    onClick={(e) => {
                        e.preventDefault();

                        dispatch(
                            addOperation({
                                id: new Date().toISOString(),
                                category,
                                amount,
                                date: date as string,
                            })
                        );

                        dispatch(setMenu("home"));
                    }}
                />
            </div>
        </form>
    );
}

export default CreationForm;
