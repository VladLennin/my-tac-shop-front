import React, {FC, useEffect, useState} from 'react';
import Wrapper from "../components/main-blocks/Wrapper";
import {Link} from "react-router-dom";
import {IProduct, IUser} from "../models/Models";
import CostBuyBtn from "../components/ProductPageBlocks/CostBuyBtn";
import API from "../api";
import ProductSlider from "../components/ProductPageBlocks/ProductSlider";

interface SubcategoryPageProps {
    subcategoryId?: string;
    user: IUser;
}

const CatalogPage: FC<SubcategoryPageProps> = ({subcategoryId, user}) => {

    const [products, setProducts] = useState<IProduct[]>([]);


    useEffect(() => {
        API.get("/product/subcategory/" + subcategoryId)
            .then((res: any) => {
                let products: IProduct[] = res.data.content;
                console.log(products)
                setProducts(products);
            })
    }, [])
    return (
        <Wrapper user={user}>
            <div className={"w-full border-2 border-gray-700 rounded-lg mb-4 grid grid-cols-2 gap-12"}>
                <div className={"grid grid-cols-3 gap-2 p-2"}>

                    <select name="" id="" className={"border rounded"}>
                        <option defaultChecked={true}></option>
                        <option value="">
                            <button
                                className={"hover:scale-110 hover:bg-gray-300 hover:text-gray-700 duration-300  bg-gray-700 rounded border border-white text-white m-1"}>Filter
                            </button>
                        </option>

                        <option value="">
                            <button
                                className={"hover:scale-110 hover:bg-gray-300 hover:text-gray-700 duration-300  bg-gray-700 rounded border border-white text-white m-1"}>Filter
                            </button>
                        </option>

                        <option value="">
                            <button
                                className={"hover:scale-110 hover:bg-gray-300 hover:text-gray-700 duration-300  bg-gray-700 rounded border border-white text-white m-1"}>Filter
                            </button>
                        </option>
                        <option value="">
                            <button
                                className={"hover:scale-110 hover:bg-gray-300 hover:text-gray-700 duration-300  bg-gray-700 rounded border border-white text-white m-1"}>Filter
                            </button>
                        </option>
                        <option value="">
                            <button
                                className={"hover:scale-110 hover:bg-gray-300 hover:text-gray-700 duration-300  bg-gray-700 rounded border border-white text-white m-1"}>Filter
                            </button>
                        </option>
                        <option value="">
                            <button
                                className={"hover:scale-110 hover:bg-gray-300 hover:text-gray-700 duration-300  bg-gray-700 rounded border border-white text-white m-1"}>Filter
                            </button>
                        </option>
                    </select>

                </div>
                <div className={"grid grid-cols-3 gap-2"}>

                </div>
            </div>

            <div className={"grid xl:grid-cols-6 grid-cols-2 gap-4"}>
                {products?.length !== 0
                    ?
                    (products.map(product =>
                        <div className={"border text-center rounded hover:shadow-xl hover:scale-110 duration-300 "}>
                            <ProductSlider isCatalog={true} product={product} indicators={false}/>
                            <Link key={product.id} to={`/catalog/product/${product.id}`}>
                                <h3 className={"text-custom my-2"}>{product.name}</h3>
                                <CostBuyBtn product={product} inline={false}/>
                            </Link>
                        </div>
                    ))
                    :
                    ""
                }
            </div>
        </Wrapper>
    );
};

export default CatalogPage;