import type { NextPage } from 'next';
import { Typography } from '@mui/material';
import { useProducts } from '../../hooks';
import { ShopLayout } from '../../components/layouts';

import { FullScreenLoading } from '../../components/ui/FullScreenLoading';
import { ProductList } from '../../components/products/ProductList';

const KidPage: NextPage = () => {
  const { products, isLoadding } = useProducts('/products?gender=kid');

  return (
    <ShopLayout
      title={'Teslo-Shop - Kids'}
      pageDescription={'Encuentra los mejores productos de Teslo para niños'}
    >
      <Typography variant='h1' component='h1'>
        Niños
      </Typography>
      <Typography variant='h2' sx={{ marginBottom: 1 }}>
        Productos para niños
      </Typography>

      {isLoadding ? <FullScreenLoading /> : <ProductList products={products} />}
    </ShopLayout>
  );
};

export default KidPage;
