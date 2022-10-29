import React, {FC, useState} from 'react';
import {Link} from "react-router-dom";
import ImageComponent from "./ImageComponent";
import {IProduct} from "../models/Models";

interface SearchBarProps {
    products: IProduct[];
}

const SearchBar: FC<SearchBarProps> = ({products}) => {

    const [search, setSearch] = useState({searchText: "", searchActive: false});

    return (
        <div className={"flex ml-5 "}>
            <div className={"relative w-full "}>
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
                        setTimeout(() => setSearch({...search, searchText: e.target.value}), 1000)
                    }}
                    placeholder={"Пошук..."} type="text" className={"w-full  my-2 rounded"}
                />
                {search.searchActive && search.searchText !== "" ?
                    <div
                        className={"z-50 absolute "}>
                        {products?.filter(product => (product.name.toLowerCase().includes(search.searchText.toLowerCase()) && search.searchText.length >= 2) || product.id === Number(search.searchText)).map(product => (
                            <Link key={product.id} to={`/catalog/product/${product.id}`}>
                                <div className={"grid grid-cols-8 p-2 text-sm hover:bg-gray-300 bg-white border border-gray-500 rounded-xl mt-2 duration-100"}>
                                    <>
                                        <div className={"col-span-2 flex justify-center items-center"}>
                                            <ImageComponent parentId={product.id}/>
                                        </div>
                                        <div className={"col-span-6  flex justify-center items-center"}>
                                            <h4>{product.name} - {product.cost}грн</h4>
                                        </div>
                                    </>
                                </div>
                            </Link>
                        ))}
                    </div> : ""}
            </div>
            <button
                onClick={() => {

                }}
                className={"text-3xl p-2 hover:scale-110 duration-300"}>
                <i className="bi bi-search"></i>
            </button>
        </div>
    );
};

export default SearchBar;