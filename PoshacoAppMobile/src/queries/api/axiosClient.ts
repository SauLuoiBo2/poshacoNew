import axios from 'axios';
import querySting from 'query-string';
import Config from 'react-native-config';

const axiosClient = axios.create({
    baseURL: Config.API_URL,
    headers: {
        Accept: 'application/json',
        'content-type': 'application/json',
    },
    paramsSerializer: (params) => querySting.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
    // Handle token here ...

    // config.headers["Access-Control-Allow-Methods"] =
    //   "GET, PUT, POST, DELETE, OPTIONS";
    return config;
});

axiosClient.interceptors.response.use(
    (response) => {
        if (response && response.data) {
            return response.data;
        }
        return response;
    },
    (error) => {
        // Handle errors
        throw error;
    }
);

export default axiosClient;
