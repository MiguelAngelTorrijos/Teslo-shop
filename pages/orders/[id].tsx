import NextLink from 'next/link';

import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
  Link,
  Chip,
} from '@mui/material';
import { CartList, OrderSumary } from '../../components/cart';
import { ShopLayout } from '../../components/layouts';
import {
  CreditCardOffOutlined,
  CreditScoreOutlined,
} from '@mui/icons-material';

const OrderPage = () => {
  return (
    <ShopLayout
      title='Resumen del pedido'
      pageDescription={'Resumen del pedido'}
    >
      <Typography variant='h1' component='h1' sx={{ mb: 3 }}>
        Pedido: ABC123
      </Typography>

      {/* <Chip
        sx={{ my: 2 }}
        label='Pendiente de pago'
        variant='outlined'
        color='error'
        icon={<CreditCardOffOutlined />}
      /> */}
      <Chip
        sx={{ my: 2 }}
        label='Pedido pagado'
        variant='outlined'
        color='success'
        icon={<CreditScoreOutlined />}
      />

      <Grid container>
        <Grid item xs={12} sm={7}>
          <CartList />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Card className='sumary-card'>
            <CardContent>
              <Typography variant='h2'>Resumen (3 productos)</Typography>
              <Divider sx={{ my: 1 }} />

              <Box display='flex' justifyContent='space-between'>
                <Typography variant='subtitle1'>
                  Dirección de entrega
                </Typography>
                <NextLink href='/checkout/address' passHref>
                  <Link underline='always'>Editar</Link>
                </NextLink>
              </Box>

              <Typography>Miguel Torrijos</Typography>
              <Typography>323 C/ Mayor</Typography>
              <Typography>Madrid</Typography>
              <Typography>España</Typography>
              <Typography>+34 666 777 888</Typography>
              <Divider sx={{ my: 1 }} />

              <Box display='flex' justifyContent='end'>
                <NextLink href='/cart' passHref>
                  <Link underline='always'>Editar</Link>
                </NextLink>
              </Box>

              <OrderSumary />

              <Box sx={{ mt: 3 }}>
                <h1>Pagar</h1>

                <Chip
                  sx={{ my: 2 }}
                  label='Pedido pagado'
                  variant='outlined'
                  color='success'
                  icon={<CreditScoreOutlined />}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default OrderPage;
