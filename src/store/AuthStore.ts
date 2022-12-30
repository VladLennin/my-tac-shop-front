import {User} from "../models/User";
import {makeAutoObservable} from "mobx";
import AuthService from "../services/AuthService";
import axios from "axios";
import {AuthResponse} from "../models/response/AuthResponse";
import {API_URL} from "../http";


export default class AuthStore {
    user = {} as User;
    isAuth = false;
    isLoading = false;


    constructor() {
        makeAutoObservable(this)
    }

    setAuth(bool: boolean) {
        this.isAuth = bool;
    }

    setUser(user: User) {
        this.user = user;
    }

    setLoading(bool: boolean) {
        this.isLoading = bool;
    }


    async login(email: string, phone_number: string, password: string) {
        try {
            const response = await AuthService.login(email, phone_number, password)
            console.log(response)
            localStorage.setItem("token", response.data.accessToken);
            this.setAuth(true)
            this.setUser(response.data.user)
            return "200"
        } catch (e: any) {
            console.log(e.response)
            return "При авторизацаії щось пішло не так"
        }
    }

    async registration(email: string, phone_number: string, password: string) {
        try {
            const response = await AuthService.registration(email, phone_number, password)
            console.log(response)
            return "200"
        } catch (e: any) {
            console.log(e.response)
            return e.response.data.message
        }
    }

    async logout() {
        try {
            const response = await AuthService.logout()
            console.log(response)
            localStorage.removeItem("token");
            this.setAuth(false)
            this.setUser({} as User)
        } catch (e: any) {
            console.log(e.response)
        }
    }

    async checkAuth() {
        this.setLoading(true);
        try {
            const response = await axios.get<AuthResponse>(`${API_URL}/auth/refresh`, {withCredentials: true})

            console.log(response)
            localStorage.setItem("token", response.data.accessToken)

            this.setAuth(true)
            this.setUser(response.data.user)
        } catch (e: any) {
            console.log(e.response)
        } finally {
            this.setLoading(false)
        }
    }

    async getUser() {
        this.setLoading(true);
        try {
            const response = await AuthService.getUser()
            console.log(response)
            this.setAuth(true)
            this.setUser(response.data)
        } catch (e: any) {
            console.log(e.response)
        } finally {
            this.setLoading(false)
        }
    }

}