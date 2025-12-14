import Button from "../common/Button/Button";
import DatePicker from "../common/DatePicker/DatePicker";
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
                {/* <Field label="Date" inputType="date" /> */}
                <Field
                    label="Select category"
                    inputType="input"
                    placeholder="Select the category"
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
