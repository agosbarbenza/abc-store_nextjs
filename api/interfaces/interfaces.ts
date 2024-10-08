
 export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  stock: number;
  images: string[];
  tags: string[];
  brand: string;
  category: string;
  shippingInformation: string;
  warrantyInformation: string;
  rating: number;
  returnPolicy: string;
}

export interface ProductsByCategory {
  products: Product[];
}

export interface ApiProductsResponse<T> {
  products: T;
  status: number;
}

export interface ApiCategoryResponse {
  data: string[];
  status: number;
}

export interface ApiProductResponse {
  data: Product;
  status: number;
}