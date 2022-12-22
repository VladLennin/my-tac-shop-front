import React, {FC, useContext} from 'react';
import {Context} from "../index";
import {Navigate, Outlet, useLocation} from "react-router-dom";
import {RoutesName} from "./RoutesName";

interface AuthProps {

}

const RequireAuth: FC<AuthProps> = ({}) => {
    const {authStore} = useContext(Context)
    const location = useLocation()
    return (
        authStore.isAuth
            ?
            <Outlet/>
            :
            <Navigate to={RoutesName.LOGIN} state={{from: location}} replace/>
    )
};

export default RequireAuth;