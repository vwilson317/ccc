import { barracas } from "@/constants"
import axios from "axios"
class BarracaService {
    //todo: implement api call
    async getAsync() {
        const result = await axios.get('http://localhost:5298/barracas', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        return result.data;
    }
}

export default new BarracaService();