import {Modal} from 'flowbite-react';
import React, {FC, useState} from 'react';
import API from "../../http";
import {ICategory, IToast, Picture} from "../../models/Models";


interface ModalChangePasswordProp {
    modal: boolean;
    closeModal: () => void;
}

const ModalChangePassword: FC<ModalChangePasswordProp> = ({modal, closeModal}) => {

        return (
            <Modal size={"4xl"} show={modal} onClose={closeModal}>
                <Modal.Header>
                    Форма змінення паролю
                </Modal.Header>

                <Modal.Body>
                    <div className={"text-custom text-gray-600 text-xl mb-2 flex justify-between px-20"}>
                        <h3>Введіть старий пароль</h3>
                        <input type="text" className={"h-3/4 border-2 rounded-lg border-gray-700 "} />
                    </div>
                    <div className={"flex justify-center"}>
                        <button className={"rounded-2xl border-2 p-2 border-gray-500 hover:scale-105 hover:bg-gray-500 hover:text-white duration-200"}>Підтвердити</button>
                    </div>
                </Modal.Body>

                <Modal.Footer>

                </Modal.Footer>
            </Modal>
        );
    }
;

export default ModalChangePassword;