import React, {FC, useState} from 'react';
import Wrapper from "../components/main-blocks/Wrapper";
import {IFlag, IUser, Picture} from "../Models/Models";
import {log} from "util";
import {btoa} from "buffer";

interface ProfilePageProps {
    user: IUser;
    setUser: (user: IUser) => any;
}

const ProfilePage: FC<ProfilePageProps> = ({user}) => {

    // const addNewUser = (user1:IUser) => {
    //     const newUser = user1;
    //     setUser(newUser)
    // }
    {/*<button onClick={()=>addNewUser(new IUser("Sergey","Radchenko","POPOPOP","09987123","ansdijnjasdj"))}>try</button>*/
    }


    const [flagName, setFlagName] = useState(false);
    const [flagSurname, setFlagSurname] = useState(false);
    const [flagAddress, setFlagAddress] = useState(false);
    const [flagPhone, setFlagPhone] = useState(false);
    const [flagMail, setFlagMail] = useState(false);


    return (
        <div>
            <Wrapper user={user}>
                <div className={"text-center"}>
                    <h3 className={"text-custom text-4xl mb-3"}>Профіль</h3>
                    <div className={"grid xl:grid-cols-2 grid-cols-1 gap-6 "}>

                        <div
                            className={"border-2 border-gray-700  rounded-lg p-4 hover:shadow-2xl hover:scale-105 duration-300"}>

                            {/*{user1.image?.content === "default" ?*/}
                            {/*    <i className=" block bi bi-person-bounding-box text-[150px] "></i>*/}
                            {/*    :*/}
                            {/*    <img src={user1.image?.content} alt=""/>*/}
                            {/*}*/}

                            {/*<label htmlFor={"userImage"}>*/}
                            {/*    <div*/}
                            {/*        className={"hover:scale-110 block hover:bg-gray-300 hover:text-gray-700 xl:mx-40  mx-10 duration-300 cursor-pointer border-2 rounded bg-gray-700 border-gray-700 p-2 text-custom text-white"}>*/}
                            {/*        Вибрати своє фото*/}
                            {/*    </div>*/}
                            {/*</label>*/}
                            {/*<div>*/}
                            {/*    <input type="text"/>*/}
                            {/*    <button onClick={() => {*/}

                            {/*    }}>*/}
                            {/*        save*/}
                            {/*    </button>*/}
                            {/*</div>*/}

                            {/*<div className={"flex gap-2"}>*/}
                            {/*    <button onClick={() => {*/}
                            {/*    }}>*/}
                            {/*        <i className="bi bi-pencil-square"></i>*/}
                            {/*    </button>*/}
                            {/*</div>*/}


                            <div className={"text-custom text-gray-600 text-xl mb-2 flex justify-between px-20"}>
                                <h4>Імʼя</h4>
                                {flagName
                                    ?
                                    <div>
                                        <input value={user.name}
                                               className={"h-3/4 border-2 rounded-lg border-gray-700 "} type="text"/>
                                        <button onClick={() => {
                                            setFlagName(false);
                                        }}>
                                            <i className=" l-2 bi bi-check2"></i>
                                        </button>
                                    </div>
                                    :
                                    <div className={"flex gap-2"}>
                                        <h4>{user.name}</h4>
                                        <button onClick={() => {
                                            setFlagName(true);
                                        }}>
                                            <i className="bi bi-pencil-square"></i>
                                        </button>
                                    </div>
                                }

                            </div>

                            <div className={"text-custom text-gray-600 text-xl mb-2 flex justify-between px-20"}>

                                <h4>Фамілія</h4>
                                {flagSurname
                                    ?
                                    <div>
                                        <input value={user.surname}
                                               className={"h-3/4 border-2 rounded-lg border-gray-700 "} type="text"/>
                                        <button onClick={() => {
                                            setFlagSurname(false);
                                        }}>
                                            <i className="ml-2 bi bi-check2"></i>
                                        </button>
                                    </div>
                                    :
                                    <div className={"flex gap-2"}>
                                        <h4>{user.surname}</h4>
                                        <button onClick={() => {
                                            setFlagSurname(true);
                                        }}>
                                            <i className="bi bi-pencil-square"></i>
                                        </button>
                                    </div>
                                }
                            </div>

                            <div className={"text-custom text-gray-600 text-xl mb-2 flex justify-between px-20"}>

                                <h4>Адреса</h4>
                                {flagAddress
                                    ?
                                    <div>
                                        <input value={user.address}
                                               className={"h-3/4 border-2 rounded-lg border-gray-700 "} type="text"/>
                                        <button onClick={() => {
                                            setFlagAddress(false);
                                        }}>
                                            <i className="ml-2 bi bi-check2"></i>
                                        </button>
                                    </div>
                                    :
                                    <div className={"flex gap-2"}>
                                        <h4>{user.address}</h4>
                                        <button onClick={() => {
                                            setFlagAddress(true);
                                        }}>
                                            <i className="bi bi-pencil-square"></i>
                                        </button>
                                    </div>
                                }
                            </div>

                            <div className={"text-custom text-gray-600 text-xl mb-2 flex justify-between px-20"}>

                                <h4>Телефон</h4>
                                {flagPhone
                                    ?
                                    <div>
                                        <input value={user.phoneNumber}
                                               className={"h-3/4 border-2 rounded-lg border-gray-700 "} type="text"/>
                                        <button onClick={() => {
                                            setFlagPhone(false);
                                        }}>
                                            <i className="ml-2 bi bi-check2"></i>
                                        </button>
                                    </div>
                                    :
                                    <div className={"flex gap-2"}>
                                        <h4>{user.phoneNumber}</h4>
                                        <button onClick={() => {
                                            setFlagPhone(true);
                                        }}>
                                            <i className="bi bi-pencil-square"></i>
                                        </button>
                                    </div>
                                }
                            </div>

                            <div className={"text-custom text-gray-600 text-xl mb-2 flex justify-between px-20"}>

                                <h4>Пошта</h4>
                                {flagMail
                                    ?
                                    <div>
                                        <input value={user.mail}
                                               className={"h-3/4 border-2 rounded-lg border-gray-700 "} type="text"/>
                                        <button onClick={() => {
                                            setFlagMail(false);
                                        }}>
                                            <i className="ml-2 bi bi-check2"></i>
                                        </button>
                                    </div>
                                    :
                                    <div className={"flex gap-2"}>
                                        <h4>{user.mail}</h4>
                                        <button onClick={() => {
                                            setFlagMail(true);
                                        }}>
                                            <i className="bi bi-pencil-square"></i>
                                        </button>
                                    </div>
                                }
                            </div>
                        </div>

                        <div className={"border-2 border-gray-700 rounded-lg hover:shadow-2xl hover:scale-105 duration-300"}>
                            Ваші замовлення
                        </div>
                    </div>
                </div>

            </Wrapper>
        </div>
    );
};

export default ProfilePage;