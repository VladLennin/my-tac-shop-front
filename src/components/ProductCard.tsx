import React, {FC} from 'react';
import ProductSlider from "./ProductPageBlocks/ProductSlider";
import {Link} from "react-router-dom";
import CostBuyBtn from "./ProductPageBlocks/CostBuyBtn";
import {IProduct} from "../models/Models";

interface ProductCardProps{
    product:IProduct;
}

const ProductCard:FC<ProductCardProps> = ({product}) => {
    return (
        <div className={"border text-center rounded hover:shadow-xl hover:scale-110 duration-300 "}>
            <ProductSlider isCatalog={true} product={product} indicators={false}/>
            <Link key={product.id} to={`/catalog/product/${product.id}`}>
                <h3 className={"text-custom my-2"}>{product.name}</h3>
                <CostBuyBtn product={product} inline={false}/>
            </Link>
        </div>
    );
};

export default ProductCard;