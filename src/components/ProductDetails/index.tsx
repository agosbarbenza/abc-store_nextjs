import React from 'react';
import style from './style.module.css';
import Image from 'next/image';
import { productDetailsColumns } from '../../utils/tableColumns';
import { PostDetailsProps} from './interfaces';
import { useProducts } from '@/src/components/ProductsContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CircularProgress } from '@mui/material';



const ProductDetails = ({ data, onClose }: PostDetailsProps) => {
  const { cartList, setCartList } = useProducts();

  const handleAddToCart = () => { 
    if(data.stock < 1){
      toast.error('Product out of stock. Please try again later!');
    }else{
      setCartList([...cartList, data]);
      toast.success('Product added to cart!');
    }
  }

  if(data.id < 1){
    return <div className={style.loading}> <CircularProgress /></div>
  }else{
    return (
      <div className={style.overlay}>                
      <ToastContainer position="top-right" />
        <div id='postDetail' className={`${style.postDetail}`}>
          <div id='imgAndCaption' className={`${style.imageAndCaption}`}>
              <Image src={data.images[0]} alt='Post image' width={354} height={438.96} />
            <div id='captionWrapper' className={`${style.captionWrapper}`}>
              <h3 className={`${style.captionTitle}`}>Description</h3>
              <p className={`${style.captionText}`}>{data?.description}</p>
            </div>
          </div>
          <div id='postInfo' className={`${style.postInfo}`}>
            <div id='postRatingLink' className={`${style.marginBottom}`}>
              <div className={`${style.displayFlex} ${style.justifyContent}`}>
                <p className={`${style.account}`}>{data.brand != undefined ? `${data.brand}` : 'ABC'}</p>
                <Image
                  src='/images/close_icon.svg'
                  alt='Close button'
                  width={15}
                  height={15}
                  className={`${style.close}`}
                  onClick={onClose}
                />
              </div> 
              <h2 className={`${style.title}`}>{data.title}</h2>
              <div id='ratingLink' className={`${style.displayFlex} ${style.justifyContent} ${style.marginTop}`}>
                <div className={`${style.displayFlex}`}>
                  <p className={`${style.property}`}>In Stock:</p>
                  <div className={`${style.marginLeft}`}>
                    <p className={`${style.value}`}>{data.stock}</p>
                  </div>
                </div>
              </div>
              <h3 className={`${style.priceSize}`}>${data.price}</h3>
            </div>
            <div id='dateTime' className={`${style.postDetails} ${style.borderTop}`}>
              <p className={`${style.columnLabel}`}>AVAILABLE OFFERS</p>
              {/*Calcula el costo del producto en cuotas*/}
              <p className={`${style.installments}`}>12 interest-free installments of ${(data.price/12).toFixed(2)} </p>
              <h3 className={`${style.addToCartButton}`} onClick={handleAddToCart}>{'ADD TO CART'}</h3>
            </div>
            <div>
              {/* Info adicional */}
              {productDetailsColumns.map((column) => {
              return (
                <div key={column.id} id={column.id} className={`${style.postDetails} ${style.borderTop}`}>
                  <h3 className={`${style.columnLabel}`}>{column.label.toUpperCase()}</h3>
                  <div className={`${style.marginTop}`}>
                    {column.rows.map((row) => {
                      return (
                        <div
                          key={row.id} className={`${style.marginTopProperties}`}
                        >
                          <p className={`${style.property}`}>{row.label}</p>
                          <p className={`${style.value}`}>
                            {data[row.id]}
                          </p>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
              })}
              <div id='hashtags'>
                <h3 className={`${style.columnLabel}`}>TAGS</h3>
                <div className={`${style.hashtagWrapper}`}>
                  {data?.tags.map((hashtag: string) => (
                    <div key={`${hashtag}`} className={`${style.hashtags}`}>
                      <p className={`${style.hashtagText}`}>{`#${hashtag}`}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
}

export default ProductDetails;
