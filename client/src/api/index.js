const axios = require("axios");

const API = axios.create({ baseURL: "http://localhost:4000" });

API.interceptors.request.use((req) => {
  const token = JSON.parse(localStorage.getItem("profile"))?.token;
  if (token) {
    req.headers.Authorization = `bearer ${token}`;
  }
  return req;
});
//auth
export const createUserApi = (formData) => API.post(`/auth/sineUp`, formData);

export const loginUserApi = (formData) => API.post(`/auth/login`, formData);

//posts
export const fetchPosts = () => API.get(`/posts`);

export const createPost = (newPost) => API.post(`/posts`, newPost);

export const updatePost = (id, updatedPost) =>
  API.patch(`/posts/${id}`, updatedPost);

export const deletePost = (id) => API.delete(`/posts/${id}`);
