import React, {FC, useEffect, useState} from 'react';
import {IProduct} from "../Models/Models";
import CharacteristicsBlock from "../components/ProductPageBlocks/CharacteristicsBlock";
import DescriptionBlock from "../components/ProductPageBlocks/DescriptionBlock";
import FeedbacksBlock from "../components/ProductPageBlocks/FeedbacksBlock";
import Wrapper from "../components/main-blocks/Wrapper";
import CostBuyBtn from "../components/ProductPageBlocks/CostBuyBtn";
import API from "../api"
import ProductSlider from "../components/ProductPageBlocks/ProductSlider";

interface ProductPageProps {
    productId: number;
}

const ProductPageV2: FC<ProductPageProps> = ({productId}) => {

    const [product, setProduct] = useState<IProduct>(
    );

    useEffect(() => {
        API.get("/product/" + productId)
            .then((res: any) => {
                let product: IProduct = res.data;
                console.log(product)
                setProduct(product);
            })

    }, [productId])

    return (
        <Wrapper>
            <div className="grid xl:grid-cols-2 grid-cols-1 gap-10">
                {product !== undefined ? <ProductSlider isCatalog={false} product={product} indicators={true}/> : ""}
                <CharacteristicsBlock product={product}/>
                <div>
                    <CostBuyBtn product={product} inline={true}/>
                    <FeedbacksBlock product={product}/>
                </div>
                <DescriptionBlock product={product}/>
            </div>
        </Wrapper>

    );
};

export default ProductPageV2;