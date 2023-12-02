import { NavLink } from "react-router-dom";
import IconoLogotipoSimple from "./icons/IconLogotipoSimple";
import { logout } from "../config/firebase";


const BotonCerrarSesion = () => {



  const cerrarSesion = async (e) => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };





  return (
    <>
      <div className="transition-all min-w-full justify-center content-center md:mb-20 mb-10 duration-700 flex flex-col md:flex-row  items-center md:text-5xl text-4xl container font-mono font-bold bg-gray-900  mt-5 md:mt-20 pb-6 pt-6">

        <div className="flex mx-auto">
          <NavLink
            onClick={cerrarSesion}
            to={"/"}
            className=" p-2 bg-red-700 rounded-lg text-lg hover:bg-red-600 text-white"
          >
            Cerrar Sesión
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default BotonCerrarSesion;
