import {Roles} from "./Models";

export class User {
    id: number;
    name: string;
    surname: string;
    address: string;
    phoneNumber: string;
    mail: string;
    password: string;
    role: Roles;

    constructor(id: number, name: string, role: Roles, surname: string, defaultAddress: string, number: string, mail: string, password: string) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.address = defaultAddress;
        this.phoneNumber = number;
        this.mail = mail;
        this.password = password;
        this.role = role
    }


}