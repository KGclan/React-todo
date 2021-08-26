import axios from "axios"

export default class TodoServise {
    static async getAll(limit = 4, page = 1) {
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos", {
            params: {
                _limit : limit,
                _page: page
            }
        })
        return response
    }
}