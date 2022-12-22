import React from 'react';
import {Route, Routes} from "react-router-dom";
import {RoutesName} from "./RoutesName";
import LogRegPage from "../pages/PublicPages/LogRegPage";
import MainPage from "../pages/PublicPages/MainPage";
import CatalogPage from "../pages/PublicPages/CatalogPage";
import EditProductPage from "../pages/PrivatePages/EditProductPage";
import CategoriesPage from "../pages/PublicPages/CategoriesPage";
import ProfilePage from "../pages/PrivatePages/ProfilePage";
import BasketPage from "../pages/PrivatePages/BasketPage";
import AdminPage from "../pages/PrivatePages/AdminPage";
import AllProductsPage from "../pages/PrivatePages/AllProductsPage";
import NotFoundPage from "../pages/PublicPages/NotFoundPage";
import RequireAuth from "./RequireAuth";
import {Roles} from "../models/Models";
import RequireRole from "./RequireRole";
import Unauthorized from "../pages/PublicPages/Unauthorized";
import ProductPageV2 from "../pages/PublicPages/ProductPageV2";

const AppRouter = () => {
    return (

        <Routes>
            {/* public routes */}
            <Route path={RoutesName.LOGIN} element={<LogRegPage/>}/>
            <Route path={RoutesName.MAIN} element={<MainPage/>}/>
            <Route path={RoutesName.CATALOG + "/:id"} element={<CatalogPage/>}/>
            <Route path={RoutesName.CATALOG} element={<CategoriesPage/>}/>
            <Route path={RoutesName.PRODUCT_PAGE + "/:id"} element={<ProductPageV2/>}/>

            <Route element={<RequireAuth/>}>
                <Route path={RoutesName.PROFILE} element={<ProfilePage/>}/>
                <Route path={RoutesName.BASKET} element={<BasketPage/>}/>
            </Route>

            <Route element={<RequireRole allowedRole={Roles.ADMIN}/>}>
                <Route path={RoutesName.ADMIN} element={<AdminPage/>}/>
                <Route path={RoutesName.EDIT_PRODUCTS} element={<AllProductsPage/>}/>
                <Route path={RoutesName.EDIT_PRODUCTS + "/:id"} element={<EditProductPage/>}/>
            </Route>

            <Route path={RoutesName.UNAUTHORIZED} element={<Unauthorized/>}/>

            {/* catch all */}
            <Route path="*" element={<NotFoundPage/>}/>

        </Routes>
    );
};

export default AppRouter;