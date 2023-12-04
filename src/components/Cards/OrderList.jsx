import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";



const OrderList = ({orders}) => {
  return (
    <>
      {orders.map((orden, index) => (
        <Card key={index} sx={{ minWidth: 900, marginBottom: 2 }}>
          <CardMedia
            component="img"
            image={orden.imagen}
            alt={orden.producto}
            sx={{
              objectFit: 'cover',
              width: '140px',  // Ajusta el ancho de la imagen
              height: '140px', // Ajusta la altura de la imagen
              margin: "auto",
            }}
          />
          <CardContent>
            <Typography variant="h6" component="div">
              {orden.fecha}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {orden.estadoCompra}
            </Typography>
            <Typography variant="body1" paragraph>
              {orden.producto}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {"$"+orden.monto}
            </Typography>
            <Link href={orden.productLink} target="_blank">
              Ver Detalles
            </Link>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default OrderList;
