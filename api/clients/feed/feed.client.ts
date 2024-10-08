import { FEED_API } from '@/config/env';
import axios from 'axios';
import { Product, ApiProductsResponse, ProductsByCategory} from '@/api/interfaces/interfaces';

const BASE_URL = `${FEED_API}`

const emptyProduct = {
  id:  0,
  images: [],
  tags: [],
  brand: '',
  category: '',
  description: '',
  rating: 0,
  price: 0,
  returnPolicy:'',
  shippingInformation: '',
  warrantyInformation: '',
  stock: 0,
  title: '',
}

//TO-DO: Esta funcion y la de abajo se podrian unificar agregando un flag y parametros dinámicos
const getAllProducts = async (): Promise<Product[]> => {
  try{
    const response = await axios.get<ApiProductsResponse<Product[]>>(`${BASE_URL}/products?limit=100`);
    if(response.status === 200){
      return response.data.products;
    }else{
      return [emptyProduct];
    }
  }catch(err){
    console.error('Error getting all products data in client',err);
    return [
      emptyProduct
    ];
  };
};

const getAllProductsLimited = async (): Promise<Product[]> => {
  try{
    const response = await axios.get<ApiProductsResponse<Product[]>>(`${BASE_URL}/products?limit=52`);
    if(response.status === 200){
      return response.data.products;
    }else{
      return [emptyProduct];
    }
  }catch(err){
    console.error('Error getting all products (limited amount) data in client',err);
    throw err;
  }
}

const getAllCategories = async (): Promise<string[]> => {
  try{
    const response = await axios.get<string[]>(`${BASE_URL}/products/category-list`);
    if(response.status === 200){
      return response.data;
    }else{
      return [];
    }
  }catch(err){
    console.error('Error getting all categories data',err);
    return [];
  }
}

const getProductsByCategory = async (category: string): Promise<Product[]> => {
  try{
    const response = await axios.get<ProductsByCategory>(`${BASE_URL}/products/category/${category}`);
    if(response.status === 200){
      return response.data.products;
    }else{
      return [emptyProduct];
    }
  }catch(err){
    console.error('Error getting products by category in client',err);
    throw err;
  }
}

const getProductById = async (id: string): Promise<Product> => {
  try{
    const response = await axios.get<Product>(`${BASE_URL}/products/${id}`);
    if(response.status === 200){
    return response.data;
    }else{
      return emptyProduct;
    }
  }catch(err){
    console.error('Error getting product by ID in client',err);
    throw err;
  }
}


export const feedClient = {
  getAllProducts,
  getAllProductsLimited,
  getProductsByCategory,
  getProductById,
  getAllCategories
}
