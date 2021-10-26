import Axios from 'axios';

export const api = Axios.create({
    baseURL: 'https://tienda-rest-apis.herokuapp.com'
});