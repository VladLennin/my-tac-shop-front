import {Spinner} from 'flowbite-react';
import React, {FC, useEffect, useState} from 'react';
import {
    ICategory,
    ICharacteristic,
    IProduct,
    Picture
} from "../models/Models";
import API from "../api";
import Api from "../api";
import {useAppDispatch, useAppSelector} from "../store/hooks/hooks";
import {useNavigate} from "react-router-dom";

interface EditProductPageProps {
    productId: number;
}

const EditProductPage: FC<EditProductPageProps> = ({productId}) => {

        const navigate = useNavigate();

        const [categories, setCategories] = useState<ICategory[]>([]);

        const [characteristicName, setCharacteristicName] = useState<string>("");
        const [characteristicValue, setCharacteristicValue] = useState<string>("");
        const [currentCategory, setCurrentCategory] = useState<ICategory>();
        const [pictures, setPictures] = useState<Picture[]>([]);
        const [product, setProduct] = useState<IProduct>(
            new IProduct(
                0, 0, "", 0,
                [], 0, [], [],
                "", "", 0, 0, 0
            ));
        const user = useAppSelector((state) => state.user.value)
        const dispatch = useAppDispatch()

        function getProduct() {
            Api.get("/product/" + productId).then(res => {
                const prod: IProduct = res.data;
                setProduct(prod);
            }).catch(err => {
                console.log(err)
            })
        }

        function getCategories() {
            API.get("/category").then(res => {
                const tempCategories: ICategory[] = res.data;
                setCategories(tempCategories)
                setCurrentCategory(categories.filter(x => x.id === product.categoryId)[0])
            }).catch(err => {
                console.log(err)
            })
        }

        function getImages(parentId?: number) {
            API.get("/product/" + parentId + "/images").then(res => {
                const tempPictures: Picture[] = res.data;
                setPictures(tempPictures)
            }).catch(err => {
                console.log(err)
            })
        }

        useEffect(() => {
            getProduct()
            getCategories()
            getImages(productId);
        }, [])

        function saveChanges() {
            product.images = pictures
            if (
                product.cost !== 0 &&
                product.currentCount !== 0 &&
                product.description !== "" &&
                product.linkYoutube !== "" &&
                product.name !== "" &&
                product.characteristics.length !== 0 &&
                product.subcategoryId !== 0
            ) {
                console.log(product)
                Api.put("/product", product).then(res => {
                    console.log(res)
                    navigate("/edit-products")
                }).catch(err => {
                    console.log(err)
                })
            } else {
                alert("Введіть усі поля!")
            }

        }


        useEffect(() => {
            setCurrentCategory(categories.filter(x => x.id === product.categoryId)[0])
        }, [categories])

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
                    if (pictures.filter(img => img.content === String(result)).length === 0) {
                        setPictures([...pictures, new Picture(String(result))]);
                    }
                    e.target.files = [];
                })
                .catch(err => {
                    console.log(err);
                });
        }


        return (
            <>
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
                            {product.characteristics &&
                                product.characteristics.map((characteristic, index) =>
                                    <div key={index}
                                         className={"flex justify-between mb-3 p-3 border rounded border-b-gray-500"}>
                                        <h3>{index + 1}.{characteristic.name}</h3>
                                        <div>
                                            {characteristic.values.map((value, index) =>
                                                <div key={index} className={"text-end"}>{value}</div>
                                            )}
                                        </div>
                                        <button className={"hover:scale-150 duration-200  hover:text-red-700"}
                                                onClick={() => {
                                                    setProduct({
                                                        ...product,
                                                        characteristics: product.characteristics.filter(ch => ch !== characteristic)
                                                    })
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
                                            setProduct({
                                                ...product,
                                                characteristics: [...product.characteristics, new ICharacteristic(characteristicName, characteristicValue.split(','))]
                                            })
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
                                {pictures?.map((img, index) => (
                                    <div key={index} className={"border rounded ml-2 border-gray-700 mb-2 "}>
                                        <div className={"flex justify-end mb-3"}>
                                            <button
                                                className={"absolute hover:text-2xl text-xl hover:text-red-700 duration-300 m-2"}
                                                onClick={() => {
                                                    setPictures(pictures.filter(x => x.content !== img.content))
                                                }}>
                                                <i className="bi bi-trash3"></i>
                                            </button>
                                        </div>
                                        <img key={index} src={img.content}
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
                            categories.length !== 0 ?
                                <select value={currentCategory?.id}
                                        className={"rounded"}
                                        onChange={(e) => {
                                            setCurrentCategory((categories.filter(cat => cat.id === Number(e.target.value)))[0]);
                                            setProduct({...product, categoryId: Number(e.target.value)})
                                            setProduct({
                                                ...product,
                                                subcategoryId: 0
                                            })
                                        }
                                        }>
                                    <option disabled={true} value={0}>Виберіть категорію</option>
                                    {categories.map((category, index) => (
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
                        {currentCategory?.subcategories.length !== 0 ?
                            <select value={product.subcategoryId}
                                    className={"rounded"}
                                    name="" id=""
                                    onChange={(e) => {
                                        setProduct({...product, subcategoryId: Number(e.target.value)})
                                    }
                                    }>
                                <option disabled={true} value={0}>Виберіть виберіть підкатегорію</option>
                                {currentCategory?.subcategories.map(subcat => (
                                    <option key={subcat.id} value={subcat.id}>{subcat.name}</option>
                                ))}
                            </select>
                            :
                            <p>У цій категорії немає підкатегорій</p>
                        }


                    </div>
                </div>
                <div className={"flex justify-center mt-5"}>

                    <button
                        onClick={() => {
                            saveChanges()
                        }}
                        className={"font-bold text-custom border-2 border-blue-600 hover:border-yellow-300 duration-200 hover:scale-110 px-5 py-3 rounded-md"}>
                        Зберегти зміни
                    </button>
                </div>

            </>
        );
    }
;

export default EditProductPage;