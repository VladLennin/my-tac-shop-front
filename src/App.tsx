import React, {useState} from 'react';
import './App.css';
import './styles/main-blocks.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage";
import ProfilePage from "./pages/ProfilePage";
import BasketPage from "./pages/BasketPage";
import CatalogPage from "./pages/CatalogPage";
import AdminPage from "./pages/AdminPage";

function App() {

    const [menuFlag, setMenuFlag] = useState<boolean>(false);

    return (
        <div className="App bg-[#495057]">
            <BrowserRouter>
                <Routes>
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
                        <CatalogPage/>
                    }/>
                    <Route path="/admin" element={
                        <AdminPage/>
                    }/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
