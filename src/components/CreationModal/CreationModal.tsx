import { useState } from "react";
import Button from "../common/Button/Button";
import DatePicker from "../common/DatePicker/DatePicker";
import DropdownSelect from "../common/DropdownSelect/DropdownSelect";
import Field from "../common/Field/Field";
import Modal from "../common/Modal/Modal";
import "./CreationModal.css";

type CreationModalPropType = {
    onCloseModal: () => void;
};

function CreationModal({ onCloseModal }: CreationModalPropType) {
    const [date, setDate] = useState(null);
    const [category, setCategory] = useState("");
    const [amount, setAmount] = useState(0);

    return (
        <Modal title="Add expenses" onCloseModal={onCloseModal}>
            <form className="creation_form">
                <DatePicker handleDateChange={setDate} />
                <DropdownSelect
                    label="Select category"
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
                            console.log({
                                id: new Date().toISOString(),
                                category,
                                amount,
                                date,
                            });
                        }}
                    />
                </div>
            </form>
        </Modal>
    );
}

export default CreationModal;
