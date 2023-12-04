import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";



const OrderList = () => {
  
  const orders = [
    {
      date: "1 de diciembre",
      productImage:
        "http://localhost:1337/uploads/thumbnail_luke_1_27af8f544a.webp",
      status: "En preparación",
      productTitle: "Vitalcan Balanced Perro Adulto Grande 20k + Regalo!!",
      productInfo: "1 unidad",
      productLink:
        "https://articulo.mercadolibre.com.ar/MLA-1471292850-vitalcan-balanced-perro-adulto-grande-20k-regalo-_JM",
    },
    {
      date: "2 de diciembre",
      productImage:
        "http://localhost:1337/uploads/thumbnail_luke_1_27af8f544a.webp",
      status: "En preparación",
      productTitle: "Vitalcan Balanced Perro Adulto Grande 20k + Regalo!!",
      productInfo: "1 unidad",
      productLink:
        "https://articulo.mercadolibre.com.ar/MLA-1471292850-vitalcan-balanced-perro-adulto-grande-20k-regalo-_JM",
    },
  ];
  return (
    <>
      {orders.map((orden, index) => (
        <Card key={index} sx={{ minWidth: 900, marginBottom: 2 }}>
          <CardMedia
            component="img"
            image={orden.productImage}
            alt={orden.title}
            sx={{
              objectFit: 'cover',
              width: '140px',  // Ajusta el ancho de la imagen
              height: '140px', // Ajusta la altura de la imagen
              margin: "auto",
            }}
          />
          <CardContent>
            <Typography variant="h6" component="div">
              {orden.date}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {orden.status}
            </Typography>
            <Typography variant="body1" paragraph>
              {orden.productTitle}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {orden.productInfo}
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