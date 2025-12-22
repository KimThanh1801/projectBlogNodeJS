import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/api', // Địa chỉ backend của bạn
  headers: {
    'Content-Type': 'application/json',
  },
});

// (Tùy chọn) Thêm interceptor để gắn token vào mỗi request
api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;