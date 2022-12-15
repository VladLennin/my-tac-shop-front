import React, {FC, useEffect, useState} from 'react';
import {IProduct} from "../../models/Models";

interface CostBuyProps {
    product: IProduct;
    inline: boolean;
}

const CostBuyBtn: FC<CostBuyProps> = ({product, inline}) => {
    const [ch, setCh] = useState(1);
    const [basket, setBasket] = useState<string[]>([])
    const [includeInBasket, setIncludeBasket] = useState(false);

    useEffect(() => {
        const temp = localStorage.getItem("basket");
        if (temp != undefined) {
            // @ts-ignore
            const basketTemp: string[] = temp.split("\n");
            setBasket(basketTemp)
        }

        if (basket.filter(item => item === String(product.id)).length !== 0 ) {
            setIncludeBasket(true)
        }

    }, [])
    return (
        <div
            className={(inline ? "xl:grid-cols-3 mb-5 grid-cols-1 text-center " : "grid-cols-1") + " grid justify-items-center align-items-middle "}>
            {inline ? <div className={"mb-5"}>
                <button className={"mr-3"}
                        onClick={() => ch !== 1 ? setCh(ch - 1) : alert("Не можна додати менше одного товару")}>-
                </button>
                <input type={"text"} value={ch} className={"w-1/4 text-center border-gray-700 rounded-md"}/>
                <button className={"ml-3"} onClick={() => setCh(ch + 1)}>+</button>
            </div> : ""}

            <div>
                <button
                    onClick={() => {
                        localStorage.setItem("basket", (localStorage.getItem("basket") !== null ? localStorage.getItem("basket") + "\n" : "") + String(product.id))
                    }}
                    disabled={includeInBasket}
                    className={(includeInBasket ? "bg-gray-300" : "") + " border-2 border-gray-700 rounded-lg bg-gray-700 text-stone-50 px-10 py-3 text-custom duration-200  hover:bg-gray-400 "}>
                    {includeInBasket ? <p className={"mx-5"}>У кошику</p> : <p>Купити</p>}
                </button>
            </div>
            <h3 className={"mt-3 text-custom text-[4vh]"}>{product?.cost} грн</h3>
            <button onClick={() => console.log(basket)}>
                ...
            </button>
        </div>
    );
};

export default CostBuyBtn;