import axios from 'axios';

const axiosInstance = axios.create({
    baseURL:'https://apimongo24.herokuapp.com/api/'

});

export {axiosInstance}