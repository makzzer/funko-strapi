import { useState } from "react";
import { useCarritoContext } from "../context/CarritoContext";
import { DetectarTamañoPantalla } from "../utilities/DetectarTamañoPantalla";
import swal from "sweetalert";
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

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
    <div className="border-b border-gray-300 text-black ">
      <form className="max-w-full rounded-md p-2  flex flex-col md:flex-row justify-between items-start">
        <div className="flex flex-row justify-between font-semibold items-center min-w-full">
          <div className="">
            <button className="cursor-pointer me-0 " onClick={eliminarElemento}>
              <DeleteForeverOutlinedIcon className="text-red-700" style={{ fontSize: '32px' }}/>
            </button>
          </div>

          <div className="w-1/8 md:flex-shrink-0">
            <img src={img} alt="Producto" className="w-16 h-16" />
          </div>

          <div className="text-start me-auto  max-w-[100px] md:min-w-[120px] min-w-[80px] text-black flex-1">
            <h1
              className={`text-${
                esPantallaMobile ? "sm" : "sm"
              } md:text-md font-semibold`}
            >
              {title}
            </h1>
          </div>

          {/**modificar este div */}

          <div className="flex items-center  space-x-0  me-auto ">
            <div className="flex items-center border bg-red-700 border-gray-300 rounded-md overflow-hidden min-w-[90px]">
              <button
                onClick={restarElementoCarrito}
                className={`py-1 px-2 bg-red-700 text-white `}
              >
                <span className="sr-only">Restar</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-3 w-3"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 4a1 1 0 011-1h2a1 1 0 010 2H10v5a1 1 0 01-2 0V5H7a1 1 0 110-2h2a1 1 0 011 1zm8 5a1 1 0 110 2H3a1 1 0 110-2h14z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              <input
                type="number"
                id={`cantidad-${id}`}
                value={cantidadModificada}
                readOnly
                className="w-8 mx-1 text-red-700 text-xs text-center md:text-end md:text-sm focus:outline-none"
                onBlur={() =>
                  cantidadModificada === 0 && setCantidadModificada(1)
                }
                onChange={(e) =>
                  setCantidadModificada(parseInt(e.target.value))
                }
              />

              <button
                onClick={sumarElementoCarrito}
                className="py-1 px-2 bg-red-700 text-white hover:bg-red-600"
              >
                <span className="sr-only">Sumar</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-3 w-3"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 4a1 1 0 011 1v4h4a1 1 0 110 2h-4v4a1 1 0 11-2 0v-4H5a1 1 0 110-2h4V5a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="text-left	 ms-2 min-w-[70px]">
            {!esPantallaMobile ? (
              <div className="flex flex-col">

                <div>
                  {" "}
                  <h1
                    className={`text-${
                      esPantallaMobile ? "xs" : "sm"
                    } md:text-md text-red-800 text-start font-semibold`}
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
                    <h1 className="text-sm font-semibold text-start	 text-red-800">
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
