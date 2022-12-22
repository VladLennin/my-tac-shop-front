import React, {FC, useContext, useEffect, useState} from 'react';
import {IProduct} from "../../models/Models";
import CharacteristicsBlock from "../../components/ProductPageBlocks/CharacteristicsBlock";
import DescriptionBlock from "../../components/ProductPageBlocks/DescriptionBlock";
import FeedbacksBlock from "../../components/ProductPageBlocks/FeedbacksBlock";
import CostBuyBtn from "../../components/ProductPageBlocks/CostBuyBtn";
import API from "../../http"
import ProductSlider from "../../components/ProductPageBlocks/ProductSlider";
import {Spinner} from "flowbite-react";
import {useParams} from "react-router-dom";
import {Context} from "../../index";

interface ProductPageProps {

}

const ProductPageV2: FC<ProductPageProps> = ({}) => {

    const [product, setProduct] = useState<IProduct>();
    const productId: Number = Number(useParams().id);

    const {authStore} = useContext(Context)


    useEffect(() => {
        console.log(productId)
        API.get("/product/" + productId,{
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem("token")
            }
        })
            .then((res: any) => {
                let product: IProduct = res.data;
                console.log(product)
                setProduct(product);
            })

    }, [productId])

    return (
        <>
            <div className={"grid xl:grid-cols-2 grid-cols-1 gap-10"}>
                <div className={"grid grid-cols-1 gap-5"}>
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
                            <div>
                                <CostBuyBtn product={product} inline={true}/>
                                <FeedbacksBlock product={product} user={authStore.user}/>
                            </div>
                            :
                            <Spinner className={"m-auto"}
                                     aria-label="Extra large spinner example"
                                     size="xl"
                            />
                    }
                </div>

                <div className={"grid grid-cols-1 gap-5"}>
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
                            <DescriptionBlock product={product}/>
                            :
                            <Spinner className={"m-auto"}
                                     aria-label="Extra large spinner example"
                                     size="xl"
                            />
                    }
                </div>

            </div>
        </>

    );
};

export default ProductPageV2;