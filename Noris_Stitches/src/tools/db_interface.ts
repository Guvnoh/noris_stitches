import axios from "axios";
import { type Outfit } from "../assets/data";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const getProducts = async () => {
  const response = await axios.get(`${API_URL}/products`);
  return response.data as Outfit[];
};
export { getProducts };
