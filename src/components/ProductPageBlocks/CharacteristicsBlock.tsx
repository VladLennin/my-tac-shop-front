import React, {FC} from 'react';
import {IProduct} from "../../models/Models";
import BlockTemplate from "../BlockTemplate";

interface CharacteristicProps {
    product?: IProduct;
}

const CharacteristicsBlock: FC<CharacteristicProps> = ({product}) => {

    return (
        <BlockTemplate>
            <h1 className={"text-center  text-custom text-[4vh]"}>{product?.name}</h1>
            <hr className={"border-gray-700 mx-2"}/>
            {product?.characteristics.map(characteristic => (
                    <div key={product.id} className={"my-1"}>
                        <div className={"flex justify-between mx-10"}>
                            <h1 className={""}>{characteristic.name}</h1>
                            <div>
                                {characteristic.values.map(value =>
                                    <div className={"text-end"}>{value}</div>
                                )}
                            </div>
                        </div>
                        <hr/>
                    </div>
                )
            )}
        </BlockTemplate>
    );

};

export default CharacteristicsBlock;