import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { mainListItems, secondaryListItems } from "./listItems";
import Chart from "./Chart";
import Profit from "./Profit";
import TablaCompras from "./TablaCompras";
import { useEffect, useState } from "react";
import BotonCerrarSesion from "../BotonCerrarSesion";
import OrderList from "../Cards/OrderList";

import axios from "axios";

//import { response } from "express";





function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Makz Funko
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

function DashboardUsuario() {
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  //estado de compras - osea la lista de compras con las que incializo
  const [compras, setCompras] = useState([]);

//llamada asincronica a las compras
useEffect(() => {
  axios.get("http://localhost:1337/api/compras?populate=*")
    .then((response) => {
      const detalleCompra = response.data.data.map((item) => ({
        id: item.id,
        fecha: item.attributes.fecha,
        cantidad: item.attributes.cantidadProductos, // Asegúrate de usar la clave correcta
        monto: item.attributes.monto,
        producto: item.attributes.productosComprados.data.map(producto => producto.attributes.title),
        estadoCompra: item.attributes.estado_compra.data.attributes.name || 'Estado Desconocido', // Manejar el caso de undefined
      }));

      setCompras(detalleCompra);
      console.log(detalleCompra);
    })
    .catch((error) => {
      console.error("Error al obtener los productos:", error);
    });
}, []); // Asegúrate de pasar un array vacío como dependencia si solo quieres que se ejecute una vez


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

    {
      date: "3 de diciembre",
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
    <ThemeProvider theme={defaultTheme}>
      <Typography variant="h3">Compras</Typography>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        <Drawer variant="permanent" open={open} sx={{ zIndex: 0 }}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            {mainListItems}
            <Divider sx={{ my: 1 }} />
            {secondaryListItems}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mb: 4 }}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Paper
                  elevation={3}
                  sx={{
                    minWidth: "100vh",
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    //flexGrow: 1,
                  }}
                >
                  <OrderList orders={orders} />
                </Paper>
              </Grid>
            </Grid>
            <BotonCerrarSesion />
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default DashboardUsuario;
