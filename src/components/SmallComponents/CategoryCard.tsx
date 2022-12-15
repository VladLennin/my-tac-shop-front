import React, {FC} from 'react';
import {ICategory} from "../../models/Models";
import ImageComponent from "../ImageComponent";

interface CategoryCardProps {
    category: ICategory;
    setCurrentCategory: (category: ICategory) => void;
    currentCategory?: ICategory;
}

const CategoryCard: FC<CategoryCardProps> = ({category, setCurrentCategory, currentCategory}) => {

    return (
        <div key={category.id} onClick={() => setCurrentCategory(category)}
             className={(currentCategory === category ? "scale-110   shadow-lg bg-gray-300" : "") + " h-full grid justify-items-center hover:scale-110 hover:border-gray-700 rounded border p-2 hover:shadow-lg duration-300 cursor-pointer"}>
            <ImageComponent parentId={category.id}/>
            <h3 className={" text-custom"}>{category.name}</h3>
        </div>
    );
};

export default CategoryCard;