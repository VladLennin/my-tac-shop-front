import React, {FC, useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {IProduct} from "../models/Models";
import API from "../api";
import ProductCard from "../components/SmallComponents/ProductCard";
// import {useAppDispatch, useAppSelector} from "../store/hooks/hooks";
import SearchBar from "../components/SearchBar";
import {useAppSelector} from "../store/hooks/hooks";

interface SubcategoryPageProps {
}

const CatalogPage: FC<SubcategoryPageProps> = ({}) => {

    const [products, setProducts] = useState<IProduct[]>([]);
    const subcategoryId:Number = Number(useParams().id);
    const flag1 = useAppSelector((state) => state.menu.value1)
    // const user = useAppSelector((state) => state.user.value)
    // const dispatch = useAppDispatch()


    function getProducts() {
        API.get("/product/subcategory/" + subcategoryId)
            .then((res: any) => {
                let products: IProduct[] = res.data.content;
                setProducts(products)
                // products.filter(product => product.name.toLowerCase().includes(search.searchText.toLowerCase()))
            })
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <>
            <div
                className={"w-full border-2 border-gray-700 rounded-lg mb-5 grid xl:grid-cols-3 grid-cols-1  gap-12 pr-5"}>
                <div className={"grid grid-cols-2 xl:mt-0 mt-5"}>
                    <button className={"hover:scale-110 duration-300 text-gray-400 text-sm font-light"}>Дешевше</button>
                    <button className={"hover:scale-110 duration-300 text-gray-400 text-sm font-light"}>Дорожче</button>
                    <button className={"hover:scale-110 duration-300 text-gray-400 text-sm font-light"}>Новіщі</button>
                    <button className={"hover:scale-110 duration-300 text-gray-400 text-sm font-light"}>Популярніщі
                    </button>
                </div>
                <div className={"flex xl:justify-start justify-center items-center "}>
                    <select defaultValue={-1} className={"w-1/2 text-sm text-gray-400 rounded text-custom"}>
                        <option value={-1}>Кількість на сторінці</option>
                        <option value="">12</option>
                        <option value="">24</option>
                        <option value="">36</option>

                    </select>
                </div>
                <SearchBar setProducts={setProducts} products={products}/>
            </div>

            <div className={"grid   gap-4" + (flag1 ? " grid-cols-5" : " grid-cols-6")}>
                {products?.length !== 0
                    ?
                    (products.map(product =>
                        <ProductCard key={product.id} product={product}/>
                    ))
                    :
                    ""
                }
            </div>
        </>
    );
};

export default CatalogPage;