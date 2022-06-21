import React, {FC} from 'react';
import Header from "./main-blocks/header";
import Main from "./main-blocks/main";
import Footer from "./main-blocks/footer";
import {IContact, ILink} from "../Models/Models";

interface WrapperProps {
    children: React.ReactNode;
}

const Wrapper: FC<WrapperProps> = ({children}) => {

    const linksAside: ILink[] = [
        new ILink("/", "bi bi-house-fill", "Головна"),
        new ILink("/catalog", "bi bi-bag-check-fill", "Каталог"),
        new ILink("/basket", "bi bi-basket-fill", "Кошик"),
        new ILink("/admin", "bi bi-tools", "Адмін")
    ]

    const infoLinks: ILink[] = [
        new ILink("/", "bi bi-credit-card", "Оплата"),
        new ILink("/", "bi bi-truck", "Доставка"),
        new ILink("/", "bi bi-check-circle", "Гарантія"),
        new ILink("/", "bi bi-lock", "Конфіденційність"),
    ]

    const socialLinks: ILink[] = [
        new ILink("/", "bi bi-instagram", "wild.tac.ua"),
        new ILink("/", "bi bi-telegram", "@wild.tac.ua"),
        new ILink("/", "bi bi-youtube", "wild.tac.ua"),
    ]


    const contacts: IContact[] = [
        new IContact("Владлен", "+380985165190"),
        new IContact("Світлана", "+380678038677"),
    ]
    return (
        <div>

            <Header/>
            <Main links={linksAside}>
                {children}
            </Main>
            <Footer contacts={contacts} infoLinks={infoLinks} socialLinks={socialLinks}/>
        </div>
    );
};

export default Wrapper;