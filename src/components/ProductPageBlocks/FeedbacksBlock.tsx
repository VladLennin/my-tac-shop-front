import React, {FC} from 'react';
import Feedback from "../SmallComponents/Feedback";
import {IProduct} from "../../models/Models";
import BlockTemplate from "../BlockTemplate";

interface FeedbackProps {
    product?: IProduct;

}

const FeedbacksBlock: FC<FeedbackProps> = ({product}) => {
    return (
        <BlockTemplate addClasses={"text-center"}>
            <h3 className={"text-custom text-[4vh]"}>Відгуки</h3>
            <hr className={"border-gray-700"}/>
            {product?.feedbacks.length === 0
                ?
                <div className={"flex justify-center text-2xl m-3"}>
                    <h3>Станьте першим хто оцінить це товар!</h3>
                    <i className="bi bi-emoji-wink ml-2 "></i>
                </div>
                :
                (product?.feedbacks.map(feedback => <Feedback key={product.id} feedback={feedback}/>))
            }
        </BlockTemplate>
    );
};

export default FeedbacksBlock;