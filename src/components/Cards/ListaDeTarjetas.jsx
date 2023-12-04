import { Card, CardContent, CardMedia, Typography, Link } from '@mui/material';


const orders = [
  {
    date: '1 de diciembre',
    productImage: 'https://http2.mlstatic.com/D_850569-MLA71326648254_082023-N.jpg',
    status: 'En preparación',
    productTitle: 'Vitalcan Balanced Perro Adulto Grande 20k + Regalo!!',
    productInfo: '1 unidad',
    productLink: 'https://articulo.mercadolibre.com.ar/MLA-1471292850-vitalcan-balanced-perro-adulto-grande-20k-regalo-_JM',
  },]

const OrderList = ({ orders }) => {
  return (
    <div>
      {orders.map((order, index) => (
        <Card key={index} sx={{ maxWidth: 400, marginBottom: 2 }}>
          <CardMedia
            component="img"
            height="140"
            image={order.productImage}
            alt={order.productTitle}
          />
          <CardContent>
            <Typography variant="h6" component="div">
              {order.date}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {order.status}
            </Typography>
            <Typography variant="body1" paragraph>
              {order.productTitle}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {order.productInfo}
            </Typography>
            <Link href={order.productLink} target="_blank">
              Ver Detalles
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default OrderList;
