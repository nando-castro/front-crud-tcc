import { api } from "@/services/api";

export const userService = {
  get: (params) => (params ? api.get(`/user/${params}`) : api.get(`/users`)),
  post: (data) => api.post(`/user`, data),
  put: (params, data) => api.put(`/user/${params}`, data),
  delete: (params) => api.delete(`/user/${params}`),
};