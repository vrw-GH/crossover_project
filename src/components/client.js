import axios from "axios";

const api = "https://yelp-project-backend.herokuapp.com/api";

const client = axios.get(`${api}/restaurants`);

export default client;
