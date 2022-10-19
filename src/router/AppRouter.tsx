import React from 'react';
import {Route, Routes, useParams} from "react-router-dom";
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


const AppRouter = () => {


    function GetCategoryId() {
        let {id} = useParams();
        return <CatalogPage subcategoryId={id}/>;
    }

    function GetProductId() {
        let {id} = useParams();
        return <ProductPageV2 productId={Number(id)}/>
    }

    function GetProductEditId() {
        let {id} = useParams();
        return <EditProductPage productId={Number(id)}/>
    }

    return (
            <Routes>
                <Route element={<PrivateRouter/>}>
                    <Route path="/" element={
                        <MainPage/>
                    }/>
                    <Route path="/profile" element={
                        <ProfilePage/>
                    }/>
                    <Route path="/basket" element={
                        <BasketPage/>
                    }/>
                    <Route path="/catalog" element={
                        <CategoriesPage/>
                    }/>
                    <Route path="/catalog/:id" element={
                        <GetCategoryId/>
                    }/>
                    <Route path="/admin" element={
                        <AdminPage/>
                    }/>
                    <Route path="/catalog/product/:id" element={
                        <GetProductId/>
                    }/>

                    <Route path={"/edit-products"} element={
                        <AllProductsPage/>
                    }
                    />
                    <Route path={"/edit-products/:id"} element={
                        <GetProductEditId/>
                    }
                    />
                </Route>
                <Route path={"/login"} element={
                    <LogRegPage/>
                }
                />
            </Routes>
    );
};

export default AppRouter;