import axios from 'axios';
import queryString from 'qs';
import get from 'lodash/get';

const request = axios.create();

const api = (options = {}, authAPI) => {
    let config = {
        baseURL: '',
        ...options,
        paramsSerializer: (params) =>
            queryString.stringify(params, { arrayFormat: 'repeat' }),
        headers: {
            Accept: '*/*',
            ...options.headers,
        },
    };
    // if (cookie.get(TOKEN) && cookie.get(REFRESH_TOKEN)) {
    //   config.headers.Authorization = `Bearer ${cookie.get(TOKEN)}`;
    // }
    return request(config);
};


request.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => Promise.reject(error)
);

request.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        const errorCode = get(error, 'response.status');
        // TODO
    }
);

export default api;
