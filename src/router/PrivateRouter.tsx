import React from 'react';
import {Outlet} from "react-router-dom";
import LogRegPage from "../pages/LogRegPage";

export const useAuth = () => {
    const user = {loggedIn: true}
    return user && user.loggedIn;
};

const PrivateRouter = () => {
    const isAuth = useAuth();
    return isAuth ? <Outlet/> :<LogRegPage/>;
};

export default PrivateRouter;