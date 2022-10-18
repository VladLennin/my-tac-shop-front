import React, {FC, useEffect, useState} from 'react';
import {IProduct, IUser} from "../models/Models";
import CharacteristicsBlock from "../components/ProductPageBlocks/CharacteristicsBlock";
import DescriptionBlock from "../components/ProductPageBlocks/DescriptionBlock";
import FeedbacksBlock from "../components/ProductPageBlocks/FeedbacksBlock";
import Wrapper from "../components/main-blocks/Wrapper";
import CostBuyBtn from "../components/ProductPageBlocks/CostBuyBtn";
import API from "../api"
import ProductSlider from "../components/ProductPageBlocks/ProductSlider";
import {Spinner} from "flowbite-react";
import {useAppDispatch, useAppSelector} from "../store/hooks/hooks";

interface ProductPageProps {
    productId: number;
}

const ProductPageV2: FC<ProductPageProps> = ({productId}) => {

    const [product, setProduct] = useState<IProduct>(
    );
    const user = useAppSelector((state) => state.user.value)
    const dispatch = useAppDispatch()


    useEffect(() => {
        API.get("/product/" + productId)
            .then((res: any) => {
                let product: IProduct = res.data;
                console.log(product)
                setProduct(product);
            })

    }, [productId])

    return (
       <>
            <div className={"grid xl:grid-cols-2 grid-cols-1 gap-10"}>
                {
                    product !== undefined
                        ?
                        <ProductSlider isCatalog={false} product={product} indicators={true}/>
                        :
                        <Spinner className={"m-auto"}
                                 aria-label="Extra large spinner example"
                                 size="xl"
                        />
                }
                {
                    product !== undefined
                        ?
                        <CharacteristicsBlock product={product}/>
                        :
                        <Spinner className={"m-auto"}
                                 aria-label="Extra large spinner example"
                                 size="xl"
                        />
                }

                {
                    product !== undefined
                        ?
                        <div>
                            <CostBuyBtn   product={product} inline={true}/>
                            <FeedbacksBlock product={product}/>
                        </div>
                        :
                        <Spinner className={"m-auto"}
                                 aria-label="Extra large spinner example"
                                 size="xl"
                        />
                }

                {
                    product !== undefined
                        ?
                        <DescriptionBlock product={product}/>
                        :
                        <Spinner className={"m-auto"}
                                 aria-label="Extra large spinner example"
                                 size="xl"
                        />
                }

            </div>
       </>

    );
};

export default ProductPageV2;