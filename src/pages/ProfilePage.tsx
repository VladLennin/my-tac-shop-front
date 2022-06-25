import React, {FC} from 'react';
import Wrapper from "../components/main-blocks/Wrapper";
import {IUser} from "../Models/Models";

interface ProfilePageProps {
    user: IUser;
}

const ProfilePage: FC<ProfilePageProps> = ({user}) => {
    return (
        <div>
            <Wrapper>
                <div className={"text-center"}>
                    <h3 className={"text-custom text-4xl mb-3"}>Профіль</h3>
                    <div className={"grid xl:grid-cols-2 grid-cols-1 gap-4 "}>
                        <div
                            className={"border  border-2 border-gray-700  rounded-lg "}>


                                <i className=" block bi bi-person-bounding-box text-[150px] "></i>
                                <label htmlFor={"userImage"}>
                                    <div
                                        className={"hover:scale-110 block hover:bg-gray-300 hover:text-gray-700 xl:mx-40  mx-10 duration-300 cursor-pointer border-2 rounded bg-gray-700 border-gray-700 p-2 text-custom text-white"}>
                                        Вибрати своє фото
                                    </div>
                                </label>

                            <input style={{visibility: "hidden"}} type="file" id={"userImage"}/>

                            <div className={"text-custom text-gray-600 text-xl mb-2 flex justify-between px-20"}>
                                <h4>Імʼя</h4>
                                <h4>{user.name}</h4>
                            </div>

                            <div className={"text-custom text-gray-600 text-xl mb-2 flex justify-between px-20"}>

                                <h4>Фамілія</h4>
                                <h4>{user.surname}</h4>
                            </div>

                            <div className={"text-custom text-gray-600 text-xl mb-2 flex justify-between px-20"}>

                                <h4>Адреса доставки</h4>
                                <h4>{user.address}</h4>
                            </div>

                            <div className={"text-custom text-gray-600 text-xl mb-2 flex justify-between px-20"}>

                                <h4>Мобільний телефон</h4>
                                <h4>{user.phoneNumber}</h4>
                            </div>

                            <div className={"text-custom text-gray-600 text-xl mb-2 flex justify-between px-20"}>

                                <h4>Електронна пошта</h4>
                                <h4>{user.mail}</h4>
                            </div>
                        </div>

                        <div className={"border border-2 border-gray-700 rounded-lg"}>

                        </div>
                    </div>
                </div>

            </Wrapper>
        </div>
    );
};

export default ProfilePage;