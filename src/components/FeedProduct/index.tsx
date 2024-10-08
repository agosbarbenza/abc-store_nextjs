import React from 'react'
import style from './style.module.css'
import { FeedPostProps } from './interfaces';

const FeedProduct = ({ data, selectPost, onClick }: FeedPostProps) => {

  if (data.id < 1) {
    return null;
  } else {
    const divStyle = {
      width: '100%',
      height: '70%',
      backgroundImage: `url(${data.images[0]})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderRadius: '8px',
    };
    return (
      <div
      key={data.postId}
        className={`${style.card}`}
        onClick={() => {
          selectPost(data.postId);
          onClick();
        }}
      >
        <div id='header' style={divStyle}>
        </div>
        <div id='info' className={`${style.info}`}>
          <div className={`${style.titlePrice}`}>        {/**Manejo de productos que no tienen marca, seteo una generica */}
            <h4 className={`${style.brand}`}>{data.brand != undefined || data.brand == '' ? `${data.brand}` : 'ABC'}</h4>
            <h4 className={`${style.title}`}>{`${data.title}`}</h4>
            <h4 className={`${style.price}`}>${`${data.price}`}</h4>
          </div>
        </div>
      </div>
    )
  }
}

export default FeedProduct;
