import React, {FC} from 'react';
import {IFeedback} from "../Models/Models";

interface FeedbackProps {
    feedback: IFeedback;
}

const Feedback: FC<FeedbackProps> = ({feedback}) => {
    return (
        <div className={"mt-8 bg-gray-300 p-1 rounded-lg"}>
            <div className={"flex"}>

                <div className={"flex flex-col justify-between m-1 mr-3"}>
                    <h5 className={"text-custom text-[2.5vh]"}>{feedback.author.name}</h5>
                    <h5 className={"text-custom"}>{feedback.created}</h5>
                </div>
                <div className={"m-1"}>
                    {feedback.content}
                </div>
            </div>
            <div className={"my-2 text-xl flex justify-around"}>
                <div>
                    {[...Array(feedback.mark)].map((item, index) => <i className="mr-1 bi bi-star-fill"></i>)}
                    {[...Array(5 - feedback.mark)].map((item, index) => <i className="mr-1 bi bi-star"></i>)}
                </div>

                <div>
                    <button className={"hover:scale-150 duration-200"}><i className="bi bi-hand-thumbs-up"></i> {feedback.likes}</button>
                    <button className={"hover:scale-150 duration-200"}><i className="bi bi-hand-thumbs-down ml-3"></i> {feedback.dislikes}</button>
                </div>
            </div>
        </div>
    );
};

export default Feedback;