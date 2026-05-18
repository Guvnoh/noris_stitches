import axios from "axios";
import { type Outfit } from "../assets/data";

const getProducts = async () => {
  const response = await axios.get("http://localhost:5000/products");
  return response.data as Outfit[];
};
export { getProducts };
