import axios from "axios";
import Product from "../models/Product";

const baseURL: string = process.env.REACT_APP_API_BASE_URL || "";

export const getProducts = async (): Promise<Product[]> => {
  return (await axios.get(`${baseURL}/products`)).data;
};
