import React, {FC, useEffect, useState} from 'react';
import {IProduct} from "../../models/Models";
import {useAppDispatch, useAppSelector} from "../../store/hooks/hooks";
import {addProduct} from "../../store/basketSlice";

interface CostBuyProps {
    product: IProduct;
    inline: boolean;
}

const CostBuyBtn: FC<CostBuyProps> = ({product, inline}) => {
    const [ch, setCh] = useState(0);
    const [includeInBasket, setIncludeInBasket] = useState<boolean>();

    const basket = useAppSelector((state) => state.basket.value)
    const dispatch = useAppDispatch()

    useEffect(() => {
        console.log("basket " + JSON.stringify(basket))
        console.log(product.id)
        console.log(basket)
        if (basket.filter(x => x.id === product.id).length === 0) {
            setIncludeInBasket(false)
        } else {
            setIncludeInBasket(true)
        }
        console.log(basket.filter(x => x.id === product.id).length + " length")
    }, [])
    return (
        <div
            className={(inline ? "xl:grid-cols-3 mb-5 grid-cols-1 text-center " : "grid-cols-1") + " grid justify-items-center align-items-middle"}>
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
                        if (!includeInBasket) {
                            setIncludeInBasket(true)
                            dispatch(addProduct(product))
                        }
                    }}
                    disabled={includeInBasket}
                    className={(includeInBasket ? "bg-gray-300"  : "") + " border border-gray-700 rounded-lg bg-gray-700 text-stone-50 p-3 text-custom duration-200  hover:scale-110 "}>
                    {includeInBasket ? <p className={"mx-5"}>У кошику</p> : <p>Додати до кошика</p>}
                </button>
            </div>
            <h3 className={"mt-3 text-custom text-[4vh]"}>{product?.cost} грн</h3>
        </div>
    );
};

export default CostBuyBtn;