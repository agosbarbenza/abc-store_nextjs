import React from 'react';
import Head from 'next/head';
import ShoppingCart from '@/src/views/ShoppingCart';

const Cart = () => {
  return (
    <>
      <Head>
        <title>ABC Store - Shopping Cart</title>
      </Head>
      <ShoppingCart />
    </>
  );
};

export default Cart;