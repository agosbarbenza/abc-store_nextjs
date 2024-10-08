import React, { useEffect, useState } from 'react';
import { feedController } from '@/src/controllers/feed';
import FeedProduct from '@/src/components/FeedProduct';
import Details from '@/src/components/Details';
import style from './style.module.css';
import { useProducts } from '@/src/components/ProductsContext';
import ProductDetails from '@/src/components/ProductDetails';
import { Product } from '../../../api/interfaces/interfaces';
import { CircularProgress } from '@mui/material';

interface FeedProps {
  data: any[];
}
const Feed = ({ data }: FeedProps) => {
  const emptyProduct: Product = {
    id:  0,
    images: [],
    tags: [],
    brand: '',
    category: '',
    description: '',
    rating: 0,
    price: 0,
    returnPolicy:'',
    shippingInformation: '',
    warrantyInformation: '',
    stock: 0,
    title: '',
  };
  const { productsList, setProductsList } = useProducts();
  const [product, setProduct] = useState<Product>(emptyProduct);
  const [isPostDetailsVisible, setIsPostDetailsVisible] = useState(false);

  const handleFeedPostClick = () => {
    setIsPostDetailsVisible(true);
  }

  const handleCloseClick = () => {
    setIsPostDetailsVisible(false);
  }

  const handleSelectPost = async (postId: number) => {
    try {
      const postDetails = await feedController.getProductById(postId);
      if(postDetails.data.id > 0){
        setProduct(postDetails.data);
      }else{
        console.log('No product details found for the selected id');
        setProduct(emptyProduct);
      }
    } catch (err) {
      console.error('Error getting product details for the selected id', err);
    }
  }

  const sortPosts = (criteria: string) => {
    const sortedPosts = [...productsList];
    switch (criteria) {
      case 'Price: High to Low':
        sortedPosts.sort((a, b) => b.price - a.price);
        break;
      case 'Price: Low to High':
        sortedPosts.sort((a, b) => a.price - b.price);
        break;
      // Ordena por rating pero aún no está visible en el feed
      case 'Rating: High to Low':
        sortedPosts.sort((a, b) => b.rating - a.rating);
        break;
      case 'Rating: Low to High':
        sortedPosts.sort((a, b) => a.rating - b.rating);
        break;
      default:
        break;
    }
    setProductsList(sortedPosts);
  };
  
  useEffect(() => {
    setProductsList(data);
  }, []);
  if (!productsList) {
    return <div className={style.loading}> <CircularProgress /></div>
  } else {
    return (
      <div className={style.feedWrapper}>
        {isPostDetailsVisible && (
          <ProductDetails
            data={product}
            onClose={handleCloseClick}
          />
        )}
        <div className={style.feedSubWrapper}>
          <Details totalProducts={productsList.length > 0 ? productsList.length : 0} onSelect={sortPosts} />
          <div className={style.displayPost}>
            {productsList?.map((product: any) => {
              return (
                <FeedProduct
                  key={product.id}
                  data={product}
                  selectPost={()=>handleSelectPost(product.id)}
                  onClick={handleFeedPostClick}
                />
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default Feed
