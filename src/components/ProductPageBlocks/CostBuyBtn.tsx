import React, {FC} from 'react';
import {IProduct} from "../../Models/Models";

interface CostBuyProps {
    product: IProduct;
}

const CostBuyBtn: FC<CostBuyProps> = ({product}) => {
    return (
        <div className={"flex justify-around my-8 px-10 "}>
            <div>
                <button
                    className={"border border-gray-700 rounded-lg bg-gray-700 text-stone-50 p-4 text-custom shadow-2xl max-h-[60px] hover:scale-110 mr-5"}>Додати
                    до кошика
                </button>
            </div>
            <h3 className={"inline-block text-custom text-[4vh]"}>{product.cost} грн</h3>
        </div>
    );
};

export default CostBuyBtn;