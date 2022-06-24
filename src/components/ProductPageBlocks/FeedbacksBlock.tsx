import React, {FC} from 'react';
import Feedback from "../Feedback";
import {IProduct} from "../../Models/Models";

interface FeedbackProps {
    product: IProduct;
}

const FeedbacksBlock: FC<FeedbackProps> = ({product}) => {
    return (
        <div className={"hover:shadow-2xl hover:scale-105 duration-300 w-full text-center border-2 p-2 border-gray-700 rounded-lg"}>
            <h3 className={"text-custom text-[4vh]"}>Відгуки</h3>
            <hr className={"border-gray-700"}/>
            {product.feedbacks.map(feedback => <Feedback feedback={feedback}/>)}
        </div>
    );
};

export default FeedbacksBlock;