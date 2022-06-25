import React, {FC, useEffect, useState} from 'react';
import Wrapper from "../components/main-blocks/Wrapper";
import {Link} from "react-router-dom";
import {ICategory} from "../Models/Models";
import API from "../api"

interface CatalogProps {

}

const CategoriesPage: FC<CatalogProps> = () => {

    const [currentCategory, setCurrentCategory] = useState<ICategory>();
    const [categories, setCategories] = useState<ICategory[]>()
    useEffect(() => {
        getCategories()
    }, [])

    async function getCategories() {
        const data = (await API.get("/category")).data
        console.log(data)
        setCategories(data);
    }


    return (

        <Wrapper>
            <div className={"text-center"}>
                <h3 className={" text-custom text-3xl xl:text-5xl xl:mb-5 mb-3"}>Каталог</h3>
                <div className={"grid grid-col-1 xl:grid-cols-2 gap-4 "}>
                    <div>
                        <h3 className={" text-custom  xl:text-3xl text-xl mb-1"}>Категорії</h3>
                        <div
                            className={"grid xl:grid-cols-4 grid-cols-1 gap-4 border-2 p-4 border-gray-700 rounded-lg"}>
                            {categories?.map(category =>
                                <div key={category.id} onClick={() => setCurrentCategory(category)}
                                     className={(currentCategory === category ? "scale-110   shadow-lg bg-gray-300" : "") + " grid justify-items-center hover:scale-110 hover:border-gray-700 rounded border p-2 hover:shadow-lg duration-300 cursor-pointer"}>
                                    <img src={category.image?.content} alt=""/>
                                    <h3 className={" text-custom"}>{category.name}</h3>
                                </div>
                            )}
                        </div>
                    </div>
                    <div>
                        <h3 className={" text-custom text-xl xl:text-3xl mb-1"}>Підкатегорії</h3>
                        <div
                            className={(currentCategory !== undefined ? "grid grid-col-1 xl:grid-cols-4 gap-4" : "") + " border-2 p-4 border-gray-700 rounded-lg "}>
                            {currentCategory === undefined
                                ?
                                <div className={"text-custom text-xl text-gray-400 "}>Виберіть категорію</div>
                                :
                                (currentCategory?.subcategories.map(subcategory =>

                                    <div key={subcategory.id}
                                         className={"grid justify-items-center text-center hover:scale-110 hover:border-gray-700 rounded border p-2 hover:shadow-lg duration-300"}>
                                        <Link
                                            to={"/catalog/" + subcategory.id}>
                                            <img className={""} src={subcategory.image?.content} alt=""/>
                                            <h3>{subcategory.name}</h3>
                                        </Link>
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>

    );
};

export default CategoriesPage;