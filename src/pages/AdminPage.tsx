import {Toast} from 'flowbite-react';
import React, {FC, useEffect, useState} from 'react';
import Wrapper from "../components/main-blocks/Wrapper";
import {ICategory, IToast, IUser} from "../models/Models";
import ModalAddProduct from "../components/Modals/ModalAddProduct";
import ModalAddCategory from "../components/Modals/ModalAddCategory";
import ModalAddSubcategory from "../components/Modals/ModalAddSubcategory";
import API from "../api"
import {Link} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../store/hooks/hooks";

interface AdminPageProps {
}

const AdminPage: FC<AdminPageProps> = () => {

    const [modalProduct, setModalProduct] = useState<boolean>(false);
    const user = useAppSelector((state) => state.user.value)
    const dispatch = useAppDispatch()

    function openModalProduct() {
        setModalProduct(true);
    }

    function closeModalProduct() {
        setModalProduct(false);
    }


    const [modalCategory, setModalCategory] = useState<boolean>(false);

    function openModalCategory() {
        setModalCategory(true);
    }

    function closeModalCategory() {
        setModalCategory(false);
    }

    const [modalSubcategory, setModalSubcategory] = useState<boolean>(false);

    function openModalSubcategory() {
        setModalSubcategory(true);
    }

    function closeModalSubcategory() {
        setModalSubcategory(false);
    }

    const [toasts, setToasts] = useState<IToast[]>([])

    const [categories, setCategories] = useState<ICategory[]>([]);

    function getCategories() {
        API.get("/category").then(res => {
            setCategories(res.data)
        }).catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        getCategories()
    }, [])

    return (
        <>
            <div className={"absolute right-5 top-5 z-50 duration-300"}>
                {toasts.map((toast) => (
                    <div key={toast.index} className={"mt-2"}>
                        <Toast>
                            <i className={toast.icon}></i>
                            <div className="ml-3 text-sm font-normal">
                                {toast.content}
                            </div>
                            <Toast.Toggle/>
                        </Toast>
                    </div>
                ))}
            </div>

            <div className={"grid xl:grid-cols-2 grid-cols-1 gap-6 "}>
                <div
                    onClick={openModalProduct}
                    className={"border-2 border-gray-700  rounded-lg p-4 hover:shadow-2xl hover:scale-105 duration-300 text-center cursor-pointer"}>
                    Додати новий товар
                </div>
                <ModalAddProduct categories={categories} toasts={toasts} setToasts={setToasts} modal={modalProduct}
                                 closeModal={closeModalProduct}/>

                <div
                    className={"border-2 border-gray-700  rounded-lg p-4 hover:shadow-2xl hover:scale-105 duration-300 text-center cursor-pointer p-4"}>
                    Замовлення
                </div>

                <div
                    onClick={openModalCategory}
                    className={"border-2 border-gray-700  rounded-lg p-4 hover:shadow-2xl hover:scale-105 duration-300 text-center cursor-pointer"}>
                    <h3>Додати нову категорію</h3>
                </div>
                <ModalAddCategory getCategories={getCategories} modal={modalCategory}
                                  closeModal={closeModalCategory} toasts={toasts}
                                  setToasts={setToasts}/>

                <div
                    onClick={openModalSubcategory}
                    className={"border-2 border-gray-700  rounded-lg p-4 hover:shadow-2xl hover:scale-105 duration-300 text-center cursor-pointer"}>
                    Додати нову підкатегорію
                </div>
                <ModalAddSubcategory categories={categories} getCategories={getCategories} toasts={toasts}
                                     setToasts={setToasts}
                                     modal={modalSubcategory}
                                     closeModal={closeModalSubcategory}/>
                <Link to={"/edit-products"}>
                    <div
                        className={"border-2 border-gray-700  rounded-lg p-4 hover:shadow-2xl hover:scale-105 duration-300 text-center cursor-pointer"}>
                        <h3>Редагування товарів</h3>
                    </div>
                </Link>
            </div>
        </>
    );
};

export default AdminPage;