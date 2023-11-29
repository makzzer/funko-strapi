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
    //ahora voy a crear la parte de sweet alert
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

  //restar elemento del carrito, usa el hook del context useCarritoContext
  //acá veo si la cantidad que voy modificando es menor o igual a 1 entonces elimino el producto directamente
  //sino le resto 1 simplemente
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
      return
    } else {
      restarElemento(id);
      setCantidadModificada(cantidadModificada - 1);
    }
  };

  //sumar elemento del carrito, usa el hook del context useCarritoContext
  const sumarElementoCarrito = (e) => {
    e.preventDefault();
    console.log("estoy en el metdodo y el id es " + id);
    sumarElemento(id);
    setCantidadModificada(cantidadModificada + 1);
  };

  return (
    <div className="border-b border-gray-300">
      <form className="uppercase max-w-md md:ms-0 md:max-w-none rounded-md md:p-4 m-2 flex md:flex-row justify-between mx-auto flex-col w-full">
        <div className="flex md:flex-row flex-col md:justify-between  font-semibold items-center justify-center">
          {/*Primer boton, el que elimina todo el articulo*/}
          <button
            className="ml-auto md:ml-0 z-0 cursor-pointer md:me-8"
            onClick={eliminarElemento}
          >
            <ion-icon name="close-circle-outline" size="large"></ion-icon>
          </button>

          <div className="mx-auto items-center md:ps-10">
            <img src={img} alt="Producto" className="w-20 h-20" />
          </div>

          <div className="md:min-w-[16rem] text-center flex  ">
            {!esPantallaMobile ? (
              <h1 className="items-start ">{title}</h1>
            ) : (
              <>
                <h1 className="items-start me-2">Producto:</h1>
                <h1 className="items-start ">{title}</h1>
              </>
            )}
          </div>

          {/**este es el div que tiene los botones y la cantidad */}
          <div className="md:min-w-[16rem] md:flex md:pe-4  flex flex-row items-center justify-center">
            <button
              onClick={restarElementoCarrito}
              className={`py-2 bg-red-700 min-w-[20px] rounded-lg md:text-lg text-md hover:bg-red-600 px-1 m-1 text-md font-semibold text-white ${
                esPantallaMobile && "hidden"
              }`}
              //onClick={() => {
              //vaciarCarrito();
              // window.scrollTo(0, 0);
              //}}
            >
              -
            </button>

            {/*este div tiene el input de la cantidad y el label*/}
            <div className="">
              <label
                htmlFor="cantidad"
                className="text-red-600 hidden "
              ></label>

              {/**este es el boton - pero de responsive despues del label de cantidad */}

              <button
                onClick={restarElementoCarrito}
                className={`py-2 bg-red-700 min-w-[20px] md:hidden rounded-lg md:text-lg text-md hover:bg-red-600 px-1 m-1 text-md font-semibold text-white ${
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
                className="w-12 md:w-14 text-center justify-center md:ps-3 text-red-700 md:px-0 px-2  py-1 border border-gray-300 rounded-md focus:outline-none focus:border-red-600"
                //onChange={(e) => actualizarCantidad(id,parseInt(e.target.value))}
                onBlur={cantidadModificada === 0 && setCantidadModificada(1)}
                onChange={(e) =>
                  setCantidadModificada(parseInt(e.target.value))
                }
              />
            </div>

            {/**boton + */}
            <button
              onClick={sumarElementoCarrito}
              className="py-2  bg-red-700 min-w-[20px] rounded-lg md:text-lg text-md hover:bg-red-600 px-1 m-1 text-md font-semibold text-white"
              //onClick={() => {
              //vaciarCarrito();
              // window.scrollTo(0, 0);
              //}}
            >
              +
            </button>
          </div>

          <div className="md:min-w-[16rem] text-center md:justify-end items-center flex md:ms-3 ">
            {!esPantallaMobile ? (
              <h1 className="items-start ">${precio * cantidad}</h1>
            ) : (
              <>
                <h1 className="items-start me-2">Precio:</h1>
                <h1 className="items-start text-red-800 ">
                  ${precio * cantidad}
                </h1>
              </>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default ElemCarrito;
