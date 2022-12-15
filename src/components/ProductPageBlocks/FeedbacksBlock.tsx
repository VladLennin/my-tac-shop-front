import React, {FC, useState} from 'react';
import Feedback from "../SmallComponents/Feedback";
import {IFeedback, IProduct, IUser} from "../../models/Models";
import BlockTemplate from "../BlockTemplate";

interface FeedbackProps {
    product?: IProduct;
    user: IUser;
}

const FeedbacksBlock: FC<FeedbackProps> = ({product, user}) => {

    const [addBlock, setAddBlock] = useState<boolean>(false)
    const [feedbacks, setFeedbacks] = useState<IFeedback[]>([])
    const [stars, setStars] = useState<boolean[]>([false, false, false, false, false])
    const [newFeedback, setNewFeedback] = useState<IFeedback>(new IFeedback(0, user, "", 0, "", [], []));
    const checkFeedback = () => {
        return feedbacks.filter(feedback => feedback.author.id === user.id).length !== 0;
    }

    const fillStars = (id: number) => {
        switch (id) {
            case 0:
                setStars([true, false, false, false, false]);
                break;
            case 1:
                setStars([true, true, false, false, false]);
                break;
            case 2:
                setStars([true, true, true, false, false]);
                break;
            case 3:
                setStars([true, true, true, true, false]);
                break;
            case 4:
                setStars([true, true, true, true, true]);
                break;
        }
    }
    const clearStart = () => {
        setStars([false, false, false, false, false])
    }

    const genStar = () => {
        let result = []
        for (let i = 0; i < 5; i++) {
            result.push(<i onMouseEnter={() => fillStars(i)}
                           onMouseLeave={() => clearStart()}
                           className={
                               (newFeedback.mark >= i + 1 ? "text-yellow-200 rotate-180 " : "") +
                               (stars[i] ? "text-yellow-200 rotate-180 " : "") +
                               "hover:cursor-pointer bi bi-star duration-300"}
                           onClick={() => setNewFeedback({...newFeedback, "mark": i + 1})}></i>)
        }
        return result;
    }

    return (
        <BlockTemplate addClasses={"text-center"}>
            <h3 className={"text-custom text-[4vh]"}>Відгуки</h3>
            <hr className={"border-gray-700"}/>
            {feedbacks.length === 0
                ?
                <button onClick={() => setAddBlock(!addBlock)} className={" w-full duration-300"}>
                    <div className={"flex justify-center text-2xl m-3 "}>
                        <h3>Станьте першим хто оцінить це товар!</h3>
                        <i className="bi bi-emoji-wink ml-2 "></i>
                    </div>
                </button>
                :
                (feedbacks.map(feedback => <Feedback key={feedback.id} _feedback={feedback} user={user}/>))
            }

            {(addBlock && !checkFeedback()) &&
                <div className={"mt-3 "}>
                    <div className={" w-full mx-3 du justify-center mb-3"}>
                        <textarea onChange={(e) => setNewFeedback({...newFeedback, content: e.target.value})}
                                  className={"w-1/2  rounded border min-h-[10vh]"}/>
                        <div className={"flex gap-3 text-4xl justify-center"}>
                            {genStar().map(result => result)}
                        </div>
                    </div>
                    <button onClick={() => {
                        setFeedbacks([...feedbacks, newFeedback])
                    }
                    }
                            className={"px-6 py-2 rounded bg-yellow-300 my-2 "}>
                        Додати
                    </button>
                </div>
            }
        </BlockTemplate>
    );
};

export default FeedbacksBlock;