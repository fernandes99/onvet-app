import axios from 'axios';
import { storage } from './scripts/storage';

const getToken = async () => {
    return storage
        .get('token_auth')
        .then((res) => res as string)
        .catch(() => null);
};

export const request = axios.create();

request.interceptors.request.use(async (config) => {
    const token = await getToken();

    if (!token) {
        config.headers.setAuthorization(`Barear ${token}`);
    }

    return config;
});
