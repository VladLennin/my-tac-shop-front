import React, {FC} from 'react';
import {Link} from "react-router-dom";
import {useAuth} from "../../router/PrivateRouter";

interface HeaderProps {
}

const Header: FC<HeaderProps> = () => {
    return (
        <div className={"bg-[#495057] pt-[2vh] h-[12vh] "}>
            <div className={"shadow-2xl header text-[1.75vh] mx-[1vw]"}>

                <div className={"  bg-opacity-50 bg-gray-700 rounded-2xl m-[1vw]  logo-div "}>
                    <Link to="/">
                        <div className={"shop-logo rounded-2xl"}/>
                    </Link>
                </div>

                <div className={"flex align-middle"}>
                    <div className={"mr-[1vw]  bg-opacity-50 bg-gray-700 p-3  rounded-lg h-[8vh] "}>


                        {useAuth()
                            ?
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
                </div>

            </div>

        </div>
    );
};

export default Header;