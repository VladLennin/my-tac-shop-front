import React, {FC, useEffect, useState} from 'react';
import {Picture} from "../models/Models";
import API from "../api";
import {Spinner} from "flowbite-react";

interface ImageProps {
    parentId: number;
    className?: string;
    index?: number;
}

const ImageComponent: FC<ImageProps> = ({parentId, className, index}) => {

    const [pictures, setPictures] = useState<Picture[]>([]);

    function getImages(parentId?: number) {
        API.get("/product/" + parentId + "/images").then(res => {
            const tempPictures: Picture[] = res.data;
            setPictures(tempPictures);
        }).catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        getImages(parentId)
    }, [])


    return (
        pictures.length === 0
            ?
            <div className={"flex justify-center items-center"}>
                <Spinner size={"xl"}/>
            </div>
            :
            <img src={pictures[0].content} className={className} alt=""/>
    );


};

export default ImageComponent;