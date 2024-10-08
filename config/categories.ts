export type Category = {
  id: number;
  displayName: string;
  name: string;
  subcategories: string[];
}

export const categories: Category[] = [
  {
    id: 1,
    name: 'all',
    displayName: "All categories",
    subcategories:[
      'all'
    ]
  },
  {
    id: 2,
    name: 'personalCare',
    displayName: 'Beauty & Skin Care',
    subcategories:[
    'beauty',
    'fragrances',
    'skin-care',
    ]
  },
  {
    id: 3,
    name: 'technology',
    displayName: 'Technology',
    subcategories:[
      'laptops',
      'mobile-accessories',
      'motorcycle',
      'smartphones',
      'tablets',
      'vehicle',
    ]
  },
  {
    id: 4,
    name: 'clothing',
    displayName: "Clothing & Accesories",
    subcategories:[
      'mens-shirts',
      'mens-shoes',
      'mens-watches',
      'sports-accessories',
      'sunglasses',
      'tops',
      'womens-bags',
      'womens-dresses',
      'womens-jewellery',
      'womens-shoes',
      'womens-watches'
    ]
  },{
    id: 5,
    name: 'home',
    displayName: "Home Decor",
    subcategories:[
      'furniture',
      'groceries',
      'home-decoration',
      'kitchen-accessories',
    ]
  }
]