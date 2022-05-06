import axiosClient from './axiosClient';

class AuthApi {
    api: string;
    constructor() {
        this.api = 'auth/';
    }
    login = () => {
        const url = `${this.api}login`;
        const body = {};
        return axiosClient.post(url, body);
    };
}

const authApi = new AuthApi();

export default authApi;
