import React, {FC, useEffect, useState} from 'react';
import {IProduct, Picture} from "../../models/Models";
import {Carousel, Spinner} from "flowbite-react";
import API from "../../api"
import RightArrowSlider from "./RightArrowSlider";
import LeftArrowSlider from "./LeftArrowSlider";

interface ProductSliderProps {
    product: IProduct;
    indicators: boolean;
    isCatalog: boolean;
}

const ProductSlider: FC<ProductSliderProps> = ({product, isCatalog}) => {

    const [pictures, setPictures] = useState<Picture[]>([]);

    function getImages(parentId: number) {
        API.get("/product/" + parentId + "/images").then(res => {
            const tempPictures: Picture[] = res.data;
            setPictures(tempPictures);
        }).catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        getImages(product?.id);
    }, [])

    return (
        <div className={(isCatalog ? "h-56 p-6" : "h-[80vh] p-10")}>
            <Carousel leftControl={<LeftArrowSlider isCatalog={isCatalog}/>}
                      rightControl={<RightArrowSlider isCatalog={isCatalog}/>}
                      slide={false}>
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
                            <img key={img.parentId} className={(isCatalog ? "" : "")} src={img.content} alt="..."/>
                        )

                }

            </Carousel>
        </div>
    );
};

export default ProductSlider;