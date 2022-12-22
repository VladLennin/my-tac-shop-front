import $api from "../http";
import {AxiosResponse} from "axios";
import {AuthResponse} from "../models/response/AuthResponse";
import {RoutesName} from "../router/RoutesName";
import {User} from "../models/User";


export default class AuthService {

    static async login(email: string, phone_number: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>(RoutesName.AUTH_LOGIN, {email, phone_number, password})
    }

    static async registration(email: string, phone_number: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>(RoutesName.AUTH_REGISTRATION, {email, phone_number, password})
    }

    static async logout(): Promise<void> {
        return $api.post(RoutesName.LOGOUT)
    }

    static async getUser(): Promise<AxiosResponse<User>>{
        return $api.get<User>(RoutesName.PROFILE);
    }

}