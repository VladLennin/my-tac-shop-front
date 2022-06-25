import React from 'react';
import './App.css';
import './styles/main-blocks.css'
import './styles/modal.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import {BrowserRouter, Route, Routes, useParams} from "react-router-dom";
import MainPage from "./pages/MainPage";
import ProfilePage from "./pages/ProfilePage";
import BasketPage from "./pages/BasketPage";
import CategoriesPage from "./pages/CategoriesPage";
import AdminPage from "./pages/AdminPage";
import { IUser, Picture} from "./Models/Models";
import ProductPageV2 from "./pages/ProductPageV2";
import CatalogPage from "./pages/CatalogPage";

function App() {

    const user: IUser = new IUser(
        new Picture("default"), "Vladlen", "Marchenko", "Pr.Peremogy,20",
        "380985165190", "markelovwtf7@gmail.com",
    )

    function GetCategoryId() {
        let {id} = useParams();
        return <CatalogPage subcategoryId={id}/>;
    }

    function GetProductId() {
        let {id} = useParams();
        return <ProductPageV2 productId={Number(id)}/>
    }

    return (
        <div className="App bg-[#495057]">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={
                        <MainPage/>
                    }/>
                    <Route path="/profile" element={
                        <ProfilePage user={user}/>
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
                </Routes>

            </BrowserRouter>
        </div>
    );
}

export default App;
