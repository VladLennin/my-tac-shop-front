import React, {FC} from 'react';
import {IProduct} from "../../Models/Models";
import {Carousel} from "flowbite-react";

interface ProductSliderProps {
    product?: IProduct;
    indicators: boolean;
    isCatalog: boolean;
}

const ProductSlider: FC<ProductSliderProps> = ({product, indicators, isCatalog}) => {

    return (
        <div className={(isCatalog ? "h-40" : "h-96 ")}>
            <Carousel slide={false}>
                <img className={(isCatalog ? "" : "p-10")} src={product?.images[0]?.content} alt="..."/>
                {product?.images.slice(1).map(img =>
                    <img className={(isCatalog ? "" : "p-10")} src={img?.content} alt="..."/>
                )}
            </Carousel>
        </div>
    );
};

export default ProductSlider;