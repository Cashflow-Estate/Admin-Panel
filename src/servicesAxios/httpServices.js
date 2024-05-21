// axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    'x-user-id': 'user-95c63296-c866-4221-8961-198fb8d81567',
  },
});

// Add a request interceptor to include the Bearer token
axiosInstance.interceptors.request.use((config) => {
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InVzZXItOTVjNjMyOTYtYzg2Ni00MjIxLTg5NjEtMTk4ZmI4ZDgxNTY3IiwiaWF0IjoxNzE2Mjg0NDQyLCJleHAiOjE3MTYyODgwNDJ9.v44iROxFfDtdnfG7xHRw5cW12FX471TWOHmSWwkrHLs';
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default axiosInstance;

// import axios from 'axios';
// import Cookies from 'js-cookie';

// const instance = axios.create({
//   baseURL: `${"https://kachabazzar-be.onrender.com"}`,
//   timeout: 500000,
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//   },
// });

// // Add a request interceptor
// instance.interceptors.request.use(function (config) {
//   // Do something before request is sent
//   let userInfo;
//   if (Cookies.get('userInfo')) {
//     userInfo = JSON.parse(Cookies.get('userInfo'));
//   }

//   return {
//     ...config,
//     headers: {
//       authorization: userInfo ? `Bearer ${userInfo.token}` : null,
//     },
//   };
// });

// // console.log(process.env.API_BASE_URL);
// const responseBody = (response) => response.data;

// const requests = {
//   get: (url, body) => instance.get(url, body).then(responseBody),

//   post: (url, body, headers) =>
//     instance.post(url, body, headers).then(responseBody),

//   put: (url, body) => instance.put(url, body).then(responseBody),
// };

// export default requests;
