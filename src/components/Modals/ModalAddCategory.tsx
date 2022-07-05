import {Button, Modal, Toast} from 'flowbite-react';
import React, {FC, ReactNode, useEffect, useState} from 'react';
import API from "../../api";
import {IBase64file, ICategory, IToast, Picture} from "../../Models/Models";
import {constants} from "http2";


interface ModalAddPCategory {
    modal: boolean;
    closeModal: () => void;
    setToasts: (state: any) => void;
    toasts: IToast[];
}

const ModalAddPCategory: FC<ModalAddPCategory> = ({modal, closeModal, setToasts, toasts}) => {

        const [newCategory, setNewCategoory] = useState<ICategory>(
            new ICategory(0, "", [], new Picture(""))
        )
        const [image, setImage] = useState<Picture>(new Picture(""))

        function getBase64(file: File) {
            return new Promise(async resolve => {
                let baseURL: string | ArrayBuffer | null = "";
                let reader = new FileReader();
                await reader.readAsDataURL(file);
                reader.onload = () => {
                    baseURL = reader.result;
                    resolve(baseURL);
                };
            });
        }

        function handleFileInputChange(e: any) {
            getBase64(e.target.files[0])
                .then(result => {
                    setImage({...image, "content": String(result)});
                })
                .catch(err => {
                    console.log(err);
                });
        }

        function createCategory() {
            newCategory.image = image;
            setNewCategoory(newCategory);
            if (newCategory.name !== "" && image.content !== "") {
                API.post("/category", newCategory).then(res => {
                    console.log(res)
                    if (res.status === 200) {
                        setToasts([...toasts, new IToast(String(Date.now()), "Ви іспішно додали категорію", "bi bi-check2")])
                    }
                }).catch(err => {
                    console.log(err)
                    setToasts([...toasts, new IToast(String(Date.now()), "Відбулася помилка!", "bi bi-x-lg")])
                })
                setNewCategoory(new ICategory(0, "", [], new Picture("")))
                setImage(new Picture(""))
                closeModal();
            } else {
                alert("Виберіть зображення та введіть назву!")
            }

        }

        return (
            <Modal size={"4xl"} show={modal} onClose={closeModal}>
                <Modal.Header>
                    Додавання нової категорії
                </Modal.Header>

                <Modal.Body>
                    <div className="space-y-6">
                        <div className={"grid grid-cols-2"}>
                            <h3>Назва:</h3>
                            <input value={newCategory.name}
                                   onChange={(e) => setNewCategoory({...newCategory, "name": e.target.value})}
                                   className={"rounded"} type="text"/>
                        </div>

                        <div className={"grid grid-cols-2"}>
                            <h3>Зображення:</h3>
                            <div>
                                <input onChange={handleFileInputChange}
                                       className={"rounded"} type="file"/>
                                <div className={"mt-7"}>
                                    {image.content !== ""
                                        ?
                                        <img
                                            className={"hover:scale-125 duration-300 hover:shadow-2xl h-1/3 w-1/3 border-gray-700 border-2 rounded "}
                                            src={image.content} alt=""/>
                                        :
                                        ""
                                    }

                                </div>
                            </div>

                        </div>

                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <button
                        className={"w-full bg-gray-700 border-2 p-3 rounded-lg text-white text-xl border-gray-700 hover:scale-105 hover:bg-white hover:text-gray-700 duration-300"}
                        onClick={() => createCategory()}>
                        Додати
                    </button>
                </Modal.Footer>
            </Modal>
        );
    }
;

export default ModalAddPCategory;