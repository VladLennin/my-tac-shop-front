import React, {FC} from 'react';
import {IProduct} from "../../Models/Models";

interface DescriptionProps {
    product?: IProduct;
}

const DescriptionBlock: FC<DescriptionProps> = ({product}) => {
    return (
        <div>
            <div
                className={"hover:shadow-2xl hover:scale-105 text-justify duration-300 border-2 p-2 border-gray-700 rounded-lg mb-5  shadow"}>
                <h3 className={"text-custom text-center text-[4vh]"}>Опис</h3>
                <hr className={"border-gray-700"}/>
                <br/>
                {product?.description}
            </div>
            <h3 className={"text-custom text-2xl mb-2"}>Огляд товару на нашому каналі:</h3>
            <iframe title={"Youtube video"} className={"w-full h-[40vh]"} src={product?.linkYoutube}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
            </iframe>
        </div>

    );
};

export default DescriptionBlock;