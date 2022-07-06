import React, {useEffect, useState} from 'react';
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
import {ICategory, IUser, Picture, Roles} from "./Models/Models";
import ProductPageV2 from "./pages/ProductPageV2";
import CatalogPage from "./pages/CatalogPage";
import API from "./api";

function App() {

    const [user, setUser] = useState<IUser>(new IUser(
            "Vladlen", Roles.ADMIN, "Marchenko", "Pr.Peremogy,20",
            "380985165190", "markelovwtf7@gmail.com",
        )
    )

    const changeUser = (user: IUser) => {
        setUser(user);
    }

    function GetCategoryId() {
        let {id} = useParams();
        return <CatalogPage user={user} subcategoryId={id}/>;
    }

    function GetProductId() {
        let {id} = useParams();
        return <ProductPageV2 user={user} productId={Number(id)}/>
    }


    return (
        <div className="App bg-[#495057]">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={
                        <MainPage user={user}/>
                    }/>
                    <Route path="/profile" element={
                        <ProfilePage user={user} setUser={changeUser}/>
                    }/>
                    <Route path="/basket" element={
                        <BasketPage user={user}/>
                    }/>
                    <Route path="/catalog" element={
                        <CategoriesPage user={user}/>
                    }/>
                    <Route path="/catalog/:id" element={
                        <GetCategoryId/>
                    }/>
                    <Route path="/admin" element={
                        <AdminPage  user={user}/>
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
