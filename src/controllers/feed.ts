import axios from 'axios'

const getAllProductsLimited = async () => {
  return axios.get<any>('api/feed/products');
}

const getAllProducts = async () => {
  return axios.get<any>('api/feed/products/all');
}

const getAllCategories = async () => {
  return axios.get<any>('api/feed/products/categories');
}

const getProductById = async (id: number) => {
  return axios.get<any>(`/api/feed/products/${id}`);
}

const getProductsByCategory = async (category: string) => {
  return axios.get<any>(`/api/feed/products/category/${category}`);
}

export const feedController = {
  getAllProducts,
  getAllProductsLimited,
  getProductsByCategory,
  getProductById,
  getAllCategories
}
