import axios from "axios";

export class ProductService {
    static async getAll() {
        const response = await axios.get("https://dummyjson.com/products?limit=100")
        if(response.status !== 200) throw new Error(`request ended up with status ${response.status}`)
        return response.data
    }

    static async getById(id) {
        const response = await axios.get(`https://dummyjson.com/products/${id}`)
        if(response.status !== 200) throw new Error(`request ended up with status ${response.status}`)
        return response
    }

}