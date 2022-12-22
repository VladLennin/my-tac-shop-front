import React, {FC, useEffect, useState} from 'react';
import {IProduct} from "../../models/Models";
import Api from "../../http";
import {Link} from "react-router-dom";
interface EditProductsProps {

}

const AllProductsPage: FC<EditProductsProps> = () => {

    const [products, setProducts] = useState<IProduct[]>([])
    const [sortFlags, setSortFlags] = useState([false, false, false, false, false, false])


    function getProducts() {
        Api.get("/product",{
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem("token")
            }
        }).then(res => {
            const prod: IProduct[] = res.data;
            setProducts(prod)
        }).catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        getProducts()
    }, [])
    return (
        <>
            <div className={"grid grid-cols-6"}>
                <div className={"text-center"}>
                    <button onClick={() => {
                        sortFlags[0] = !sortFlags[0];
                        setSortFlags(sortFlags)
                        if (sortFlags[0]) {
                            setProducts([...products].sort(function (prod1, prod2) {
                                return prod1.name.localeCompare(prod2.name)
                            }))
                        } else {
                            setProducts([...products].sort(function (prod1, prod2) {
                                return prod2.name.localeCompare(prod1.name)
                            }))
                        }
                        console.log(products)
                    }}>Найменування
                    </button>
                </div>
                <div className={"text-center"}>
                    <button onClick={() => {
                        sortFlags[1] = !sortFlags[1];
                        setSortFlags(sortFlags)
                        if (sortFlags[1]) {
                            setProducts([...products].sort(function (prod1, prod2) {
                                return prod1.cost - prod2.cost
                            }))
                        } else {
                            setProducts([...products].sort(function (prod1, prod2) {
                                return prod2.cost - prod1.cost
                            }))
                        }
                        console.log(products)
                    }}>Ціна
                    </button>
                </div>
                <div className={"text-center"}>
                    <button onClick={() => {
                        sortFlags[2] = !sortFlags[2];
                        setSortFlags(sortFlags)
                        if (sortFlags[2]) {
                            setProducts([...products].sort(function (prod1, prod2) {
                                return prod1.categoryId - prod2.categoryId
                            }))
                        } else {
                            setProducts([...products].sort(function (prod1, prod2) {
                                return prod2.categoryId - prod1.categoryId
                            }))
                        }
                        console.log(products)

                    }}>Категорія
                    </button>
                </div>
                <div className={"text-center"}>
                    <button onClick={() => {
                        sortFlags[3] = !sortFlags[3];
                        setSortFlags(sortFlags)
                        if (sortFlags[3]) {
                            setProducts([...products].sort(function (prod1, prod2) {
                                return prod1.subcategoryId - prod2.subcategoryId
                            }))
                        } else {
                            setProducts([...products].sort(function (prod1, prod2) {
                                return prod2.subcategoryId - prod1.subcategoryId
                            }))
                        }
                        console.log(products)

                    }}>Підкатегорія
                    </button>
                </div>
                <div className={"text-center"}>
                    <button onClick={() => {
                        sortFlags[4] = !sortFlags[4];
                        setSortFlags(sortFlags)
                        if (sortFlags[4]) {
                            setProducts([...products].sort(function (prod1, prod2) {
                                return prod1.currentCount - prod2.currentCount
                            }))
                        } else {
                            setProducts([...products].sort(function (prod1, prod2) {
                                return prod2.currentCount - prod1.currentCount
                            }))
                        }
                        console.log(products)
                    }}>Кількість
                    </button>
                </div>
                <div className={"text-center"}>
                    <button onClick={() => {
                        sortFlags[5] = !sortFlags[5];
                        setSortFlags(sortFlags)
                        if (sortFlags[5]) {
                            setProducts([...products].sort(function (prod1, prod2) {
                                return prod1.id - prod2.id
                            }))
                        } else {
                            setProducts([...products].sort(function (prod1, prod2) {
                                return prod2.id - prod1.id
                            }))
                        }
                        console.log(products)
                    }}>ID
                    </button>
                </div>
            </div>
            <hr className={"my-2"}/>
            {products.map((product, index) => (
                <Link key={index} to={"/edit-products/" + product.id}>
                    <div className={"grid grid-cols-6 gap-6 text-custom mt-2"}>

                        <div className={"text-left"}>
                            {index + 1}. {product.name}
                        </div>
                        <div className={"text-center"}>
                            {product.cost}
                        </div>
                        <div className={"text-center"}>
                            {product.categoryId}
                        </div>
                        <div className={"text-center"}>
                            {product.subcategoryId}
                        </div>
                        <div className={"text-center"}>
                            {product.currentCount}
                        </div>
                        <div className={"text-center"}>
                            {product.id}
                        </div>
                    </div>
                </Link>

            ))}
        </>
    );
};

export default AllProductsPage;