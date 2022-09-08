import React, {FC, useState} from 'react';
import Wrapper from "../components/main-blocks/Wrapper";
import {IProduct, IUser} from "../models/Models";
import BlockTemplate from "../components/BlockTemplate";
import {useAppDispatch, useAppSelector} from "../store/hooks/hooks";

interface BasketPageProps {
    user: IUser;
}

const BasketPage: FC<BasketPageProps> = ({user}) => {
    const basket = useAppSelector((state) => state.basket.value)
    const dispatch = useAppDispatch()

    return (
        <div>
            <Wrapper user={user}>
                <div className={" grid gap-4"}>
                    <BlockTemplate>
                        <div>
                            {basket.map((product,index) =>
                                <div>
                                    {index+1}.{product.name}
                                </div>
                            )}
                        </div>
                    </BlockTemplate>

                </div>
            </Wrapper>
        </div>
    );
};

export default BasketPage;