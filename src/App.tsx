import React, {useState} from 'react';
import './App.css';
import './styles/main-blocks.css'
import './styles/modal.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage";
import ProfilePage from "./pages/ProfilePage";
import BasketPage from "./pages/BasketPage";
import CatalogPage from "./pages/CatalogPage";
import AdminPage from "./pages/AdminPage";
import ProductPage from "./pages/ProductPage";
import {ICharacteristic, IFeedback, IProduct, IUser} from "./Models/Models";

function App() {

    const [menuFlag, setMenuFlag] = useState<boolean>(false);

    const products: IProduct[] = [
        new IProduct(
            "Підсумок для магазинів",
            749.99,
            [
                new ICharacteristic("Країна", "Україна"),
                new ICharacteristic('Виробник', "М-ТАК"),
                new ICharacteristic("Кольори", ["Shadow Grey","Multi-cam","Olive","Black","Ranger Green"]),
                new ICharacteristic("Система моллі", "Присутня"),
                new ICharacteristic("Вага", "150г"),
            ],
            "21.06.22",
            0,
            [
                new IFeedback(new IUser("Vladlen", "Marchenko", "Moskovska 45/1", "0985165190", "markelovwtf7@gmail.com"),
                    "Добра якість: низька ціна",
                    4,
                    "21.06.2022",
                    0,
                    0
                )
            ],
            [
                "data:image/jpeg;base64,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",
                "https://images.prom.ua/3783336300_w640_h640_podsumok-trojnoj-dlya.jpg"
            ],
            "https://www.youtube.com/embed/nvKMawVu-m4",
            "Підсумок для магазинів АК закритий потрійною оливою стане незамінним елементом тактичного спорядження для військових, співробітників правоохоронних органів та силових структур. Ця модель закритого типу. Для зручності вилучення магазинів клапани мають невеликі хлястики. Як основний матеріал використовується міцна кордура. Додаткову міцність конструкції забезпечує посилена нитка. Система кріплення MOLLE дозволяє фіксувати підсумок на розвантажувальних жилетах, тактичних поясах та іншому спорядженні. Колір цієї моделі – олива. Він добре поєднується з різними типами камуфляжу, чи то ММ-14 або MultiCam.",
            10,
            0
        ),

    ]

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
                    <Route path="/product" element={<ProductPage product={products[0]}/>}/>
                </Routes>

            </BrowserRouter>
        </div>
    );
}

export default App;
