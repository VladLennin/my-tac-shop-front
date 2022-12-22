import {Modal} from 'flowbite-react';
import React, {FC} from 'react';

interface ErrorModalProps {
    modal: boolean;
    closeModal: () => void;
    errorText: string;
}

const ErrorModal: FC<ErrorModalProps> = ({modal, closeModal, errorText}) => {
        return (
            <Modal  position={"center"} show={modal} onClose={closeModal}>
                <Modal.Header>
                    Помилка
                </Modal.Header>

                <Modal.Body>
                    <div className={"text-center"}>
                        {errorText}
                    </div>
                </Modal.Body>


            </Modal>
        );
    }
;

export default ErrorModal;