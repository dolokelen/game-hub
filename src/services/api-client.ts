import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "3662c69fab2e4da8b9c38c296e1b3408"
    }
});