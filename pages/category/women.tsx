import type { NextPage } from 'next';
import { Typography } from '@mui/material';
import { useProducts } from '../../hooks';
import { ShopLayout } from '../../components/layouts';

import { FullScreenLoading } from '../../components/ui/FullScreenLoading';
import { ProductList } from '../../components/products/ProductList';

const WomenPage: NextPage = () => {
  const { products, isLoadding } = useProducts('/products?gender=women');

  return (
    <ShopLayout
      title={'Teslo-Shop - Women'}
      pageDescription={'Encuentra los mejores productos de Teslo para mujeres'}
    >
      <Typography variant='h1' component='h1'>
        Mujer
      </Typography>
      <Typography variant='h2' sx={{ marginBottom: 1 }}>
        Productos para mujer
      </Typography>

      {isLoadding ? <FullScreenLoading /> : <ProductList products={products} />}
    </ShopLayout>
  );
};

export default WomenPage;
