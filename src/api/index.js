import axios from 'axios';
import queryString from 'qs';
// import get from 'lodash/get';
import cookie from 'js-cookie'
import systemConfig from '../config'

const request = axios.create();

const api = (options = {}) => {
    let config = {
        baseURL: systemConfig.endpoints.BACKEND_URL,
        ...options,
        paramsSerializer: (params) =>
            queryString.stringify(params, { arrayFormat: 'repeat' }),
        headers: {
            Accept: '*/*',
            ...options.headers,
        },
    };
    if (cookie.get('accessToken')) {
      config.headers.Authorization = `Bearer ${cookie.get('accessToken')}`;
    }
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
        if (error.response && error.response.data) {
            return Promise.reject(error.response.data);
        }
        return Promise.reject(error.message);
    }
);

export default api;
