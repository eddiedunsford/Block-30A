import axios from 'axios';

const API_BASE = 'https://fsa-book-buddy-b6e748d1380d.herokuapp.com';

export const fetchBooks = () => axios.get(`${API_BASE}/books`);
export const fetchBookById = (id) => axios.get(`${API_BASE}/books/${id}`);
export const login = (credentials) => axios.post(`${API_BASE}/auth/login`, credentials);
export const register = (userData) => axios.post(`${API_BASE}/auth/register`, userData);
export const checkoutBook = (bookId, token) =>
  axios.post(`${API_BASE}/books/${bookId}/checkout`, {}, {
    headers: { Authorization: `Bearer ${token}` },
  });
export const returnBook = (bookId, token) =>
  axios.post(`${API_BASE}/books/${bookId}/return`, {}, {
    headers: { Authorization: `Bearer ${token}` },
  });
