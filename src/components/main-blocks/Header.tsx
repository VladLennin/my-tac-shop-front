import React, {FC, useContext} from 'react';
import {Link, Navigate} from "react-router-dom";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import {RoutesName} from "../../router/RoutesName";

interface HeaderProps {
}

const Header: FC<HeaderProps> = () => {

    const {authStore} = useContext(Context)

    return (
        <div className={"bg-[#495057] pt-[2vh] h-[12vh] "}>
            <div className={"shadow-2xl header text-[1.75vh] mx-[1vw]"}>

                <div className={"  bg-opacity-50 bg-gray-700 rounded-2xl m-[1vw]  logo-div "}>
                    <Link to="/">
                        <div className={"shop-logo rounded-2xl"}/>
                    </Link>
                </div>


                <div className={"mr-[1vw] flex  bg-opacity-50 bg-gray-700 p-3  rounded-lg h-[8vh] "}>
                    <div>

                        {authStore.isAuth ?
                            <Link to="/profile">
                                <div
                                    className={"flex  text-gray-900 hover:text-gray-50 duration-300  pl-5 pr-5 rounded-lg  justify-between mb-[0.25vh]"}>
                                    <h2>Профіль</h2>
                                    <i className="bi bi-person-circle ml-2"></i>
                                </div>
                            </Link>
                            :
                            <Link to="/login">
                                <div
                                    className={"flex  text-gray-900 hover:text-gray-50 duration-300  pl-5 pr-5 rounded-lg  justify-between mb-[0.25vh]"}>
                                    <h2>Увійти</h2>
                                    <i className="bi bi-person-circle ml-2"></i>
                                </div>
                            </Link>
                        }

                        <Link to="/basket">
                            <div
                                className={"flex  pl-5 pr-5 rounded-lg text-gray-900 hover:text-gray-50 duration-300 justify-between"}>
                                <h2>Кошик</h2>
                                <i className="bi bi-basket ml-2"></i>
                            </div>
                        </Link>
                    </div>
                    {
                        authStore.isAuth &&
                        <button className={"hover:text-white duration-100 text-xl"}
                                onClick={() => {
                                    authStore.logout();

                                }}>
                            <i className="bi bi-box-arrow-right"></i>
                        </button>
                    }

                </div>
            </div>
        </div>
    )
        ;
};

export default observer(Header);