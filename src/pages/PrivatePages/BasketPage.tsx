import React, {FC} from 'react';
import BlockTemplate from "../../components/BlockTemplate";

interface BasketPageProps {
}

const BasketPage: FC<BasketPageProps> = () => {

    return (
        <>
            <div className={"grid gap-4"}>
                <BlockTemplate>
                    <div>
                        Basket
                    </div>
                </BlockTemplate>

            </div>
        </>
    );
};

export default BasketPage;