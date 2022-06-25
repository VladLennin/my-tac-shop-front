import React, {FC} from 'react';
import {IProduct} from "../../Models/Models";

interface CostBuyProps {
    product?: IProduct;
    inline:boolean;
}

const CostBuyBtn: FC<CostBuyProps> = ({product,inline}) => {
    return (
        <div className={(inline?"grid-cols-2 mb-5":"grid-cols-1") + " grid justify-items-center align-items-middle"}>
            <div>
                <button
                    className={"border border-gray-700 rounded-lg bg-gray-700 text-stone-50 p-3 text-custom duration-200  hover:scale-110 "}>Додати
                    до кошика
                </button>
            </div>
            <h3 className={"mt-3 text-custom text-[4vh]"}>{product?.cost} грн</h3>
        </div>
    );
};

export default CostBuyBtn;