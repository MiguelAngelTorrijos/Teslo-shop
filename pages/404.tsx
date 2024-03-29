import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { ShopLayout } from '../components/layouts/ShopLayout';

const Custom404 = () => {
  return (
    <ShopLayout
      title='Page not found'
      pageDescription='No hay contenido que mostrar en esta pagína'
    >
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        height='calc(100vh - 200px)'
        sx={{ flexDirection: { xs: 'column', md: 'row' } }}
      >
        <Typography variant='h1' component='h1' fontSize={80} fontWeight={200}>
          404 |
        </Typography>
        <Typography marginLeft={2}>
          No encontramos ninguna página aquí
        </Typography>
      </Box>
    </ShopLayout>
  );
};

export default Custom404;
