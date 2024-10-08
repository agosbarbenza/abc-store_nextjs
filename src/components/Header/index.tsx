import React from 'react'
import { useRouter } from 'next/router';
import style from './style.module.css'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import SearchBar from '../SearchBar';
import { useProducts } from '@/src/components/ProductsContext';
import { feedController } from '@/src/controllers/feed';

const Header = () => {
  const { setProductsList, cartList, allProducts } = useProducts();
  const router = useRouter();

  const handleCartClick = () => {
    router.push('/cart');
  };

  const handleLogoClick = () => {
    setProductsList(allProducts);
    router.push('/');
  };

  const handleSelectPost = async (postId: number) => {
    try {
      const postDetails = await feedController.getProductById(postId);
      if(postDetails.data.id > 0){
        setProductsList([postDetails.data]);
        router.push('/');
      }else{
        console.log('No product details found for the selected id');
        setProductsList([]);
      }
    } catch (err) {
      console.error('Error getting product details for the selected id', err);
    }
  }


  return (
    <div className={`${style.headerWrapper}`}>
        <div className={`${style.logoWrapper} ${style.cursorPointer}`}>
            <StorefrontOutlinedIcon className={`${style.lightBlue} ${style.fontSize}`}/>
            <h1 onClick={handleLogoClick} className={`${style.silver}`}>ABC<span className={`${style.lightBlue}`}>store</span></h1>
        </div>
        <div className={`${style.searchBarWrapper}`}>
          <SearchBar allProducts={allProducts} getProduct={handleSelectPost} />
        </div>
        <div>
        {cartList.length > 0 && <div className={`${style.cartCounter}`}>{cartList.length}</div>}
        <ShoppingCartOutlinedIcon className={`${style.blue} ${style.cartSize} ${style.cursorPointer}`} onClick={handleCartClick}/>
        </div>

    </div>
  )
}

export default Header
