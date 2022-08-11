import axios from "axios";

export function applyAuthorizationHeader(token) {
    axios
        .interceptors
        .request
        .use(config => {
            config.headers.Authorization = `Bearer ${token}`;
            return config;
        });
}