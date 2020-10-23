import axios from 'axios';

export const api = axios.create({
  baseURL: `http://localhost:5000/`,
});

export enum EndPoints {
  login = 'login',
  register = 'register',
}
