import React, {useState} from 'react';
import './styles/main-blocks.css'
import './styles/modal.css'
import './index.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import {BrowserRouter, Route, Routes, useParams} from "react-router-dom";
import MainPage from "./pages/MainPage";
import ProfilePage from "./pages/ProfilePage";
import BasketPage from "./pages/BasketPage";
import CategoriesPage from "./pages/CategoriesPage";
import AdminPage from "./pages/AdminPage";
import {IUser, Roles} from "./models/Models";
import ProductPageV2 from "./pages/ProductPageV2";
import CatalogPage from "./pages/CatalogPage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";

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
                        <AdminPage user={user}/>
                    }/>
                    <Route path="/catalog/product/:id" element={
                        <GetProductId/>
                    }/>
                    <Route path={"/login"} element={
                        <LoginPage/>
                    }/>
                    <Route path={"/registration"} element={
                        <RegistrationPage/>
                    }/>
                </Routes>

            </BrowserRouter>
        </div>
    );
}

export default App;
