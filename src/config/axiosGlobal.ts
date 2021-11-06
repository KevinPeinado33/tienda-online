import Axios from 'axios';

export const api = Axios.create({
    baseURL: 'https://tienda-rest-apis.herokuapp.com'
});

export const apiImg = Axios.create({
    baseURL: 'https://api.imgbb.com/1',
    params: {
        key : '709a76029db976ae987795f0c8abea8d'
    },
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
});