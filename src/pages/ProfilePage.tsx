import React, {FC, useEffect, useState} from 'react';
import Wrapper from "../components/main-blocks/Wrapper";
import {useAppDispatch, useAppSelector} from "../store/hooks/hooks";
import {changeUser} from "../store/userSlice";
import {IUser} from "../models/Models";

interface ProfilePageProps {
}

const ProfilePage: FC<ProfilePageProps> = () => {


    const [flagName, setFlagName] = useState(false);
    const [flagSurname, setFlagSurname] = useState(false);
    const [flagAddress, setFlagAddress] = useState(false);
    const [flagPhone, setFlagPhone] = useState(false);
    const [flagMail, setFlagMail] = useState(false);

    const user = useAppSelector((state) => state.user.value)
    const [userT, setUserT] = useState<IUser>(user)
    useEffect(()=>{
        setUserT(user)
    },[])
    const dispatch = useAppDispatch()

    return (
       <>
                <div className={"text-center"}>
                    <h3 className={"text-custom text-4xl mb-3"}>Профіль</h3>
                    <div className={"grid xl:grid-cols-2 grid-cols-1 gap-6 "}>

                        <div
                            className={"border-2 border-gray-700  rounded-lg p-4 hover:shadow-2xl hover:scale-105 duration-300"}>

                            <div className={"text-custom text-gray-600 text-xl mb-2 flex justify-between px-20"}>
                                <h4>Імʼя</h4>
                                {flagName
                                    ?
                                    <div>
                                        <input value={userT.name}
                                               className={"h-3/4 border-2 rounded-lg border-gray-700 "} type="text"
                                               onChange={(e) =>
                                                   setUserT({...userT, name: e.target.value})
                                               }
                                        />
                                        <button onClick={() => {
                                            setFlagName(false);
                                            dispatch(changeUser(userT))
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
                                        <input value={userT.surname}
                                               onChange={(e) =>
                                                   setUserT({...userT, surname: e.target.value})
                                               }
                                               className={"h-3/4 border-2 rounded-lg border-gray-700 "} type="text"/>
                                        <button onClick={() => {
                                            setFlagSurname(false);
                                            dispatch(changeUser(userT))
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
                                        <input value={userT.address}
                                               onChange={(e) =>
                                                   setUserT({...userT, address: e.target.value})
                                               }
                                               className={"h-3/4 border-2 rounded-lg border-gray-700 "} type="text"/>
                                        <button onClick={() => {
                                            setFlagAddress(false);
                                            dispatch(changeUser(userT))
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
                                        <input value={userT.phoneNumber}
                                               onChange={(e) =>
                                                   setUserT({...userT, phoneNumber: e.target.value})
                                               }
                                               className={"h-3/4 border-2 rounded-lg border-gray-700 "} type="text"/>
                                        <button onClick={() => {
                                            setFlagPhone(false);
                                            dispatch(changeUser(userT))
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
                                        <input value={userT.mail}
                                               onChange={(e) =>
                                                   setUserT({...userT, mail: e.target.value})
                                               }
                                               className={"h-3/4 border-2 rounded-lg border-gray-700 "} type="text"/>
                                        <button onClick={() => {
                                            setFlagMail(false);
                                            dispatch(changeUser(userT))
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

                        <div
                            className={"border-2 border-gray-700 rounded-lg hover:shadow-2xl hover:scale-105 duration-300"}>
                            Ваші замовлення
                        </div>
                    </div>
                </div>

       </>
    );
};

export default ProfilePage;