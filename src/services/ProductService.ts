import {AxiosResponse} from "axios";
import {IProduct} from "../models/Models";
import $api from "../http";

export default class ProductService {
    static async fetchProducts(): Promise<AxiosResponse<IProduct[]>> {
        return $api.get<IProduct[]>("/product")
    }
}