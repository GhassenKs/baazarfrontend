import axios from 'axios'
const API = axios.create({baseURL:'http://localhost:4000'});


export const signin = (FormData)=> API.post('/admin/signin',FormData);