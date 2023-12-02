import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const ProductoCompradoCard = () => {
  return (
    <Card sx={{display:'flex', width:300}}>
      <CardMedia
        component="img"
        width="100"
        height="100"
        image="http://localhost:1337/uploads/thumbnail_luke_1_27af8f544a.webp"
        alt="Nombre del producto"
        sx={{ objectFit: 'cover' }}
      />
      <CardContent sx={{flexGrow: 1}}>
        <Typography gutterBottom variant="h5" component="div">
          Nombre del Producto
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Precio: $50.00
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Fecha de Compra: 01/01/2023
        </Typography>
        <Button variant="contained" color="primary">
          Ver Compra
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductoCompradoCard;
