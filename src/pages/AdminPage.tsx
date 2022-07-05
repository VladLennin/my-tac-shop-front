import {Button, Modal} from 'flowbite-react';
import React, {FC, useState} from 'react';
import Wrapper from "../components/main-blocks/Wrapper";
import {IProduct, IUser} from "../Models/Models";
import ModalAddProduct from "../components/ModalAddProduct";

interface AdminPageProps {
    user: IUser;
}

const AdminPage: FC<AdminPageProps> = ({user}) => {

    function openModal() {
        setModal(true);
    }

    function closeModal() {
        setModal(false);
    }

    const [modal, setModal] = useState<boolean>(false);


    return (
        <div>
            <Wrapper user={user}>
                <div className={"grid xl:grid-cols-2 grid-cols-1 gap-6 "}>

                    <div
                        onClick={openModal}
                        className={"border-2 border-gray-700  rounded-lg p-4 hover:shadow-2xl hover:scale-105 duration-300"}>
                        Додати новий товар
                    </div>
                    <ModalAddProduct modal={modal} closeModal={closeModal}/>

                    <div
                        className={"border-2 border-gray-700  rounded-lg p-4 hover:shadow-2xl hover:scale-105 duration-300"}>
                        Замовлення
                    </div>


                </div>
            </Wrapper>
        </div>
    );
};

export default AdminPage;