import type { ReactNode } from "react";
import "./Modal.css";

type ModalPropType = {
    title: string;
    children: ReactNode;
    onCloseModal: () => void;
};

function Modal({ title, children, onCloseModal }: ModalPropType) {
    return (
        <div className="modal_layout">
            <div className="modal">
                <div className="modal_header">
                    <span className="modal_title">{title}</span>
                    <img
                        className="modal_close"
                        src="./cross.svg"
                        onClick={onCloseModal}
                    />
                </div>
                <div className="modal_content">{children}</div>
            </div>
        </div>
    );
}

export default Modal;
