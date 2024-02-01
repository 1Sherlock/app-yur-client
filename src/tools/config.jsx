import axios from "axios";
import {Accept_Language, API_Partner_Code, API_Partner_Version, TOKEN_NAME} from "./constants";

const token = localStorage.getItem(TOKEN_NAME);
const url = process.env.REACT_APP_API_KEY;
const axiosInstance = axios.create({
    baseURL: url,
    headers: {
        Authorization: `Bearer ${token}`,
        // 'API_Partner_Code': API_Partner_Code,
        // 'API_Partner_Version': API_Partner_Version,
        // 'Accept_Language': Accept_Language,
        "Content-Type": "application/json"
    },
    transformRequest: [(data, headers) => {
        headers["API-Partner-Code"] = API_Partner_Code;
        headers["API-Partner-Version"] = API_Partner_Version;
        headers["Accept-Language"] = Accept_Language;
        return [JSON.stringify(data)];
    }],
});

export const httpRequest = (config) => {
    return axiosInstance(config);
};
