import React, {FC} from 'react';
import Wrapper from "../components/main-blocks/Wrapper";
import {IUser} from "../models/Models";

interface BasketPageProps {
    user:IUser;
}

const BasketPage:FC<BasketPageProps> = ({user}) => {
    return (
        <div>
            <Wrapper user={user}>
                <div>
                    BasketPage
                </div>
            </Wrapper>
        </div>
    );
};

export default BasketPage;