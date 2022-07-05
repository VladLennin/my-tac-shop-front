import {Button, Modal} from 'flowbite-react';
import React, {FC, useEffect, useState} from 'react';
import API from "../../api";

interface ModalAddPSubcategory {
    modal: boolean;
    closeModal: () => void;
}

const ModalAddPSubcategory: FC<ModalAddPSubcategory> = ({modal, closeModal}) => {

        return (
            <Modal size={"4xl"} show={modal} onClose={closeModal}>
                <Modal.Header>
                    Додавання нової підкатегорії
                </Modal.Header>

                <Modal.Body>
                    <div className="space-y-6">
                        <div className={"grid grid-cols-2"}>
                            <h3>Назва:</h3>
                            <input value={"as"} onChange={(e) => ""}
                                   className={"rounded"} type="text"/>
                        </div>

                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <button
                        className={"w-full bg-gray-700 border-2 p-3 rounded-lg text-white text-xl border-gray-700 hover:scale-105 hover:bg-white hover:text-gray-700 duration-300"}
                        onClick={() => closeModal}>
                        Додати
                    </button>
                </Modal.Footer>
            </Modal>
        );
    }
;

export default ModalAddPSubcategory;