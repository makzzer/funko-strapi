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
    <div className="border-b border-gray-300">
      
      <form className="max-w-full rounded-md p-2 m-2 flex flex-col md:flex-row justify-between items-start">
        <div className="flex md:flex-row justify-between font-semibold items-center w-full">
          <button
            className="ml-auto z-0 cursor-pointer bg-red-200 me-2 md:me-4"
            onClick={eliminarElemento}
          >
            <ion-icon name="close-circle-outline" size="large"></ion-icon>
          </button>

          <div className="mx-auto items-center  md:w-1/4 md:flex-shrink-0">
            <img src={img} alt="Producto" className="w-16 h-16" />
          </div>

          <div className="text-start bg-green-200 md:flex-1">
            {!esPantallaMobile ? (
              <h1 className="text-sm md:text-md">{title}</h1>
            ) : (
              <>
                <h1 className="text-xs">{title}</h1>
              </>
            )}
          </div>

          <div className="flex items-center">
            <button
              onClick={restarElementoCarrito}
              className={`py-1 bg-red-700 min-w-[20px] rounded-lg md:text-lg text-xs hover:bg-red-600 px-1 m-1 font-semibold text-white ${
                esPantallaMobile && "hidden"
              }`}
            >
              -
            </button>

            <div className="relative">
              <label htmlFor={`cantidad-${id}`} className="hidden"></label>

              <button
                onClick={restarElementoCarrito}
                className={`py-1 bg-red-700 min-w-[20px] md:hidden rounded-lg md:text-lg text-xs hover:bg-red-600 px-1 m-1 font-semibold text-white ${
                  !esPantallaMobile && "hidden"
                }`}
              >
                -
              </button>

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

          <div className="text-center md:ms-2">
            {!esPantallaMobile ? (
              <h1 className="text-sm md:text-md">${precio * cantidad}</h1>
            ) : (
              <>
                <h1 className="text-xs">Precio:</h1>
                <h1 className="text-xs text-red-800">${precio * cantidad}</h1>
              </>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default ElemCarrito;
