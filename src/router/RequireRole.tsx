import React, {FC, useContext} from 'react';
import {Navigate, Outlet, useLocation} from "react-router-dom";
import {RoutesName} from "./RoutesName";
import {Roles} from "../models/Models";
import {Context} from "../index";

interface RequireRolesProps {
    allowedRole: Roles
}

const RequireRole: FC<RequireRolesProps> = ({allowedRole}) => {
    const {authStore} = useContext(Context)
    const location = useLocation()
    return (
        authStore?.user?.role === allowedRole
            ?
            <Outlet/>
            :
            <Navigate to={RoutesName.UNAUTHORIZED} state={{from: location}} replace/>
    );
};

export default RequireRole;