import { Chip, Grid, Typography, Link } from '@mui/material';
import { ShopLayout } from '../../components/layouts';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import NextLink from 'next/link';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'fullname', headerName: 'Nombre completo', width: 300 },
  {
    field: 'paid',
    headerName: 'Pagado',
    description: 'Muestra información de pago',
    width: 200,
    renderCell: (params: GridValueGetterParams) => {
      return params.row.paid ? (
        <Chip color='success' label='Pagada' variant='outlined' />
      ) : (
        <Chip color='error' label='Pendiente' variant='outlined' />
      );
    },
  },
  {
    field: 'order',
    headerName: 'Ver pedido',
    width: 200,
    sortable: false,
    renderCell: (params: GridValueGetterParams) => {
      return (
        <NextLink href={`/orders/${params.row.id}`} passHref>
          <Link underline='always'>Ver pedido</Link>
        </NextLink>
      );
    },
  },
];

const rows = [
  { id: 1, paid: false, fullname: 'Miguel Torrijos' },
  { id: 2, paid: true, fullname: 'Pedro Caballero' },
  { id: 3, paid: false, fullname: 'Julio Sánchez' },
  { id: 4, paid: true, fullname: 'Berenice Polo' },
  { id: 5, paid: false, fullname: 'Alejandro Nor' },
  { id: 6, paid: true, fullname: 'Aurora Lucas' },
];

const HistoryPage = () => {
  return (
    <ShopLayout
      title={'Historial de pedidos'}
      pageDescription={'Historial de pedidos del cliente'}
    >
      <Typography variant='h1' component='h1' sx={{ mb: 2 }}>
        Historial de pedidos
      </Typography>

      <Grid container>
        <Grid item xs={12} sx={{ height: 650, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
          />
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default HistoryPage;
