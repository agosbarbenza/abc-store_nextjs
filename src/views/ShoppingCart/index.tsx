import React from 'react';
import style from './style.module.css';
import CartProduct from '@/src/components/CartProduct';
import { useProducts } from '@/src/components/ProductsContext';
import CartSummary from '@/src/components/CartSummary';

const ShoppingCart = () => {
  const { cartList } = useProducts();
  //Agrupo los productos por id para mostrarlos en la vista y que no se repitan
  const groupedProducts = cartList.reduce((acc, product) => {
    if (!acc.some((item: any) => item.id === product.id)) {
      acc.push(product);
    }
    return acc;
  }, []);

  if(cartList.length === 0){
    return (
      <div className={style.cartEmpty}>
        <h2>Your cart is empty</h2>
        {/** TO DO: Mostrar una vista de productos recomedados */}
      </div>
    );
  }else{
  return (
    <div className={style.cartWrapper}>
      <div className={style.cartProductContainer}>
        {groupedProducts.map((product: any) => (
          <CartProduct key={product.id} product={product} />
        ))}
      </div>
      <div className={style.cartSummaryContainer}>
          <CartSummary />
      </div>
    </div>
  );
}
};

export default ShoppingCart;