import React, { useState } from 'react';
import style from './style.module.css';
import { categories } from '@/config/categories';
import { transformString } from '../../utils/utils';
import { useRouter } from 'next/router';
import { feedController } from '@/src/controllers/feed';
import { useProducts } from '@/src/components/ProductsContext';

const Menu = () => {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);
  const router = useRouter();
  const { setProductsList } = useProducts();

  const handleMouseEnter = (categoryId: number) => {
    setHoveredCategory(categoryId);
  };

  const handleMouseLeave = () => {
    setHoveredCategory(null);
  };

  const handleCategoryClick = async (category: string) => {
    if(category.toLowerCase() === 'all categories'){
      try{
        const allProducts = await feedController.getAllProducts();
        if(allProducts.data.length > 0){
          setProductsList(allProducts.data);
        }else{
          setProductsList([]);
        }
        router.push('/');
      } catch (err) {
        console.log('Error getting products', err);
      }
      
    }
  }

  //Despliega el submenu de categorias solo si el cursor está sobre una categoria que no es 'all'
  const getSubcategories = () => {
    const category = categories.find(category => category.id === hoveredCategory);
    if (!category) return [];
    return category.subcategories.filter(subcategory => subcategory !== 'all');
  };

  const subcategories = getSubcategories();

  const getProductsByCategory = async (category: string) => {
    try {
      const productsByCategory = await feedController.getProductsByCategory(category);
      if(productsByCategory.data.length > 0){
        setProductsList(productsByCategory.data);
      }else{
        setProductsList([]);
      }
      
    } catch (err) {
      console.log('Error getting product by category', err);
    }
  }

  const handleSubcategoryClick = async (subcategory: string) => {
    await getProductsByCategory(subcategory);
    router.push('/'); 
  };

  return (
    <div className={style.menu}>
      <ul className={style.menuWrapper}>
        {categories.map((category) => (
          <div
            key={category.id}
            className={style.categoryContainer}
            onMouseEnter={() => handleMouseEnter(category.id)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleCategoryClick(category.displayName)}
          >
            <li className={`${style.cursorPointer} ${style.item}`}>
              {category.displayName}
            </li>
          </div>
        ))}
      </ul>
      {hoveredCategory !== null && subcategories.length > 0 && (
        <div className={style.subMenu}
        onMouseEnter={() => setHoveredCategory(hoveredCategory)}
          onMouseLeave={handleMouseLeave}
          >
           <ul className={style.subMenuList}>
            {subcategories.map((subcategory) => (
              <li key={subcategory} className={style.subMenuItem} onClick={()=>{
                handleSubcategoryClick(subcategory)
              }}>
                {transformString(subcategory)}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Menu;