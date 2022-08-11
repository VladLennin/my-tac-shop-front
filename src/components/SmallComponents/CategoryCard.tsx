import React, {FC, useEffect, useState} from 'react';
import {ICategory, Picture} from "../../models/Models";
import API from "../../api";

interface CategoryCardProps {
    category: ICategory;
    setCurrentCategory: (category: ICategory) => void;
    currentCategory?: ICategory;
}

const CategoryCard: FC<CategoryCardProps> = ({category, setCurrentCategory, currentCategory}) => {

    const [picture, setPicture] = useState<Picture>();

    function getImage(parentId?: number) {
        API.get("image-parent/" + parentId).then(res => {
            const img: Picture = res.data[0];
            setPicture(img);
        }).catch(err => {
            console.log(err)
        })
    }

    useEffect(()=>{
        getImage(category.id)
    },[])

    return (
        <div key={category.id} onClick={() => setCurrentCategory(category)}
             className={(currentCategory === category ? "scale-110   shadow-lg bg-gray-300" : "") + " grid justify-items-center hover:scale-110 hover:border-gray-700 rounded border p-2 hover:shadow-lg duration-300 cursor-pointer"}>
            <img src={picture?.content} alt=""/>
            <h3 className={" text-custom"}>{category.name}</h3>
        </div>
    );
};

export default CategoryCard;