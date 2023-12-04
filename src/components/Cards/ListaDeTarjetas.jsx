import React from 'react';
import { Card, CardContent, CardMedia, Typography, Link } from '@mui/material';

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
