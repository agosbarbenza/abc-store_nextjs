import React from 'react'
import style from './style.module.css'
import { ProductDetails } from '@/api/services/feed/interfaces';
import Image from 'next/image';
import Counter from '@/src/components/Counter';
import { useProducts } from '@/src/components/ProductsContext';

interface CartProductProps {
  product: ProductDetails;
}

const CartProduct = ({ product }: CartProductProps) => {
  const { cartList } = useProducts();
  //Si el producto ya existe en el carrito, lo filtro para saber cuantas veces se repite
  //y calcular el total de ese producto en el carrito. Me duelve un array con todos esos productos
  const sameProductInCart = cartList.filter((item: any) => item.id === product.id);

  return (
    <div className={`${style.cartProductWrapper}`}>
         <div id='productImage' className={style.image}>
            <Image src={product.images[0]} alt='Post image' width={100} height={116} />
         </div>
         <div id='productInfo'>
            <h3 className={`${style.title}`}>{product.title}</h3>
         </div>
         <div>
             <Counter product={product} />
             <h3 className={`${style.stock}`}>In stock: {product.stock}</h3>
         </div>
         <div id= 'price'>
            <h3 className={`${style.price}`}>${(product.price)*sameProductInCart.length}</h3>
         </div>
    </div>
  )
}

export default CartProduct;
