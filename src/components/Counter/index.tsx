import React from 'react';
import style from './style.module.css';
import HorizontalRuleOutlinedIcon from '@mui/icons-material/HorizontalRuleOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { useProducts } from '@/src/components/ProductsContext';

const Counter = ({product}: any) => {
  const { cartList } = useProducts();
  //Si el producto se repite lo va sumando para mostrarlo en el contador
  const sameProductInCart = cartList.filter((item: any) => item.id === product.id);

  return (
    <div className={`${style.counterWrapper}`}>
      <HorizontalRuleOutlinedIcon className={`${style.icon}`} />
      <h3>{sameProductInCart.length}</h3>
      <AddOutlinedIcon className={`${style.icon}`}/>
    </div>
  );
};

export default Counter;