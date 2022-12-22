import axios from 'axios';
import {AuthResponse} from "../models/response/AuthResponse";
import Cookies from "universal-cookie";

export const API_URL = `http://localhost:8080/api/v1`//локальный бек
// export const API_URL = `http://172.20.10.4:8080/api/v1`//виталя на моей точке бек
// export const API_URL = `http://192.168.43.182:8080/api/v1`//виталя на моей его бек


const $api = axios.create({
    baseURL: API_URL,
    withCredentials: true,
});
//
$api.interceptors.request.use((config) => {
    // @ts-ignore
    config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`
    return config;
})

$api.interceptors.response.use((config) => {
    return config;
}, async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true;
        try {
            const response = await axios.get<AuthResponse>(`${API_URL}/auth/refresh`, {withCredentials: true})
            localStorage.setItem('token', response.data.accessToken)
            return $api.request(originalRequest)
        } catch (e) {
            console.log("Не авторизован")
        }
    }
    throw error;
})

export default $api;
