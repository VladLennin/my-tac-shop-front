import React from 'react';
import {Navigate, Outlet} from "react-router-dom";
import {RoutesName} from "./index";

export const useAuth = () => {
    const user = {loggedIn: true}
    return  user.loggedIn;
};

const PrivateRouter = () => {
    const isAuth = useAuth();
    return isAuth ? <Outlet/> :<Navigate to={RoutesName.LOGIN}/>;
};

export default PrivateRouter;