// src/services/api.ts
import axios from 'axios';

// Configuração do Axios para consumir a API
const api = axios.create({
  baseURL: 'https://stephen-king-api.onrender.com/api/books'
});

export default api;
