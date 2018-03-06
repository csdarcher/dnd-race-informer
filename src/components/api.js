// Base API Configuration
import axios from 'axios';

export const API = axios.create({
    baseURL: 'http://dnd5eapi.co/api/'
});

API.interceptors.request.use(function (config) {
    // Set common parameters for each request to the API.
    return config;
}, function (error) {
    return Promise.reject(error);
});