import axios from "axios";

export default axios.create({
    baseURL: "http://34.226.136.222:3001/api/v1/restaurants",
});