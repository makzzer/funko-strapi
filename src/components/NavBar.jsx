import { useState, useEffect } from "react";
import IconLogo from "./icons/IconLogo";
import { NavLink } from "react-router-dom";
import { DetectarTamañoPantalla } from "../utilities/DetectarTamañoPantalla";
import { useCarritoContext } from "../context/CarritoContext";
import { useUserContext } from "../context/UserContext";
import Carrito from "../pages/Carrito";

const Nav = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [carritoMenuAbierto, setCarritoMenuAbierto] = useState(false);

  const { user } = useUserContext();
  const { totalElementosCarrito } = useCarritoContext();
  const esPantallaMobile = DetectarTamañoPantalla();

  const clasesita =
    "md:ml-0 text-gray-300 py-2 px-0 md:my-0 my-3 md:px-2 rounded-md md:text-xl text-lg font-medium transition hover:-translate-y-1 hover:scale-110 hover:bg-red-500 duration-300";

    let [open, setOpen] = useState(false);
    
  const navlinks = [
    { name: "SHOP", to: "/shop", classname: clasesita },
    { name: "INGRESAR", to: "/micuenta", classname: clasesita },
    { name: "MI CUENTA", to: "/dashboarduser", classname: clasesita },
  ];

  const maxWidth = "25%"; // Puedes ajustar este valor según tus necesidades
  const maxWidthMobile = "vw"; // Cambiado a 75% del viewport

  const cerrarMenus = () => {
    setMenuAbierto(false);
    setCarritoMenuAbierto(false);
  };

  const toggleCarritoMenu = () => {
    setCarritoMenuAbierto(!carritoMenuAbierto);
  };

  // Cerrar el menú del carrito cuando se cierra el menú principal
  useEffect(() => {
    if (!menuAbierto) {
      setCarritoMenuAbierto(false);
    }
  }, [menuAbierto]);

  return (
    <>
      {/* Menú principal */}
      <div className="bg-gray-900 shadow-md fixed mx-auto pt-1 md:pt-4 pb-0 md:py-2 md:pb-4 top-0 z-20 w-full left-0">
        <div className="px-4 md:px-10 h-[5rem] md:h-auto bg-gray-900 mb-0 justify-between max-w-6xl md:py-1 mx-auto md:flex items-center relative">
          {esPantallaMobile ? (
            <NavLink className="mr-2 pt-2" to="/" onClick={cerrarMenus}>
              <IconLogo ancho={200} alto={80} />
            </NavLink>
          ) : (
            <NavLink className="mr-2 pt-2" to="/">
              <IconLogo ancho={444} alto={80} />
            </NavLink>
          )}

          <div
            onClick={() => setOpen(!open)}
            className="text-3xl gap-4 absolute right-4 text-red-800 top-7 cursor-pointer ps-2 md:hidden"
          >
            <ion-icon name={open  ? "close" : "menu"}></ion-icon>
          </div>

          <NavLink
            onClick={() => {
              setMenuAbierto(false);
              toggleCarritoMenu();
            }}
            className="text-3xl gap-4 absolute right-16 text-red-800 top-7 cursor-pointer md:hidden"
          >
            <ion-icon name="cart-outline"></ion-icon>
            {totalElementosCarrito() > 0 && (
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-semibold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                {totalElementosCarrito()}
              </span>
            )}
          </NavLink>

          <div>
            <ul
              className={` mt-1 md:flex md:items-center md:pb-0 absolute md:static pb-1 bg-gray-900 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-11 transition-all pt-0  duration-500 ease-in ${
                open ? "top-[60px]" : "top-[-490px]"
              }`}
            >
            {navlinks
              .filter((navlink) => {
                if (user) {
                  return !(navlink.name === "INGRESAR");
                } else {
                  return !(navlink.name === "MI CUENTA");
                }
              })
              .map((navlink) => (
                <li
                  key={navlink.name}
                  className="bg-gray-900 text-xl md:my-0 my-7 pt-2 list-none md:top-0 top-20"
                >
                  <NavLink
                    to={navlink.to}
                    className={navlink.classname}
                    onClick={cerrarMenus}
                  >
                    {navlink.name}
                  </NavLink>
                </li>
              ))}

            {!esPantallaMobile && (
              <NavLink
                className="text-3xl gap-4 transition hover:-translate-y-1 hover:scale-95 hover:bg-red-500 duration-300 text-red-800 cursor-pointer ps-1 pt-3 relative"
                onClick={() => {
                  setMenuAbierto(false);
                  toggleCarritoMenu();
                }}
              >
                <ion-icon name="cart-outline"></ion-icon>
                {totalElementosCarrito() > 0 && (
                  <span className="absolute top-1 right-0 -mt-2 -mr-2 inline-flex items-center justify-center px-2 py-1 text-xs font-semibold leading-none text-red-100 bg-red-600 rounded-full">
                    {totalElementosCarrito()}
                  </span>
                )}
              </NavLink>
            )}


             </ul>
          </div>
          
        </div>
        
      </div>
      

      {/**quiero que solo funcione en el desktop por ahora */}

      {/* Menú retráctil del carrito */}
      <div
        className={`bg-gray-100 text-3xl z-30 gap-4 transition-all md:mt-32 duration-500 ease-in text-white md:w-[${maxWidth}] max-w-[${maxWidthMobile}] cursor-pointer ps-1 fixed top-0 right-0 transform ${
          carritoMenuAbierto ? "translate-x-0" : `translate-x-full`
        }`}
        style={{ maxHeight: "90vh", overflowY: "auto" }} // Agrega estilos de desplazamiento aquí
      >
        {/* Contenido del menú del carrito */}
        <Carrito />
        <div
          className="absolute top-2 right-2 text-2xl text-black cursor-pointer"
          onClick={toggleCarritoMenu}
        >
          <ion-icon name="close-outline"></ion-icon>
        </div>
      </div>
    </>
  );
};

export default Nav;
