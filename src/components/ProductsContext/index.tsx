import React, { createContext, useState, useContext, ReactNode } from 'react';

interface ProductsContextProps {
  productsList: any[];
  setProductsList: React.Dispatch<React.SetStateAction<any[]>>;
  cartList: any[];
  setCartList: React.Dispatch<React.SetStateAction<any[]>>;
  allProducts: any[];
  setAllProducts: React.Dispatch<React.SetStateAction<any[]>>;
}

const ProductsContext = createContext<ProductsContextProps | undefined>(undefined);

export const ProductsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [productsList, setProductsList] = useState<any[]>([]);
  const [cartList, setCartList] = useState<any[]>([]);
  const [allProducts, setAllProducts] = useState<any[]>([]);

  return (
    <ProductsContext.Provider value={{ productsList, setProductsList, cartList, setCartList, allProducts, setAllProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductsProvider');
  }
  return context;
};