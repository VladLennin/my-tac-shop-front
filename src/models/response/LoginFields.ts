export class LoginFields {
    email: string;
    phone_number: string;
    password: string;

    constructor(email: string, phone_number: string, password: string) {
        this.email = email;
        this.phone_number = phone_number;
        this.password = password;
    }
}