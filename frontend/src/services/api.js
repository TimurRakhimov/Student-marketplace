import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const login = (data) => API.post('/auth/login', data);
export const fetchItems = () => API.get('/items');
export const fetchItemById = (id) => API.get(`/items/${id}`);
