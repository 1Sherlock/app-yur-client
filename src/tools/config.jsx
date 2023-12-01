import axios from "axios";
import {TOKEN_NAME} from "./constants";

const token = localStorage.getItem(TOKEN_NAME);
const url = process.env.REACT_APP_API_KEY;
const axiosInstance = axios.create({
    baseURL: url,
    headers: {
        Authorization: `Bearer ${token}`,
    },
});

export const httpRequest = (config) => {
    return axiosInstance(config);
};
