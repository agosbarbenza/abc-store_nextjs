import { feedClient } from '../../clients/feed/feed.client'
import { Product } from '../../interfaces/interfaces'

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


// TO-DO: Esta funcion y la de abajo hacen lo mismo, agregar un flag para diferenciarlas y unificar
const getAllProductsLimited = async (): Promise<Product[]> => {
  try {
    const response = await feedClient.getAllProductsLimited();
    return response.map((product: Product) => ({
      id: product.id ?? 0,
      images: product.images ?? [],
      tags: product.tags ?? [],
      brand: product.brand ?? '',
      category: product.category ?? '',
      description: product.description ?? '',
      rating: product.rating ?? 0,
      price: product.price ?? 0,
      returnPolicy: product.returnPolicy ?? '',
      shippingInformation: product.shippingInformation ?? '',
      warrantyInformation: product.warrantyInformation ?? '',
      stock: product.stock ?? 0,
      title: product.title ?? '',
    }));
  } catch (error) {
    console.log('Error getting all products (limited amount) in service', error);
    return [];
  }
}

const getAllProducts = async (): Promise<Product[]> => {
  try {
    const response = await feedClient.getAllProducts();
    return response.map((product: Product) => ({
      id: product.id ?? 0,
      images: product.images ?? [],
      tags: product.tags ?? [],
      brand: product.brand ?? '',
      category: product.category ?? '',
      description: product.description ?? '',
      rating: product.rating ?? 0,
      price: product.price ?? 0,
      returnPolicy: product.returnPolicy ?? '',
      shippingInformation: product.shippingInformation ?? '',
      warrantyInformation: product.warrantyInformation ?? '',
      stock: product.stock ?? 0,
      title: product.title ?? '',
    }));
  } catch (error) {
    console.log('Error getting all products in service', error);
    return [];
  }
}

const getCategoryList = async (): Promise<string[]> => {
  try {
    const categories = await feedClient.getAllCategories();
    if(categories.length > 0){
      return categories;
    }else{
      return [];
    }
  } catch (error) {
    console.log('Error getting categories', error);
    return [];
  }
}

const getProductById = async (id: string): Promise<Product> => {
  try {
    const product = await feedClient.getProductById(id);
    if(product.id > 0){
      return product;
    }else{
      return emptyProduct;
    };
    
  } catch (error) {
    console.log('Error getting product by id in service', error); 
    return emptyProduct;
  };
}

const getProductsByCategory = async (category: string): Promise<Product[]> => {
  try {
    const productsByCategory = await feedClient.getProductsByCategory(category);
    if(productsByCategory.length>0){
      return productsByCategory;
    }else{
      return [emptyProduct];
      };
  } catch (error) {
    console.log('Error getting products by category in feedService', error);
    return [emptyProduct];
  }
}

export const feedService = {
  getAllProducts,
  getProductById,
  getAllProductsLimited,
  getProductsByCategory,
  getCategoryList,
}
