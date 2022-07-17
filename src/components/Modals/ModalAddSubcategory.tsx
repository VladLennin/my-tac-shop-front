import {Button, Modal, Spinner} from 'flowbite-react';
import React, {FC, useEffect, useState} from 'react';
import API from "../../api";
import {ICategory, ISubcategory, IToast, Picture} from "../../Models/Models";

interface ModalAddPSubcategory {
    modal: boolean;
    closeModal: () => void;
    setToasts: (state: any) => void;
    toasts: IToast[];
    categories: ICategory[];
    getCategories: () => void;
}

const ModalAddPSubcategory: FC<ModalAddPSubcategory> = ({
                                                            modal,
                                                            closeModal,
                                                            toasts,
                                                            setToasts,
                                                            categories,
                                                            getCategories
                                                        }) => {

        const [image, setImage] = useState<Picture>(new Picture(""))
        const [newSubcategory, setNewSubcategory] = useState<ISubcategory>(
            new ISubcategory(0, 0, "", new Picture(""))
        );
        const [chosenCategory, setChosenCategory] = useState<ICategory>();


        function createSubcategory() {
            newSubcategory.image = image;
            setNewSubcategory(newSubcategory);
            if (newSubcategory.image.content !== "" && newSubcategory.name !== "") {
                API.post("/category/" + chosenCategory?.id + "/subcategory", newSubcategory).then(res => {
                    console.log(res);
                    setToasts([...toasts, new IToast(String(Date.now()), "Ви успішно додали підкатегорію!", "bi bi-check2")])
                    getCategories();
                }).catch(err => {
                    console.log(err)
                    setToasts([...toasts, new IToast(String(Date.now()), "Відбулася помилка!", "bi bi-x-lg")])

                })
                setNewSubcategory(new ISubcategory(0, 0, "", new Picture("")))
                setChosenCategory(undefined)
                setImage(new Picture(""))
                closeModal();
            } else {
                alert("Усі поля повинні бути заповнені!")
            }
        }

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

        return (
            <Modal size={"4xl"} show={modal} onClose={closeModal}>
                <Modal.Header>
                    Додавання нової підкатегорії
                </Modal.Header>

                <Modal.Body>
                    <div className={(categories.length === 0 ? "justify-center flex" : "") + " space-y-6 "}>
                        {
                            categories.length !== 0
                                ?
                                <div className={"grid grid-cols-2"}>
                                    <h3>Виберіть категорію до котрої хочете додати:</h3>
                                    <select value={newSubcategory.categoryId}
                                            onChange={(e) => setChosenCategory(categories.filter(x => x.id === Number(e.target.value))[0])}
                                            name="" id="" className={"border border-gray-700 rounded"}>
                                        <option disabled={true} value={0}>Виберіть категорію</option>
                                        {categories.map(category =>
                                            <option value={category.id}>{category.name}</option>
                                        )}
                                    </select>
                                </div>
                                :
                                <Spinner className={"m-auto"}
                                         aria-label="Extra large spinner example"
                                         size="xl"
                                />
                        }


                        {
                            chosenCategory !== undefined
                                ?
                                <>
                                    <div className={"grid grid-cols-2"}>
                                        <h3>Назва:</h3>
                                        <input value={newSubcategory.name}
                                               onChange={(e) => setNewSubcategory({
                                                   ...newSubcategory,
                                                   "name": e.target.value
                                               })}
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
                                </>
                                :
                                ""
                        }


                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <button
                        className={"w-full bg-gray-700 border-2 p-3 rounded-lg text-white text-xl border-gray-700 hover:scale-105 hover:bg-white hover:text-gray-700 duration-300"}
                        onClick={() => createSubcategory()}>
                        Додати
                    </button>
                </Modal.Footer>
            </Modal>
        );
    }
;

export default ModalAddPSubcategory;