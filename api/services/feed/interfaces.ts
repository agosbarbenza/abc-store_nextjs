interface FeedProduct {
    id: number;
    price: number;
    images: string[];
    title: string;
  }
  
interface ProductDetails {
    id: number;
    images: string[];
    tags: string[];
    brand: string;
    category: string;
    description: string;
    rating: number;
    price: number;
    returnPolicy: string;
    shippingInformation: string;
    warrantyInformation: string;
    stock: number;
    title: string;
  }

  type Category =
  | 'beauty'
  | 'fragrances'
  | 'furniture'
  | 'groceries'
  | 'home-decoration'
  | 'kitchen-accessories'
  | 'laptops'
  | 'mens-shirts'
  | 'mens-shoes'
  | 'mens-watches'
  | 'mobile-accessories'
  | 'motorcycle'
  | 'skin-care'
  | 'smartphones'
  | 'sports-accessories'
  | 'sunglasses'
  | 'tablets'
  | 'tops'
  | 'vehicle'
  | 'womens-bags'
  | 'womens-dresses'
  | 'womens-jewellery'
  | 'womens-shoes'
  | 'womens-watches';

  type Categories = Category[];

  export type { Categories, FeedProduct, ProductDetails };