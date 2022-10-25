import React, {FC} from 'react';
import {Link} from "react-router-dom";
import {ISubcategory} from "../../models/Models";
import ImageComponent from "../ImageComponent";

interface SubcategoryCardProps {
    subcategory: ISubcategory;
}

const SubcategoryCard: FC<SubcategoryCardProps> = ({subcategory}) => {
    return (
        <Link
            to={"/catalog/" + subcategory.id}>
            <div key={subcategory.id}
                 className={"grid justify-items-center text-center hover:scale-110 hover:border-gray-700 rounded border p-2 hover:shadow-lg duration-300"}>
                <ImageComponent parentId={subcategory.id}/>
                <h3>{subcategory.name}</h3>
            </div>
        </Link>
    );
};

export default SubcategoryCard;