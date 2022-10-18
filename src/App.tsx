import React, {useState} from 'react';
import './styles/main-blocks.css'
import './styles/modal.css'
import './index.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import {BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ProfilePage from "./pages/ProfilePage";
import BasketPage from "./pages/BasketPage";
import CategoriesPage from "./pages/CategoriesPage";
import AdminPage from "./pages/AdminPage";
import {IUser, Roles} from "./models/Models";
import ProductPageV2 from "./pages/ProductPageV2";
import CatalogPage from "./pages/CatalogPage";
import LogRegPage from "./pages/LogRegPage";
import EditProductPage from "./pages/EditProductPage";
import AllProductsPage from "./pages/AllProductsPage";
import AppRouter from "./router/AppRouter";
import Wrapper from "./components/main-blocks/Wrapper";

function App() {
    return (
        <div className="App bg-[#495057]">
            <Wrapper>
                <AppRouter/>
            </Wrapper>
        </div>
    );
}

export default App;
