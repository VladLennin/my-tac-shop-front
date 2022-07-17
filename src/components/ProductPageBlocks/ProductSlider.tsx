import React, {FC, useEffect, useState} from 'react';
import {IProduct, Picture} from "../../Models/Models";
import {Carousel, Spinner} from "flowbite-react";
import API from "../../api"

interface ProductSliderProps {
    product?: IProduct;
    indicators: boolean;
    isCatalog: boolean;
}

const ProductSlider: FC<ProductSliderProps> = ({product, indicators, isCatalog}) => {

    const [pictures, setPictures] = useState<Picture[]>([]);

    function getImages(parentId?: number) {
        API.get("/product/" + parentId + "/images").then(res => {
            const tempPictures:Picture[] = res.data;
            setPictures(tempPictures);
        }).catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        getImages(product?.id);
    }, [])

    return (
        <div className={(isCatalog ? "h-40" : "h-96 ")}>
            <Carousel slide={false}>
                {
                    pictures.length === 0
                        ?
                        <div className={"flex flex-col"}>
                            <Spinner className={"m-auto"}
                                     aria-label="Extra large spinner example"
                                     size="xl"
                            />
                        </div>
                        :
                            pictures.map(img =>
                                <img className={(isCatalog ? "" : "p-10")} src={img.content} alt="..."/>
                            )
                }

            </Carousel>
        </div>
    );
};

export default ProductSlider;