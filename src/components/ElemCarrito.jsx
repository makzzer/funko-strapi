import { useState } from "react";
import { useCarritoContext } from "../context/CarritoContext";
import { DetectarTamañoPantalla } from "../utilities/DetectarTamañoPantalla";
import swal from "sweetalert";

const ElemCarrito = ({ id, title, precio, img, cantidad }) => {
  const { eliminarElementoCarrito, restarElemento, sumarElemento } =
    useCarritoContext();

  const [cantidadModificada, setCantidadModificada] = useState(cantidad);

  const esPantallaMobile = DetectarTamañoPantalla();

  const eliminarElemento = async (e) => {
    e.preventDefault();
    const resultadoUsuario = await swal({
      icon: "warning",
      title: "¿Está seguro que desea eliminar el producto del carrito?",
      buttons: {
        cancel: "Cancelar",
        confirm: "Confirmar",
      },
    });
    resultadoUsuario && eliminarElementoCarrito(id);
  };

  const restarElementoCarrito = async (e) => {
    e.preventDefault();
    if (cantidadModificada <= 1) {
      const resultadoUsuario = await swal({
        icon: "warning",
        title: "¿Está seguro que desea eliminar el producto del carrito?",
        buttons: {
          cancel: "Cancelar",
          confirm: "Confirmar",
        },
      });
      resultadoUsuario && eliminarElementoCarrito(id);
      return;
    } else {
      restarElemento(id);
      setCantidadModificada(cantidadModificada - 1);
    }
  };

  const sumarElementoCarrito = (e) => {
    e.preventDefault();
    sumarElemento(id);
    setCantidadModificada(cantidadModificada + 1);
  };

  return (
    <div className="border-b border-gray-300 text-black">
      <form className="max-w-full rounded-md p-2 m-2 flex flex-col md:flex-row justify-between items-start">
        <div className="flex md:flex-row justify-between bg-green-200 font-semibold items-center min-w-full">

          <div className="bg-red-200">
            <button
              className="cursor-pointer me-0 "
              onClick={eliminarElemento}
            >
              <ion-icon name="close-circle-outline" size="large"></ion-icon>
            </button>
          </div>

          <div className=" me-auto w-1/8 bg-yellow-300 md:flex-shrink-0">
            <img src={img} alt="Producto" className="w-16 h-16" />
          </div>

          <div className="text-start ms-2 text-black flex-1">
            <h1
              className={`text-${
                esPantallaMobile ? "sm" : "sm"
              } md:text-md font-semibold`}
            >
              {title}
            </h1>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={restarElementoCarrito}
              className={`py-1 bg-red-700 min-w-[20px] rounded-lg md:text-lg text-xs hover:bg-red-600 px-1 m-1 font-semibold text-white ${
                esPantallaMobile && "hidden"
              }`}
            >
              -
            </button>

            <div className="relative">
              <input
                type="number"
                id={`cantidad-${id}`}
                value={cantidadModificada}
                readOnly
                className="w-8 md:w-10 text-center justify-center md:ps-2 text-red-700 md:px-0 px-1 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-red-600 text-xs md:text-sm"
                onBlur={() =>
                  cantidadModificada === 0 && setCantidadModificada(1)
                }
                onChange={(e) =>
                  setCantidadModificada(parseInt(e.target.value))
                }
              />
            </div>

            <button
              onClick={sumarElementoCarrito}
              className="py-1 bg-red-700 min-w-[20px] rounded-lg md:text-lg hover:bg-red-600 px-1 m-1 text-xs font-semibold text-white"
            >
              +
            </button>
          </div>

          <div className="text-center ms-2">
            {!esPantallaMobile ? (
              <div className="flex flex-col">
                <div>
                  <h1 className="text-xs">Precio:</h1>
                </div>
                <div>
                  {" "}
                  <h1
                    className={`text-${
                      esPantallaMobile ? "xs" : "sm"
                    } md:text-md text-red-800 font-semibold`}
                  >
                    ${precio * cantidad}
                  </h1>
                </div>
              </div>
            ) : (
              <>
                <div className="flex flex-col">
                  {" "}
                  <div>
                    <h1 className="text-xs">Precio:</h1>
                  </div>
                  <div>
                    <h1 className="text-xs text-red-800">
                      ${precio * cantidad}
                    </h1>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default ElemCarrito;
