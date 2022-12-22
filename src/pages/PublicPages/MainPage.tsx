import React, {FC, useContext, useEffect, useState} from 'react';
import SearchBar from "../../components/SearchBar";
import {IProduct} from "../../models/Models";
import ProductCard from "../../components/SmallComponents/ProductCard";
import ProductService from "../../services/ProductService";
import {Context} from "../../index";

const MainPage: FC = () => {
    const {menuStore} = useContext(Context)

    const [products, setProducts] = useState<IProduct[]>([]);

    async function getProducts() {
        const response = await ProductService.fetchProducts()
        setProducts(response.data);
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
                className={"h-[94vh] border-2 border-gray-700 rounded-xl grid  gap-5 p-5" + (menuStore.flag1 ? " grid-cols-4" : " grid-cols-5")}>
                {products.map(product =>
                    <ProductCard key={product.id} product={product}/>
                )}
            </div>
        </>
    );
};

export default MainPage;