import React, {FC, useState} from 'react';
import {IFeedback, Like} from "../../models/Models";
import {User} from "../../models/User";

interface FeedbackProps {
    _feedback: IFeedback;
    user: User;
}

const Feedback: FC<FeedbackProps> = ({_feedback, user}) => {


    const [feedback, setFeedback] = useState<IFeedback>(_feedback)

    function checkLikes() {
        if (feedback.likes.filter(like => like.owner == user.id).length == 0) {
            if (feedback.dislikes.filter(dislike => dislike.owner == user.id).length == 0) {
                feedback.likes.push(new Like(user.id))
                setFeedback({...feedback, "likes": feedback.likes})
            }
        } else {
            feedback.likes = feedback.likes.filter(like => like.owner !== user.id)
            setFeedback({...feedback, "likes": feedback.likes})
        }
    }

    function checkDislikes() {
        if (feedback.dislikes.filter(dislike => dislike.owner == user.id).length == 0) {
            if (feedback.likes.filter(like => like.owner == user.id).length == 0) {
                feedback.dislikes.push(new Like(user.id))
                setFeedback({...feedback, "dislikes": feedback.dislikes})
            }
        } else {
            feedback.dislikes = feedback.dislikes.filter(dislike => dislike.owner !== user.id)
            setFeedback({...feedback, "dislikes": feedback.dislikes})
        }
    }

    return (
        <div className={"mt-8 bg-gray-300 p-1 rounded-lg m-5"}>
            <div className={"grid grid-cols-3 mt-2"}>

                <div className={"flex flex-col justify-between m-1 mr-3"}>
                    <h5 className={"text-custom text-[2.3vh]"}>{feedback.author.name} {feedback.author.surname}</h5>
                    <h5 className={"text-custom"}>{feedback.created}</h5>
                </div>
                <div>
                    {[...Array(feedback.mark)].map((item, index) => <i key={index}
                                                                       className="mr-1 bi bi-star-fill"></i>)}
                    {[...Array(5 - feedback.mark)].map((item, index) => <i key={index}
                                                                           className=" mr-1 bi bi-star"></i>)}
                </div>

                <div>
                    <button onClick={() => {
                        checkLikes()
                    }} className={"hover:scale-150 duration-200"}>
                        <i className="bi bi-hand-thumbs-up"></i>
                        {feedback.likes.length}
                    </button>
                    <button onClick={() => {
                        checkDislikes()
                    }}
                            className={"hover:scale-150 duration-200"}>
                        <i className="bi bi-hand-thumbs-down ml-3"></i>
                        {feedback.dislikes.length}
                    </button>
                </div>
            </div>
            <hr className={"mx-4 text-black"}/>
            <div className={"m-1 break-words mx-5"}>
                {feedback.content}
            </div>
        </div>
    );
};

export default Feedback;