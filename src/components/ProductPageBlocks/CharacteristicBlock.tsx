import React, {FC, ReactChild, ReactChildren} from 'react';
import {ICharacteristic, IProduct} from "../../Models/Models";
import {log} from "util";

interface CharacteristicProps {
    product: IProduct;
}

const CharacteristicBlock: FC<CharacteristicProps> = ({product}) => {

    function arrayChar(characteristic: ICharacteristic) {
        if (characteristic.valueArray !== undefined) {
            return (<div>
                <div className={"flex justify-between mx-10"}>
                    <h1 className={""}>{characteristic.name}</h1>
                    <div>
                        {characteristic.valueArray?.map(value =>
                            <div>{value}</div>
                        )}
                    </div>

                </div>
                <hr/>
            </div>)
        } else {
            return (<div>
                <div className={"flex justify-between mx-10"}>
                    <h1>{characteristic.name}</h1>
                    <h1>{characteristic.value}</h1>

                </div>
                <hr/>
            </div>)
        }
    }

    return (
        <div
            className={"hover:shadow-2xl hover:scale-105 duration-300 border rounded-lg border-gray-700 border-2 w-1/2 ml-8 shadow"}>
            <h1 className={"text-center  text-custom text-[4vh]"}>{product.name}</h1>
            <hr className={"border-gray-700 mx-2"}/>
            {product.characteristics.map(characteristic => (
                    <div className={"my-1"}> {arrayChar(characteristic)}</div>
                )
            )}


        </div>
    );
};

export default CharacteristicBlock;