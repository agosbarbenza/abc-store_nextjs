import '@/src/styles/index.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Header from '@/src/components/Header';
import Menu from '@/src/components/Menu';
import { ProductsProvider } from '@/src/components/ProductsContext'; 


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ProductsProvider>
      <Head>
        <title>Products</title>
        <meta name='description' content='By Agostina Barbenza' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Menu />
      <main>
        <Component {...pageProps} />
      </main>
    </ProductsProvider>
  )
}
