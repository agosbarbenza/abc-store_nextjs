import React from 'react'
import style from './style.module.css'
import Dropdown from '@/src/components/Dropdown'

const Details = ({ totalProducts, onSelect }: { totalProducts: number; onSelect: (selection: string) => void }) => {
  const orderCriteria = [
    {
      id: '1',
      displayName: 'Price: Low to High',
      name: 'Price: Low to High',
    },
    {
      id: '2',
      displayName: 'Price: High to Low',
      name: 'Price: High to Low',
    },
    {
      id: '3',
      displayName: 'Rating: Low to High',
      name: 'Rating: Low to High',
    },
    {
      id: '4',
      displayName: 'Rating: High to Low',
      name: 'Rating: High to Low',
    }
  ]

  return (
    <div className={style.detailsWrapper}>
      <div>
        <p className={`${style.padding} ${style.text}`}>
          Total Products: <span className={style.value}>{totalProducts}</span>
        </p>
      </div>
      <div className={style.detailsInfoWrapper}>
        <p className={`${style.padding} ${style.text}`}>
          Order by:
        </p>
        <Dropdown options={orderCriteria} onSelect={onSelect} />
      </div>
    </div>
  )
}

export default Details
