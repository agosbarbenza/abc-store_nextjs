import React from 'react';
import style from './style.module.css';
import { useProducts } from '@/src/components/ProductsContext';

const CartSummary = () => {
  const { cartList } = useProducts();
  const totalProducts = cartList.length;
  const shippingCost = 20;        //acumulador, elemento actual
  const totalCost = cartList.reduce((acc, product) => acc + product.price, 0);
  return (
    <div className={`${style.cartSummaryWrapper}`}>
      <h3>Purchase summary</h3>
      <div className={style.separator}></div>
      <div className={`${style.displayFlex}`}>
        <div className={style.flexRow}>
          <h4>Products ({totalProducts}):</h4>
          <h4>${totalCost.toFixed(2)}</h4>
        </div>
        <div className={style.flexRow}>
          <h4>Shipping:</h4>
          <h4>$ {shippingCost}.00</h4>
        </div>
        <div className={style.flexRow}>
          <h4>Total:</h4>
          <h4>${(shippingCost+totalCost).toFixed(2)}</h4>
        </div>
        <div className={style.checkoutBtn}>
          CHECKOUT
        </div>
      </div>
    </div>
  );
};

export default CartSummary;