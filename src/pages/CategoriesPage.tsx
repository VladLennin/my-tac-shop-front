import React, {FC, useEffect, useState} from 'react';
import {ICategory} from "../models/Models";
import API from "../api"
import {Spinner} from "flowbite-react";
import CategoryCard from "../components/SmallComponents/CategoryCard";
import SubcategoryCard from "../components/SmallComponents/SubcategoryCard";
// import {useAppDispatch, useAppSelector} from "../store/hooks/hooks";

interface CatalogProps {
}

const CategoriesPage: FC<CatalogProps> = () => {

    const [currentCategory, setCurrentCategory] = useState<ICategory>();
    const [categories, setCategories] = useState<ICategory[]>([]);
    // const user = useAppSelector((state) => state.user.value)
    // const dispatch = useAppDispatch()

    useEffect(() => {
        getCategories()
    }, [])


    function getCategories() {
        API.get("/category").then(res => {
            setCategories(res.data);
        }).catch(err => {
            console.log(err)
        })
    }

    return (
       <>
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
                                    <CategoryCard key={category.id} category={category} setCurrentCategory={setCurrentCategory}
                                                  currentCategory={currentCategory}/>
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
                                            <SubcategoryCard key={subcategory.id} subcategory={subcategory}/>
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
       </>
    );
};

export default CategoriesPage;