import React, {FC} from 'react';
import {Link} from "react-router-dom";

interface HeaderProps {
}

const Header: FC<HeaderProps> = () => {


    return (
        <div className={"bg-[#495057] pt-[2vh] h-[12vh] "}>
            <div className={"shadow-2xl header text-[1.75vh] mx-[1vw]"}>

                <div className={ "  bg-opacity-50 bg-gray-700 rounded-2xl m-[1vw]  logo-div "}>
                    <Link to="/">
                        <div className={"shop-logo rounded-2xl"}/>
                    </Link>
                </div>

                <div className={"flex align-middle"}>
                    {/*<div*/}
                    {/*    className={"hidden xl:block mr-[1vw] text-[2vh] bg-opacity-50 bg-gray-700 p-3 rounded-[0.5vw] h-[5.5vh]"}>*/}
                    {/*    <div className={"flex align-middle"}>*/}
                    {/*        <input className={(searchFlag ? 'xl:w-[25vw]' : 'opacity-0 xl:w-0') + " h-[3vh] rounded-lg duration-500"}*/}
                    {/*               type="text"/>*/}
                    {/*        <button onClick={() => setSearchFlag(!searchFlag)}*/}
                    {/*                className={'search-btn-' + (searchFlag ? 'active' : 'disable') + " text-gray-900 hover:text-gray-50 duration-300 "}>*/}
                    {/*            <i className="bi bi-search"></i>*/}
                    {/*            Пошук*/}
                    {/*        </button>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    <div className={"mr-[1vw]  bg-opacity-50 bg-gray-700 p-3  rounded-lg h-[8vh] "}>

                        <Link to="/profile">
                            <div className={"flex  text-gray-900 hover:text-gray-50 duration-300  pl-5 pr-5 rounded-lg  justify-between mb-[0.25vh]"}>
                                <h2>Профіль</h2>
                                <i className="bi bi-person-circle ml-2"></i>
                            </div>
                        </Link>
                        <a href="/basket">
                            <div className={"flex  pl-5 pr-5 rounded-lg text-gray-900 hover:text-gray-50 duration-300 justify-between"}>
                                <h2>Кошик</h2>
                                <i className="bi bi-basket ml-2"></i>
                            </div>
                        </a>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Header;