import React, {FC, useEffect, useState} from 'react';
import Wrapper from "../components/main-blocks/Wrapper";
import {Link} from "react-router-dom";
import {ICategory, IUser, Picture} from "../Models/Models";
import API from "../api"
import {Spinner} from "flowbite-react";

interface CatalogProps {
    user: IUser;
}

const CategoriesPage: FC<CatalogProps> = ({user}) => {

    const [currentCategory, setCurrentCategory] = useState<ICategory>();

    const [categories, setCategories] = useState<ICategory[]>([]);

    function getImage(parentId?: number) : string {
        API.get("image-parent/" + parentId).then(res => {
            const img:Picture = res.data[0];
            console.log(img)
            return img.content;
        }).catch(err => {
            console.log(err)
        })
        return " ";
    }

    useEffect(() => {
        getCategories()
    }, [])


     function getCategories() {
        API.get("/category").then(res=>{
            setCategories(res.data);
        }).catch(err=>{
            console.log(err)
        })
    }

    return (
        <Wrapper user={user}>
            <div className={"text-center"}>
                <h3 className={" text-custom text-3xl xl:text-5xl xl:mb-5 mb-3"}>Каталог</h3>
                <div className={"grid grid-col-1 xl:grid-cols-2 gap-4 "}>
                    <div>
                        <h3 className={" text-custom  xl:text-3xl text-xl mb-1"}>Категорії</h3>
                        <div
                            className={(categories.length === 0 ? "justify-center flex" : "") + "grid xl:grid-cols-4 grid-cols-1 gap-4 border-2 p-4 border-gray-700 rounded-lg"}>
                            {categories?.length !== 0
                                ?
                                (categories?.map(category =>
                                    <div key={category.id} onClick={() => setCurrentCategory(category)}
                                         className={(currentCategory === category ? "scale-110   shadow-lg bg-gray-300" : "") + " grid justify-items-center hover:scale-110 hover:border-gray-700 rounded border p-2 hover:shadow-lg duration-300 cursor-pointer"}>
                                        <img src={getImage(category.id)} alt=""/>
                                        <h3 className={" text-custom"}>{category.name}</h3>
                                    </div>
                                ))
                                :
                                <Spinner className={"m-auto"}
                                         aria-label="Extra large spinner example"
                                         size="xl"
                                />
                            }

                        </div>
                    </div>
                    <div>
                        <h3 className={" text-custom text-xl xl:text-3xl mb-1"}>Підкатегорії</h3>
                        {
                            currentCategory?.subcategories.length !== 0
                                ?
                                <div
                                    className={(currentCategory !== undefined ? "grid grid-col-1 xl:grid-cols-4 gap-4" : "") + " border-2 p-4 border-gray-700 rounded-lg "}>
                                    {currentCategory === undefined
                                        ?
                                        <div className={"text-custom text-xl text-gray-400 "}>Виберіть категорію</div>
                                        :
                                        (currentCategory?.subcategories.map(subcategory =>
                                            <Link
                                                to={"/catalog/" + subcategory.id}>
                                                <div key={subcategory.id}
                                                     className={"grid justify-items-center text-center hover:scale-110 hover:border-gray-700 rounded border p-2 hover:shadow-lg duration-300"}>

                                                    <img className={""} src={ getImage(subcategory.id)} alt=""/>
                                                    <h3>{subcategory.name}</h3>
                                                </div>
                                            </Link>
                                        ))
                                    }

                                </div>
                                :
                                <div className={"border-2 p-4 border-gray-700 rounded-lg"}>
                                    <h3 className={"text-gray-500"}>У даній категорії поки що нічого немає(</h3>

                                </div>
                        }

                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default CategoriesPage;