import React, {FC} from 'react';
import Wrapper from "../components/Wrapper";
import ProductSlider from "../components/ProductSlider";
import Feedback from "../components/Feedback";
import {IProduct} from "../Models/Models";
import CharacteristicBlock from "../components/ProductPageBlocks/CharacteristicBlock";
import FeedbacksBlock from "../components/ProductPageBlocks/FeedbacksBlock";
import CostBuyBtn from "../components/ProductPageBlocks/CostBuyBtn";
import DescriptionBlock from "../components/ProductPageBlocks/DescriptionBlock";
import CustomModal from "../components/ProductPageBlocks/PhotoModal";

interface ProductPageProps {
    product: IProduct;
}

const ProductPage: FC<ProductPageProps> = ({product}) => {




    return (
        <Wrapper>
            <div className={"flex flex-col justify-center xl:justify-between xl:flex-row  mt-5"}>
                <ProductSlider images={product.images}/>
                <CharacteristicBlock product={product}/>
            </div>

            <div className={"flex flex-col justify-center xl:justify-between xl:flex-row "}>
                <div className={"flex flex-col w-1/2"}>
                    <CostBuyBtn product={product}/>
                    <FeedbacksBlock product={product}/>
                </div>

                <div className={"mt-8 w-1/2 ml-10 text-center"}>
                    <DescriptionBlock product={product}/>
                </div>
            </div>


        </Wrapper>
    );
};

export default ProductPage;