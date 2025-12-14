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
    return (
        <Modal title="Add expenses" onCloseModal={onCloseModal}>
            <form className="creation_form">
                <DatePicker />
                <DropdownSelect
                    label="Select category"
                    placeholder="Select the category"
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
                />
                <Button title="Save" />
            </form>
        </Modal>
    );
}

export default CreationModal;
