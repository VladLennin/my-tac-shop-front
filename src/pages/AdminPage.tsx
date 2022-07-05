import {Button, Modal, Toast} from 'flowbite-react';
import React, {FC, useState} from 'react';
import Wrapper from "../components/main-blocks/Wrapper";
import {IProduct, IToast, IUser} from "../Models/Models";
import ModalAddProduct from "../components/Modals/ModalAddProduct";
import ModalAddPCategory from "../components/Modals/ModalAddCategory";
import ModalAddPSubcategory from "../components/Modals/ModalAddSubcategory";

interface AdminPageProps {
    user: IUser;
}

const AdminPage: FC<AdminPageProps> = ({user}) => {

    const [modalProduct, setModalProduct] = useState<boolean>(false);

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

    return (
        <div>
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
            <Wrapper user={user}>
                <div className={"grid xl:grid-cols-2 grid-cols-1 gap-6 "}>
                    <div
                        onClick={openModalProduct}
                        className={"border-2 border-gray-700  rounded-lg p-4 hover:shadow-2xl hover:scale-105 duration-300"}>
                        Додати новий товар
                    </div>
                    <ModalAddProduct modal={modalProduct} closeModal={closeModalProduct}/>

                    <div
                        className={"border-2 border-gray-700  rounded-lg p-4 hover:shadow-2xl hover:scale-105 duration-300"}>
                        Замовлення
                    </div>

                    <div
                        onClick={openModalCategory}
                        className={"border-2 border-gray-700  rounded-lg p-4 hover:shadow-2xl hover:scale-105 duration-300"}>
                        Додати нову категорію
                    </div>
                    <ModalAddPCategory modal={modalCategory} closeModal={closeModalCategory} toasts={toasts}
                                       setToasts={setToasts}/>

                    <div
                        onClick={openModalSubcategory}
                        className={"border-2 border-gray-700  rounded-lg p-4 hover:shadow-2xl hover:scale-105 duration-300"}>
                        Додати нову підкатегорію
                    </div>
                    <ModalAddPSubcategory modal={modalSubcategory} closeModal={closeModalSubcategory}/>

                </div>
            </Wrapper>
        </div>
    );
};

export default AdminPage;