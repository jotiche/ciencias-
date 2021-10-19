import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:8181/api/',
    timeout: 15000,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    }
});

instance.interceptors.response.use(
    response => response,
    error => {
        return Promise.reject(error);
    }
);

export default instance;