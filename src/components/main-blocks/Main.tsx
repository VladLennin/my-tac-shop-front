import React, {FC} from 'react';
import {ILink, IUser, Roles} from "../../models/Models";
import {Link} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../store/hooks/hooks";
import {changeMenu1, changeMenu2} from "../../store/menuSlice";

interface MainProps {
    children: React.ReactNode;
    links: ILink[];
}

const Main: FC<MainProps> = ({children, links}) => {

    const flag1 = useAppSelector((state) => state.menu.value1)
    const flag2 = useAppSelector((state) => state.menu.value2)
    const user = useAppSelector((state)=>state.user.value)
    const dispatch = useAppDispatch()

    return (
        <div className={"ml-[1vw]"}>
            <div
                className={" block xl:hidden  text-[2vh] bg-opacity-50  p-3  h-[5vh] pb-[4.5vh] "}>
                <div className={"flex justify-between  pb-5"}>
                    <button onClick={() => dispatch(changeMenu2())}
                            className={"mt-2 text-[5vh] hover:text-white duration-300"}>
                        <i className="bi bi-list"></i>
                    </button>
                </div>
            </div>

            <div className={"flex align-top mt-[2vh]  main"}>
                <div className={"flex flex-col "}>
                    <aside
                        className={(flag1 ? "xl:w-[14vw] min-w-[225px]" : "xl:w-[5vw] min-w-[85px]") + "  hidden xl:block align-middle rounded-lg text-[2vh]   duration-500  border border-2   border-gray-600 bg-stone-50 shadow-2xl  aside-font w-[18vw] pl-[1.25vw] px-[1vw] "}>

                        {links.slice(0, links.length - 1).map(link =>
                            <Link key={link.href} to={link.href}>
                                <div
                                    className={(flag1 ? " justify-between" : "justify-center") + " hover:bg-gray-500 hover:text-white  duration-300 flex  align-middle  p-[1vh] rounded-lg mt-[1vh] mb-[1vh] "}>
                                    {flag1 ? <h4>{link.name}</h4> : ""}
                                    <i className={link.icon + (flag1 ? " ml-[0.5vw]" : " text-[2.5vh]")}></i>
                                </div>

                            </Link>
                        )}
                        {user.role === Roles.ADMIN ?
                            <Link key={links[links.length - 1].href} to={links[links.length - 1].href}>
                                <div
                                    className={(flag1 ? " justify-between" : "justify-center") + " hover:bg-gray-500 hover:text-white  duration-300 flex  align-middle  p-[1vh] rounded-lg mt-[1vh] mb-[1vh] "}>
                                    {flag1 ? <h4>{links[links.length - 1].name}</h4> : ""}
                                    <i className={links[links.length - 1].icon + (flag1 ? " ml-[0.5vw]" : " text-[2.5vh]")}></i>
                                </div>

                            </Link> : ""
                        }


                    </aside>
                    <button className={" xl:block hidden "} onClick={() => dispatch(changeMenu1())}>
                        <div className={"bg-stone-50 rounded-md shadow-2xl hover:bg-gray-500 hover:text-white"}>
                            {flag1
                                ?
                                <i className="bi bi-arrow-left text-[2.5vh]"></i>
                                :
                                <i className="bi bi-arrow-right text-[2.5vh]"></i>
                            }
                        </div>
                    </button>
                </div>
                <div
                    className={"absolute bg-gray-400 p-5 rounded-lg duration-200 left-[5px] border-gray z-20" + (flag2 ? " " : " hidden ")}>
                    {flag2 ?
                        links.map(link =>
                            <Link key={link.href} to={link.href}>
                                <div
                                    className={"bg-gray-500 text-white scale-110 duration-300 flex justify-between p-[1vh]  rounded-lg mt-2"}>
                                    <h4>{link.name}</h4>
                                    <i className={link.icon + (flag2 ? " ml-[0.5vw]" : " ")}></i>
                                </div>
                            </Link>) : ""
                    }
                </div>

                <div
                    className={(flag2 ? "xl:w-[81vw]" : "xl:w-[91vw]") + " w-[95vw] duration-300 border   border-gray-600 px-[3vw] py-[3vh] mx-[1vw] mb-[2vh] bg-stone-50 shadow-2xl rounded-lg"}>

                    {children}
                </div>
            </div>
        </div>

    );
};

export default Main;