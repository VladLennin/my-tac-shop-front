import {Roles} from "./Models";

export class User {
    id: number;
    name: string;
    surname: string;
    address: string;
    phoneNumber: string;
    email: string;
    password: string;
    role: Roles;

    constructor(id: number, name: string, role: Roles, surname: string, defaultAddress: string, number: string, email: string, password: string) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.address = defaultAddress;
        this.phoneNumber = number;
        this.email = email;
        this.password = password;
        this.role = role
    }


}