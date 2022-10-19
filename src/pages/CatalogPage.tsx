import React, {FC, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {IProduct, IUser, Picture} from "../models/Models";
import API from "../api";
import ProductCard from "../components/ProductCard";
import {useAppDispatch, useAppSelector} from "../store/hooks/hooks";

interface SubcategoryPageProps {
    subcategoryId?: string;
}

const CatalogPage: FC<SubcategoryPageProps> = ({subcategoryId}) => {

    const [products, setProducts] = useState<IProduct[]>([]);
    const [search, setSearch] = useState({searchText: "", searchActive: false});
    const user = useAppSelector((state) => state.user.value)
    const dispatch = useAppDispatch()


    function getProducts() {
        API.get("/product/subcategory/" + subcategoryId)
            .then((res: any) => {
                let products: IProduct[] = res.data.content;
                setProducts(products.filter(product => product.name.toLowerCase().includes(search.searchText.toLowerCase())))
            })
    }

    const [searchPictures, setSearchPictures] = useState<Picture[]>([])

    function getImage(productId: number) {
        API.get("/product/" + productId + "/images").then(res => {
            setSearchPictures([...searchPictures, res.data[0]])
        }).catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        getProducts()
    }, [])
    return (
        <>
            <div className={"w-full border-2 border-gray-700 rounded-lg mb-5 grid xl:grid-cols-3 grid-cols-1  gap-12 pr-5"}>
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
                                setTimeout(() => setSearch({...search, searchText: e.target.value}), 250)
                            }}
                            placeholder={"Пошук..."} type="text" className={"w-full  my-2 rounded"}
                        />
                        {search.searchActive && search.searchText.length > 3 ? <div
                            className={"z-50 absolute bg-white rounded border "}>
                            {products.filter(product => product.name.toLowerCase().includes(search.searchText.toLowerCase()) && search.searchText.length > 2).map((product, index) => (
                                <Link to={`/catalog/product/${product.id}`}>
                                    <div className={"grid grid-cols-8 p-2 text-sm hover:bg-gray-300 duration-100"}>
                                        <>
                                            {getImage(product.id)}
                                           <div className={"col-span-2 flex justify-center items-center"}>
                                               <img src={searchPictures[index]?.content} alt=""/>
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
                        <ProductCard product={product}/>
                    ))
                    :
                    ""
                }
            </div>
        </>
    );
};

export default CatalogPage;