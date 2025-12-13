import Button from "../common/Button/Button";
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
                <Field label="Date" inputType="input" />
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
