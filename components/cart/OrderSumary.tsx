import { Grid, Typography } from '@mui/material';

export const OrderSumary = () => {
  return (
    <Grid container>
      <Grid item xs={6}>
        <Typography>No. Productos</Typography>
      </Grid>
      <Grid item xs={6} display='flex' justifyContent='end'>
        <Typography>3 items</Typography>
      </Grid>

      <Grid item xs={6}>
        <Typography>Subtotal</Typography>
      </Grid>
      <Grid item xs={6} display='flex' justifyContent='end'>
        <Typography>{155.35}€</Typography>
      </Grid>

      <Grid item xs={6}>
        <Typography>IVA 21%</Typography>
      </Grid>
      <Grid item xs={6} display='flex' justifyContent='end'>
        <Typography>{15.35}€</Typography>
      </Grid>

      <Grid item xs={6} sx={{mt: 2}}>
        <Typography variant='subtitle1'>Total</Typography>
      </Grid>
      <Grid item xs={6}  sx={{mt: 2}} display='flex' justifyContent='end'>
        <Typography variant='subtitle1'>{180.35}€</Typography>
      </Grid>
    </Grid>
  );
};
