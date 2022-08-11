import React, {FC, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {ISubcategory, Picture} from "../../models/Models";
import API from "../../api";

interface SubcategoryCardProps{
    subcategory:ISubcategory;
}

const SubcategoryCard:FC<SubcategoryCardProps> = ({subcategory}) => {

    const [picture, setPicture] = useState<Picture>();

    function getImage(parentId?: number) {
        API.get("image-parent/" + parentId).then(res => {
            const img: Picture = res.data[0];
            setPicture(img);
            console.log(img)
        }).catch(err => {
            console.log(err)
        })
    }

    useEffect(()=>{
        getImage(subcategory.id);
    },[])

    return (
        <Link
            to={"/catalog/" + subcategory.id}>
            <div key={subcategory.id}
                 className={"grid justify-items-center text-center hover:scale-110 hover:border-gray-700 rounded border p-2 hover:shadow-lg duration-300"}>

                <img className={""} src={picture?.content} alt=""/>
                <h3>{subcategory.name}</h3>
            </div>
        </Link>
    );
};

export default SubcategoryCard;