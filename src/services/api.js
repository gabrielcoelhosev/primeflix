//base api: https://api.themoviedb.org/3
//url da api: /movie/now_playing?api_key=bd41cb06251ca2044a09c7f1238d37fc&language=pt-BR
//api key: bd41cb06251ca2044a09c7f1238d37fc


import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
    });

export default api;