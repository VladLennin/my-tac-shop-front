import React, {FC} from 'react';
import BlockTemplate from "../components/BlockTemplate";
import {useAppDispatch, useAppSelector} from "../store/hooks/hooks";

interface BasketPageProps {
}

const BasketPage: FC<BasketPageProps> = () => {
    const basket = useAppSelector((state) => state.basket.value)
    const user = useAppSelector((state) => state.user.value)
    const dispatch = useAppDispatch()

    return (
        <>
            <div className={"grid gap-4"}>
                <BlockTemplate>
                    <div>
                        {basket.map((product, index) =>
                            <div key={index}>
                                {index + 1}.{product.name}
                            </div>
                        )}
                    </div>
                </BlockTemplate>

            </div>
        </>
    )
        ;
};

export default BasketPage;