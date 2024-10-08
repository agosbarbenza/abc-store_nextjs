import React, { useState } from 'react'
import style from './style.module.css'
import PageviewRoundedIcon from '@mui/icons-material/PageviewRounded';
import { ProductDetails } from '@/api/services/feed/interfaces';

interface SearchBarProps {
  allProducts: ProductDetails[];
  getProduct: (id: number) => void;
}


const SearchBar = ({allProducts, getProduct}: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  //Filtro el producto por el título
  const filteredProducts = allProducts?.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleOptionClick = (id: number) => {
    getProduct(id);
    setSearchTerm('');
  };
  return (
    <div className={`${style.search}`}>
        <div className={`${style.searchWrapper}`}>
            <input type="text" placeholder="Search products..." onChange={handleSearchChange} value={searchTerm} className={`${style.searchBar}`}/>
           <PageviewRoundedIcon className={`${style.blue} ${style.pageViewSize} ${style.cursorPointer}`}/>
        </div>
        {
          searchTerm.length > 2 && filteredProducts.length > 0 && (
            <div className={`${style.optionsWrapper}`}>
            <ul className={`${style.searchResults}`}>
                {filteredProducts.map((product) => (
                    <li onClick={()=> handleOptionClick(product.id)} key={product.id} className={`${style.searchItem}`}>
                        {product.title}
                    </li>
                ))}
            </ul>
          </div>   
          )
        }
         
    </div>
  )
}

export default SearchBar;
