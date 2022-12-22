import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/main-blocks.css'
import './styles/modal.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import App from './App';
import {Provider} from "react-redux"
import 'flowbite';
import {BrowserRouter} from "react-router-dom";
import AuthStore from "./store/AuthStore";
import MenuStore from "./store/MenuStore";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

interface State {
    authStore: AuthStore
    menuStore: MenuStore
}

const authStore = new AuthStore();
const menuStore = new MenuStore();
export const Context = createContext<State>({authStore, menuStore})

root.render(
    <Context.Provider value={{authStore, menuStore}}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Context.Provider>
);
