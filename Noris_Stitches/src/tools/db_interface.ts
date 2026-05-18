import axios from "axios";
import { type Outfit } from "../assets/data";

const API_URL =
  import.meta.env.VITE_API_URL ||
  "https://norisstitches-production.up.railway.app/products";

const getProducts = async () => {
  const response = await axios.get(`${API_URL}/products`);
  return response.data as Outfit[];
};
export { getProducts };
