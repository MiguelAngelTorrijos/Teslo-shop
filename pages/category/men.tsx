import type { NextPage } from 'next';
import { Typography } from '@mui/material';
import { useProducts } from '../../hooks';
import { ShopLayout } from '../../components/layouts';

import { FullScreenLoading } from '../../components/ui/FullScreenLoading';
import { ProductList } from '../../components/products/ProductList';

const MenPage: NextPage = () => {
  const { products, isLoading } = useProducts('/products?gender=men');

  return (
    <ShopLayout
      title={'Teslo-Shop - Men'}
      pageDescription={'Encuentra los mejores productos de Teslo para hombres'}
    >
      <Typography variant='h1' component='h1'>
        Hombre
      </Typography>
      <Typography variant='h2' sx={{ marginBottom: 1 }}>
        Productos para hombre
      </Typography>

      {isLoading ? <FullScreenLoading /> : <ProductList products={products} />}
    </ShopLayout>
  );
};

export default MenPage;
