import { useUserContext } from "../context/UserContext";
import { Navigate, Outlet } from "react-router-dom";

const PrivateLayout = () => {
  const { user } = useUserContext();

  return <>{user ? <Outlet /> : <Navigate to={"/"} />}</>;
};

export default PrivateLayout;

{
  /*
Este código implementa un componente llamado PrivateLayout, que actúa como un layout condicional. El objetivo de este componente es proporcionar un layout para las rutas que requieren autenticación. Veamos las partes clave del código:

useUserContext: Este hook probablemente proviene de tu contexto de usuario (UserContext). Se utiliza para acceder al estado del usuario y verificar si el usuario está autenticado.

Navigate y Outlet: Estos son componentes de React Router. Navigate se utiliza para navegar a una ruta específica, y Outlet se utiliza para renderizar las rutas secundarias anidadas dentro del componente actual.

{user ? <Outlet /> : <Navigate to={"/"} />}: Esta expresión ternaria verifica si hay un usuario autenticado. Si user existe (es decir, si el usuario está autenticado), renderiza <Outlet />, que representa las rutas secundarias anidadas dentro de PrivateLayout. Si el usuario no está autenticado, redirige a la página principal utilizando <Navigate to={"/"} />.

En resumen, este componente PrivateLayout sirve como un protector de rutas que requieren autenticación. Si el usuario está autenticado, muestra las rutas anidadas (<Outlet />); de lo contrario, redirige al usuario a la página principal (<Navigate to={"/"} />). Este patrón es común para proteger ciertas secciones de una aplicación y garantizar que solo los usuarios autenticados tengan acceso.*/
}
