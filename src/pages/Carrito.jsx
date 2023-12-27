import { useCarritoContext } from "../context/CarritoContext";
import ElemCarrito from "../components/ElemCarrito";
import { useEffect } from "react";
import { DetectarTamañoPantalla } from "../utilities/DetectarTamañoPantalla";
import { NavLink } from "react-router-dom";

const Carrito = () => {
  //desestructuro desde m context los metodos y el array de carrito para usarlo en este componente
  const { carrito, vaciarCarrito, totalCarrito } = useCarritoContext();

  // llamo al userContext para ver si lo toma
  // const { user } = useUserContext();

  //metodo que traigo de otro componente para ver si estoy en pantalla pequeña
  const esPantallaMobile = DetectarTamañoPantalla();

  //use effect que uso para scrolear al top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //le paso al elemento del carrito el ID al que corresponde el presionado
  const indiceProducto = 0;

  return (
    <div className="transition-all duration-700 min-h-fit mx-auto max-w-6xl text-center items-center flex-col ">
      <h1 className="text-md font-bold text-black text-left md:px-4 px-8 pb-4  pt-2">
        Mi carrito
      </h1>

      {carrito.length === 0 ? (
        <>
          <div className=" p-4 mb-6 mx-2">
            <h1 className="md:text-2xl text-2xl text-bold text-red-700 mb-">
              Tu carrito está vacío
            </h1>
          </div>

          <NavLink
            to={"/shop"}
            className="m-2 p-2 bg-red-800 rounded-lg text-lg hover:bg-red-600 text-white"
          >
            Ir al Shop
          </NavLink>
        </>
      ) : (
        <ul className="border rounded-md divide-y md:m-0 m-2 p-0">
          {carrito.map(
            (elem) =>
              elem.cantidad != 0 && (
                <li className="p-0 m-2 md:m-0">
                  <ElemCarrito
                    key={elem.id}
                    id={elem.id}
                    title={elem.title}
                    precio={elem.precio}
                    img={elem.img}
                    cantidad={elem.cantidad}
                  />
                </li>
              )
          )}
          <li className="flex flex-row font-semibold min-h-max	p-0 m-2 md:m-0 items-center md:justify-end justify-between gap-2 md:text-lg">
            <div className="items-center flex justify-center md:pb-10">
              {/* Agregar flex al primer div siguiente */}
              {carrito.length > 0 && (
                <div className="items-center  justify-start ">
                  <button
                    className="py-2 rounded-lg md:text-lg text-sm text-md text-black hover:bg-red-600 px-2 m-2 text-md font-semibold "
                    onClick={() => {
                      vaciarCarrito();
                      //window.scrollTo(0, 0);
                    }}
                  >
                    Vaciar Carrito
                  </button>
                </div>
              )}

              <NavLink
                to="/shop"
                className="py-2 bg-red-700 rounded-lg  hover:bg-red-600 px-2 m-2 md:text-md text-sm font-semibold md: text-white"
              >
                Seguir comprando
              </NavLink>

              {/* Mover el div del total al final del li */}
              <div className="flex gap-1 md:ml-2 ">
                <div className="md:w-1/8 md:w-auto text-black md:text-md text-sm">
                  Total:
                </div>
                <div className="md:w-1/8  text-red-700 md:text-md text-sm">
                  ${totalCarrito()}
                </div>
              </div>
            </div>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Carrito;
