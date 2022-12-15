import React from 'react';
import {Route, Routes} from "react-router-dom";
import LogRegPage from "../pages/LogRegPage";
import MainPage from "../pages/MainPage";
import ProfilePage from "../pages/ProfilePage";
import BasketPage from "../pages/BasketPage";
import CategoriesPage from "../pages/CategoriesPage";
import AdminPage from "../pages/AdminPage";
import AllProductsPage from "../pages/AllProductsPage";
import CatalogPage from "../pages/CatalogPage";
import ProductPageV2 from "../pages/ProductPageV2";
import EditProductPage from "../pages/EditProductPage";
import PrivateRouter from "./PrivateRouter";
import {RoutesName} from "./index";
import ErrorPage from "../pages/ErrorPage";


const AppRouter = () => {
    return (
        <Routes>
            <Route element={<PrivateRouter/>}>
                <Route path={RoutesName.MAIN} element={
                    <MainPage/>
                }/>
                <Route path={RoutesName.PROFILE} element={
                    <ProfilePage/>
                }/>
                <Route path={RoutesName.BASKET} element={
                    <BasketPage/>
                }/>

                <Route path={RoutesName.ADMIN} element={
                    <AdminPage/>
                }/>
                <Route path={RoutesName.EDIT_PRODUCTS} element={
                    <AllProductsPage/>
                }
                />
                <Route path={RoutesName.EDIT_PRODUCTS + "/:id"} element={
                    <EditProductPage/>
                }
                />
            </Route>
            <Route path={RoutesName.LOGIN} element={
                <LogRegPage/>
            }
            />
            <Route path={RoutesName.CATALOG} element={
                <CategoriesPage/>
            }/>
            <Route path={RoutesName.CATALOG + "/:id"} element={
                <CatalogPage/>
            }/>
            <Route path={RoutesName.PRODUCT_PAGE + "/:id"} element={
                <ProductPageV2/>
            }/>
        </Routes>
    );
};

export default AppRouter;