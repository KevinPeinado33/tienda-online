import Axios from 'axios';

export const api = Axios.create({
    baseURL: 'https://localhost:3000'
});