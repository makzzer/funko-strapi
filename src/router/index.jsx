import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Shop from "../pages/Shop";
import Ingresar from "../pages/Ingresar";
import Contacto from "../pages/Contacto";
//importo el array que le paso como prop al Home, sino no funciona
import { elementosLanding, nuevosLanzamientos, grillaShop } from "../App";
import DefaultLayout from "../layouts/DefaultLayout";
import Carrito from "../pages/Carrito";
import PrivateLayout from "../layouts/PrivateLayout";
import DashboardUser from "../pages/DashboardUser";

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
        path: "/ingresar",
        element: <Ingresar />,
      },

      {
        path: "/contacto",
        element: <Contacto />,
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
    ],
  },
]);
