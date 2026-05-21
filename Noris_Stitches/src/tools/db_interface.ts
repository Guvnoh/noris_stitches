import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "";

const api = axios.create({ baseURL: API_URL });

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("admin_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      localStorage.removeItem("admin_token");
      localStorage.removeItem("admin_email");
      window.location.href = "/admin/login";
    }
    return Promise.reject(err);
  }
);

export interface LoginResponse {
  token: string;
  email: string;
}

export const loginAdmin = async (email: string, password: string) => {
  const res = await api.post<LoginResponse>("/auth/login", { email, password });
  return res.data;
};

export const getProducts = async () => {
  const response = await api.get("/");
  return response.data;
};

export const getProduct = async (id: string) => {
  const res = await api.get(`/${id}`);
  return res.data;
};

export const createProduct = async (formData: FormData) => {
  const res = await api.post("/", formData);
  return res.data;
};

export const updateProduct = async (id: string, formData: FormData) => {
  const res = await api.put(`/${id}`, formData);
  return res.data;
};

export const getCategories = async () => {
  const res = await api.get("/categories");
  return res.data as string[];
};

export const deleteProduct = async (id: string) => {
  const res = await api.delete(`/${id}`);
  return res.data;
};

export { api };
