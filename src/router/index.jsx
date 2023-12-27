import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Shop from "../pages/Shop";
import Ingresar from "../pages/Ingresar";
//importo el array que le paso como prop al Home, sino no funciona
import { elementosLanding, nuevosLanzamientos, grillaShop } from "../App";
import DefaultLayout from "../layouts/DefaultLayout";
import Carrito from "../pages/Carrito";
import PrivateLayout from "../layouts/PrivateLayout";
import DashboardUser from "../pages/DashboardUser";
import DetallesProducto from "../pages/DetallesProducto";


//voy a usar un layout y dentro de ese layout un objeto con todas las paginas como main del layout, eso lo hago con <Outlet/>

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: (
          <Home
            elementosLanding={elementosLanding}
            nuevosLanzamientos={nuevosLanzamientos}
            
          />
        ),
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/micuenta",
        element: <Ingresar />,
      },

      {
        path: "/carrito",
        element: <Carrito />,
      },

      {
        path: "/dashboarduser",
        element: <PrivateLayout />,
        children: [{ index: true, element: <DashboardUser /> }],
      },

      {
        path: "/productodetalle/:id",
        element: <DetallesProducto/>,
      },
    ],
  },
]);
