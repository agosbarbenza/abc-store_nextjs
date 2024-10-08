import Feed from '@/src/views/Feed';
import Head from 'next/head';
import { feedService } from '@/api/services/feed/feed.service';
import { GetServerSideProps } from 'next';
import { useProducts } from '@/src/components/ProductsContext';
import { useEffect } from 'react';

interface HomeProps {
  allProducts: any[];
}

const Home = ({ allProducts }: HomeProps) => {
  const { productsList, setProductsList, setAllProducts } = useProducts();

  useEffect(() => {
    if (!productsList || productsList?.length === 0) {
      setProductsList(allProducts); //Lista de productos que se muestran en la pagina - 100
    }
    setAllProducts(allProducts);  /* Todos los productos disponibles de la api - 194 */
  }, [productsList, setProductsList, allProducts, setAllProducts]);

  return (
    <>
      <Head>
        <title>ABC store</title>
      </Head>
      <Feed data={productsList} />
    </>
  );
};
//Genera contenido dinamico en el server y pasa por props a la pagina
export const getServerSideProps: GetServerSideProps = async () => {
  const allProducts = await feedService.getAllProducts();
  return {
    props: {
      allProducts,
    },
  };
};

export default Home;