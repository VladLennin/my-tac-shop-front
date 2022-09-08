import React, {FC} from 'react';
import {IProduct} from "../../models/Models";
import BlockTemplate from "../BlockTemplate";

interface DescriptionProps {
    product?: IProduct;
}

const DescriptionBlock: FC<DescriptionProps> = ({product}) => {
    return (
        <div>
            <BlockTemplate>
                <div className={"m-3"}>
                    <h3 className={"text-custom text-center text-[4vh]"}>Опис</h3>
                    <hr className={"border-gray-700"}/>
                    <br/>
                      <div className={"break-words"}>
                          {product?.description}
                      </div>
                </div>
            </BlockTemplate>
            <h3 className={"text-custom text-2xl mb-2"}>Огляд товару на нашому каналі:</h3>
            <iframe title={"Youtube video"} className={"w-full h-[40vh]"} src={product?.linkYoutube}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
            </iframe>
        </div>

    );
};

export default DescriptionBlock;