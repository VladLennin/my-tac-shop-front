import React, {FC, useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../store/hooks/hooks";
import SearchBar from "../components/SearchBar";
import {IProduct} from "../models/Models";
import API from "../api";
import ProductCard from "../components/SmallComponents/ProductCard";

const MainPage: FC = () => {
    const user = useAppSelector((state) => state.user.value)
    const flag1 = useAppSelector((state) => state.menu.value1)
    const dispatch = useAppDispatch()

    const [products, setProducts] = useState<IProduct[]>([]);

    function getProducts() {
        API.get("/product")
            .then((res: any) => {
                let products: IProduct[] = res.data;
                setProducts(products)
            }).catch(error => {
            console.log(error)
        })
    }

    useEffect(() => {
        getProducts()
    }, [])


    return (
        <>
            <div
                className={"w-full border-2 border-gray-700 rounded-lg mb-5 grid grid-cols-2 pr-5"}>
                <div>

                </div>
                <SearchBar setProducts={setProducts} products={products}/>
            </div>
            <div
                className={"h-[94vh] border-2 border-gray-700 rounded-xl grid  gap-5 p-5" + (flag1 ? " grid-cols-4" : " grid-cols-5")}>
                {products.map(product =>
                    <ProductCard key={product.id} product={product}/>
                )}
            </div>
        </>
    );
};

export default MainPage;