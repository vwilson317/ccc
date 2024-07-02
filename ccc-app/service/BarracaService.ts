import { products } from "@/constants"

class BarracaService {
    //todo: implement api call
    async getAsync() {
        return new Promise(() => {
            return products;
        })
    }
}

export default new BarracaService();