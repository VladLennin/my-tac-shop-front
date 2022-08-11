import React, {FC, useState} from 'react';
// @ts-ignore
import logo from "./../assets/header-logo.png"
// @ts-ignore
import backMultiCam from "./../assets/multicam.jpg"

interface LoginPageProps {

}

const LogRegPage: FC<LoginPageProps> = ({}) => {

    const [isRegistration, setIsRegistration] = useState<boolean>(true);
    const [isPhone, setIsPhone] = useState<boolean>(false);

    return (
        <div className={"h-[94vh] bg-white"}>
            <div
                className={"flex flex-col justify-center items-center w-[96vw] h-[90vh] rounded-3xl mx-auto my-[4vh] shadow-2xl border-2 border-gray-400"}
                style={{backgroundImage: `url(${backMultiCam})`, backgroundSize: "cover"}}>
                <div
                    className={(isRegistration ? "  " : "mt-[9vh] ") + "absolute duration-1000 border-2 border-gray-500 text-center text-3xl mb-[25vh] bg-white shadow-2xl rounded-2xl p-5 text-custom"}>
                    <p>Увійдіть у свій профіль</p>
                    <hr/>
                    <div className={" text-xl flex items-center justify-between m-3"}>
                        <label htmlFor="">
                            <button className={(isPhone?"":"text-blue-600")} onClick={() => {
                                setIsPhone(false);
                            }}>Пошта
                            </button>
                            /
                            <button className={(isPhone?"text-blue-600":"")} onClick={() => {
                                setIsPhone(true);
                            }}>Телефон</button>
                        </label>
                        <input placeholder={"Введіть телефон"} className={(isPhone?" ": " hidden")+" duration-300 rounded ml-5"} type="text"/>
                        <input placeholder={"Введіть пошту"} className={(isPhone?" hidden ": "") + " duration-300 rounded ml-5"} type="email"/>

                    </div>
                    <div className={" text-xl  flex items-center  justify-between m-3"}>
                        <label htmlFor="">Пароль</label>
                        <input placeholder={"Введіть пароль"} className={"rounded ml-5"} type="password"/>
                    </div>
                    <hr/>
                    <button
                        className={" mt-3 border-[3px] text-2xl hover:scale-110 hover:border-yellow-300 duration-200 rounded border-blue-600 px-6 py-2"}>
                        Увійти
                    </button>
                    <div className={"text-sm mt-2"}>

                        <button className={"hover:text-blue-500 duration-200"} onClick={() => {
                            setIsRegistration(!isRegistration)
                        }}>
                            Не маєте профілю? Саме час створити!
                        </button>
                    </div>
                </div>


                <div
                    className={(isRegistration ? "mb-[200vh] opacity-0":" ")+ " opacity-100 duration-1000  absolute  border-2 border-gray-500 text-center text-3xl mb-[25vh] bg-white shadow-2xl rounded-2xl p-5 text-custom"}>
                    <p>Створіть свій профіль</p>
                    <hr/>
                    <div className={" text-xl  flex items-center  justify-between m-3"}>
                        <label htmlFor="">
                            <button className={(isPhone?"":"text-blue-600")} onClick={() => {
                                setIsPhone(false);
                            }}>Пошта
                            </button>
                            /
                            <button className={(isPhone?"text-blue-600":"")} onClick={() => {
                                setIsPhone(true);
                            }}>Телефон</button>
                        </label>
                        <input placeholder={"Введіть телефон"} className={(isPhone?" ": " hidden")+" duration-300 rounded ml-5"} type="text"/>
                        <input placeholder={"Введіть пошту"} className={(isPhone?" hidden ": "") + " duration-300 rounded ml-5"} type="email"/>

                    </div>
                    <div className={" text-xl  flex items-center  justify-between m-3"}>
                        <label htmlFor="">Пароль</label>
                        <input placeholder={"Введіть пароль"} className={"rounded ml-5"} type="password"/>
                    </div>

                    <div className={" text-xl  flex items-center  justify-between m-3"}>
                        <label htmlFor="">Повторіть пароль</label>
                        <input placeholder={"Повторіть пароль"} className={"rounded ml-5"} type="password"/>
                    </div>
                    <hr/>
                    <button
                        className={" mt-3 border-[3px] text-2xl hover:scale-110 hover:border-yellow-300 duration-200 rounded border-blue-600 px-6 py-2"}>
                        Зареєструватися
                    </button>
                    <div className={"text-sm mt-2"}>
                        <button className={"hover:text-blue-500 duration-200"} onClick={() => {
                            setIsRegistration(!isRegistration)
                        }}>
                            Вже маєте профіль? Увійдіть у нього!
                        </button>
                    </div>
                </div>

                <div className={"mt-[75%] xl:mt-[25%]"}>
                    <img className={"h-[15vh] xl:h-[25vh]"} src={logo} alt=""/>
                </div>
            </div>
        </div>

    );
};

export default LogRegPage;