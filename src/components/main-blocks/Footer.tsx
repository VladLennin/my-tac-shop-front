import React, {FC} from 'react';
import {IContact, ILink} from "../../models/Models";
import {Link} from "react-router-dom";

interface FooterProps {
    contacts: IContact[];
    infoLinks: ILink[];
    socialLinks: ILink[];
}

const Footer: FC<FooterProps> = ({contacts, infoLinks, socialLinks}) => {
    return (
        <div className={"text-custom text-[2vh]  bg-white "}>

            <div className={" flex xl:flex-row flex-col w-full xl:justify-around justify-center align-middle p-[1vw]"}>
                <div className={"flex flex-col px-2 pt-2"}>
                    <h5 className={"mb-[0.5vh]"}>Наша адреса: проспект Перемоги, 40</h5>
                    <iframe
                        title={"Youtube video"}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d668.8933614459017!2d30.54348507637107!3d50.429790717937045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf0c1e7966fd%3A0xdd3e5c0e13d4f73a!2zNTDCsDI1JzQ2LjMiTiAzMMKwMzInMzUuNyJF!5e0!3m2!1sru!2sua!4v1655710836017!5m2!1sru!2sua"
                        className={"xl:w-[15vw] xl:h-[15vh] border-2 "} loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>

                </div>

                <div className={"flex xl:flex-col justify-around mt-5"}>
                    <div>
                        {contacts.map(contact =>
                            <h5 key={contact.number}>{contact.number} - {contact.name}</h5>
                        )}
                    </div>
                    <div>
                        {socialLinks.map((link,index) =>
                            <div key={index} className={"flex hover:scale-110 duration-200"}>
                                <a href={link.href}><h5 className={"mr-[0.3vw]"}>{link.name}</h5></a>
                                <i className={link.icon}></i>
                            </div>
                        )}
                    </div>
                </div>

                <div className={"xl:flex-col flex justify-around  my-5"}>
                    {infoLinks.map((link,index) =>
                        <div key={index} className={"hover:scale-110 duration-200"}>
                            <Link to={link.href}>{link.name}</Link>
                            <i className={link.icon + " ml-[0.25vw]"}></i>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Footer;