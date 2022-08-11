import React, {FC} from 'react';
import { IProduct} from "../../models/Models";

interface CharacteristicProps {
    product?: IProduct;
}

const CharacteristicsBlock: FC<CharacteristicProps> = ({product}) => {

    return (
        <div
            className={"hover:shadow-2xl hover:scale-105 duration-300  rounded-lg border-2  border-gray-700  shadow"}>
            <h1 className={"text-center  text-custom text-[4vh]"}>{product?.name}</h1>
            <hr className={"border-gray-700 mx-2"}/>
            {product?.characteristics.map(characteristic => (
                    <div  key={product.id} className={"my-1"}>
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
        </div>
    );

};

export default CharacteristicsBlock;