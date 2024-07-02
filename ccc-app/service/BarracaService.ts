import { products } from "@/constants"

class BarracaService {
    //todo: implement api call
    async getAsync() {
        return await new Promise((resolve) => resolve(products))
    }
}

export default new BarracaService();