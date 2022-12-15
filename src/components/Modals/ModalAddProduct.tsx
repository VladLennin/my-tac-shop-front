import {Button, Modal, Spinner, Toast} from 'flowbite-react';
import React, {FC, useEffect, useState} from 'react';
import {IBase64file, ICategory, ICharacteristic, IProduct, ISubcategory, IToast, Picture} from "../../models/Models";
import API from "../../api";

interface ModalAddProduct {
    modal: boolean;
    closeModal: () => void;
    setToasts: (state: any) => void;
    toasts: IToast[];
    categories: ICategory[];
}

const ModalAddProduct: FC<ModalAddProduct> = ({modal, closeModal, toasts, setToasts, categories}) => {

        const [characteristics, setCharacteristics] = useState<ICharacteristic[]>([])
        const [characteristicName, setCharacteristicName] = useState<string>("");
        const [characteristicValue, setCharacteristicValue] = useState<string>("");
        const [images, setImages] = useState<Picture[]>([]);

        const [product, setProduct] = useState<IProduct>(
            new IProduct(
                0, 0, "", 0,
                [], 0, [],
                "", "", 0, 0, 0
            ));

        const [currentCategory, setCurrentCategory] = useState<ICategory>();

        function clearForm() {
            setCharacteristics([])
            setCharacteristicName("")
            setCharacteristicValue("")
            setImages([])
            setProduct(new IProduct(
                0, 0, "", 0,
                [], 0, [],
                "", "", 0, 0, 0
            ))
            setCurrentCategory(undefined)

        }

        function createProduct() {
            product.characteristics = characteristics;
            images.map(img => {
                product.images.push(new Picture(img.content))
            })
            if (product.images.length !== 0 &&
                product.cost !== 0 &&
                product.currentCount !== 0 &&
                product.description !== "" &&
                product.linkYoutube !== "" &&
                product.name !== "" &&
                product.characteristics.length !== 0 &&
                product.subcategoryId !== 0

            ) {
                console.log(product)
                API.post("/product", product).then(res => {
                    clearForm()
                    closeModal();
                    setToasts([...toasts, new IToast(String(Date.now()), "Ви успішно додали новий товар!", "bi bi-check2")]
                    )
                }).catch(err => {
                    setToasts([...toasts, new IToast(String(Date.now()), "Щось пішло не так...", "bi bi-x-lg")])

                })


            } else {
                alert("Введіть усі поля!")
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
                    setImages([...images, new Picture(String(result))]);
                    e.target.files = [];
                })
                .catch(err => {
                    console.log(err);
                });
        }

        return (
            <Modal size={"4xl"} show={modal} onClose={closeModal}>

                <Modal.Header>
                    Додавання нового товару
                </Modal.Header>

                <Modal.Body>
                    <div className="space-y-6">
                        <div className={"grid grid-cols-2"}>
                            <h3>Назва:</h3>
                            <input value={product.name}
                                   onChange={(e) => setProduct({...product, "name": e.target.value})}
                                   className={"rounded"} type="text"/>
                        </div>
                        <div className={"grid grid-cols-2"}>
                            <h3>Ціна:</h3>
                            <input value={product.cost}
                                   onChange={(e) => setProduct({...product, "cost": Number(e.target.value)})}
                                   className={"rounded"} defaultValue={0} min={0} type="number"/>
                        </div>
                        <div className={"grid grid-cols-2"}>
                            <h3>Характеристики:</h3>
                            <div className={"border border-gray-700 rounded p-3 "}>
                                {characteristics.map((characteristic, index) =>
                                    <div key={index}
                                         className={"flex justify-between mb-3 p-3 border rounded border-b-gray-500"}>
                                        <h3>{index + 1}.{characteristic.name}</h3>
                                        <div>
                                            {characteristic.values.map(value =>
                                                <div key={index} className={"text-end"}>{value}</div>
                                            )}
                                        </div>
                                        <button className={"hover:scale-150 duration-200  hover:text-red-700"}
                                                onClick={() => {
                                                    setCharacteristics(characteristics.filter(ch => ch !== characteristic))
                                                }}>
                                            <i className="bi bi-dash-circle"></i>
                                        </button>
                                    </div>
                                )}

                                <div className={"flex"}>
                                    <input placeholder={"Назва"} className={"rounded w-1/2"}
                                           onChange={e => setCharacteristicName(e.target.value)}
                                           value={characteristicName}
                                           type="text"/>
                                    <input placeholder={"Значення"} className={"rounded w-1/2 ml-2"}
                                           onChange={e => setCharacteristicValue(e.target.value)}
                                           value={characteristicValue}
                                           type="text"/>
                                    <button
                                        className={"hover:scale-150 hover:text-yellow-300 duration-200 ml-2"}
                                        onClick={() => {
                                            if (characteristicValue !== "" && characteristicName !== "") {
                                                setCharacteristicValue("");
                                                setCharacteristicName("",);
                                                setCharacteristics([...characteristics, (new ICharacteristic(characteristicName, characteristicValue.split(',')))])
                                            } else {
                                            }
                                        }}>
                                        <i className=" bi bi-plus-circle text-xl"></i>
                                    </button>
                                </div>

                            </div>
                        </div>
                        <div className={"grid grid-cols-2"}>
                            <h3>Знижка(%):</h3>
                            <input value={product.discount}
                                   onChange={(e) => setProduct({...product, "discount": Number(e.target.value)})}
                                   className={"rounded"} defaultValue={0} min={0} max={100} type="number"/>
                        </div>
                        <div className={"grid grid-cols-2"}>
                            <h3>Зображення:</h3>
                            <div>
                                <input onChange={handleFileInputChange}
                                       className={"rounded"} type="file"/>
                                <div className={"grid grid-cols-2 mt-3"}>
                                    {images.map((file, index) => (
                                        <div key={index} className={"border rounded ml-2 border-gray-700 mb-2 "}>
                                            <div className={"flex justify-end mb-3"}>
                                                <button
                                                    className={"absolute hover:text-2xl text-xl hover:text-red-700 duration-300 m-2"}
                                                    onClick={() => setImages(images.filter(x => x !== file))}>
                                                    <i className="bi bi-trash3"></i>
                                                </button>
                                            </div>
                                            <img key={index} src={file.content}
                                                 alt=""/>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                        <div className={"grid grid-cols-2"}>
                            <h3>Відео огляд:</h3>
                            <input value={product.linkYoutube}
                                   onChange={(e) => setProduct({...product, "linkYoutube": e.target.value})}
                                   className={"rounded"} type="text"/>
                        </div>
                        <div className={"grid grid-cols-2"}>
                            <h3>Опис:</h3>
                            <textarea value={product.description}
                                      onChange={(e) => setProduct({...product, "description": e.target.value})}
                                      className={"rounded h-[25vh] break-words"}/>
                        </div>
                        <div className={"grid grid-cols-2"}>
                            <h3>Кількість:</h3>
                            <input value={product.currentCount}
                                   onChange={(e) => setProduct({...product, "currentCount": Number(e.target.value)})}
                                   className={"rounded"} defaultValue={0} min={0} type="number"/>
                        </div>
                        <div className={"grid grid-cols-2"}>
                            <h3>Кількість проданих:</h3>
                            <input value={product.saleCount}
                                   onChange={(e) => setProduct({...product, "saleCount": Number(e.target.value)})}
                                   className={"rounded"} defaultValue={0} min={0} type="number"/>
                        </div>

                        <div className={"grid grid-cols-2"}>
                            <h3>Категорія:</h3>
                            {
                                categories ?
                                    <select value={product.categoryId}
                                            className={"rounded"}
                                            name="" id=""
                                            onChange={(e) => setCurrentCategory((categories.filter(cat => cat.id === Number(e.target.value)))[0])}>
                                        <option disabled={true} value={0}>Виберіть категорію</option>
                                        {categories.map(category => (
                                            <option key={category.id} value={category.id}>{category.name}</option>
                                        ))}
                                    </select>
                                    :
                                    <Spinner className={"m-auto"}
                                             aria-label="Extra large spinner example"
                                             size="xl"
                                    />
                            }

                        </div>


                        <div className={"grid grid-cols-2 "}>
                            <h3>Підкатегорія:</h3>
                            {currentCategory !== undefined && currentCategory?.subcategories.length !== 0
                                ?
                                <select value={product.subcategoryId}
                                        className={"rounded"} name=""
                                        id=""
                                        onChange={(e) => setProduct({
                                            ...product,
                                            "subcategoryId": Number(e.target.value)
                                        })}>
                                    <option disabled={true} value={0}>Виберіть підкатегорію</option>
                                    {currentCategory?.subcategories.map(subcategory => (
                                        <option key={subcategory.id} value={subcategory.id}>{subcategory.name}</option>
                                    ))}
                                </select>
                                :
                                <h3>У цієї категорії немає підкатегорій...</h3>
                            }

                        </div>

                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <button
                        className={"w-full bg-gray-700 border-2 p-3 rounded-lg text-white text-xl border-gray-700 hover:scale-105 hover:bg-white hover:text-gray-700 duration-300"}
                        onClick={() => createProduct()}>
                        Додати
                    </button>

                </Modal.Footer>
            </Modal>
        );
    }
;

export default ModalAddProduct;