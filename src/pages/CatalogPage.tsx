import React, {FC, useEffect, useState} from 'react';
import Wrapper from "../components/main-blocks/Wrapper";
import {Link} from "react-router-dom";
import {IProduct, IUser} from "../models/Models";
import CostBuyBtn from "../components/ProductPageBlocks/CostBuyBtn";
import API from "../api";
import ProductSlider from "../components/ProductPageBlocks/ProductSlider";
import {serialize} from "v8";

interface SubcategoryPageProps {
    subcategoryId?: string;
    user: IUser;
}

const CatalogPage: FC<SubcategoryPageProps> = ({subcategoryId, user}) => {

    const [products, setProducts] = useState<IProduct[]>([]);
    const [search, setSearch] = useState({searchText: "", searchActive: false});




    function getProducts() {
        API.get("/product/subcategory/" + subcategoryId)
            .then((res: any) => {
                let products: IProduct[] = res.data.content;
                console.log(products)
                setProducts(products.filter(product => product.name.toLowerCase().includes(search.searchText.toLowerCase())))
            })
    }

    useEffect(() => {
        getProducts()
    }, [])
    return (
        <Wrapper user={user}>
            <div className={"w-full border-2 border-gray-700 rounded-lg mb-5 grid grid-cols-3 gap-12 pr-5"}>
                <div className={"grid grid-cols-2"}>
                    <button className={"hover:scale-110 duration-300 text-gray-400 text-sm font-light"}>Дешевше</button>
                    <button className={"hover:scale-110 duration-300 text-gray-400 text-sm font-light"}>Дорожче</button>
                    <button className={"hover:scale-110 duration-300 text-gray-400 text-sm font-light"}>Новіщі</button>
                    <button className={"hover:scale-110 duration-300 text-gray-400 text-sm font-light"}>Популярніщі
                    </button>
                </div>
                <div className={"flex justify-start items-center"}>
                    <select defaultValue={-1} className={"w-1/2 text-sm text-gray-400 rounded text-custom"}>
                        <option value={-1}>Кількість на сторінці</option>
                        <option value="">12</option>
                        <option value="">24</option>
                        <option value="">36</option>

                    </select>
                </div>
                <div className={"flex"}>
                    <div className={"relative w-full"}>
                        <input
                            onBlur={() => {
                                setTimeout(() => {
                                    setSearch({...search, searchActive: false})
                                }, 100)
                            }}
                            onFocus={() => {
                                setSearch({...search, searchActive: true})
                            }}

                            onChange={(e) => {
                                setTimeout(() => setSearch({...search, searchText: e.target.value}), 250)
                            }}
                            placeholder={"Пошук..."} type="text" className={"w-full  my-2 rounded"}
                        />
                        {search.searchActive && search.searchText.length > 3 ? <div
                            className={"absolute bg-white w-full rounded border"}>
                            {products.filter(product => product.name.toLowerCase().includes(search.searchText.toLowerCase()) && search.searchText.length > 3).map(product => (
                                <Link to={`/catalog/product/${product.id}`}>
                                    <div className={" p-2 text-sm hover:bg-gray-300 duration-100"}>
                                        {product.name} - {product.cost}грн
                                    </div>
                                </Link>
                            ))}
                        </div> : ""}
                    </div>
                    <button
                        onClick={() => {
                            getProducts()
                        }}
                        className={"text-3xl p-2 hover:scale-110 duration-300"}>
                        <i className="bi bi-search"></i>
                    </button>
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