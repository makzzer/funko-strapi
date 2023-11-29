import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useProductoContext } from "../context/ProductosContext";

import ListaGrid from "../components/ListaGrid";

const Shop = () => {
  const [paginaActual, setPaginaActual] = useState(0);
  const elementosPorPagina = 8;

  

  

  // Aquí debes obtener los productos de alguna manera, por ejemplo, desde el contexto o una API
  const {productos} = useProductoContext(); // Obtén los productos desde el contexto o una API

  const handlePaginaAnterior = () => {
    if (paginaActual > 0) {
      setPaginaActual((prevPagina) => prevPagina - 1);
      window.scrollTo(0, 0);
    }
  };

  const handlePaginaSiguiente = () => {
    const ultimaPagina = Math.ceil(productos.length / elementosPorPagina) - 1;
    if (paginaActual < ultimaPagina) {
      setPaginaActual((prevPagina) => prevPagina + 1);
      window.scrollTo(0, 0);
    }
  };

  const indiceInicio = paginaActual * elementosPorPagina;
  const indiceFin = indiceInicio + elementosPorPagina;
  const productosPagina = productos.slice(indiceInicio, indiceFin);





  return (
    <div className=" transition-all duration-500 max-w-6xl mx-auto d:flex md:flex-col items-center container  mt-10 md:mt-20">
    <div className="text-center text-4xl md:text-6xl mt-22 pt-14">
      <h1>Shop</h1>
    </div>

    {/*div flex col que contiene  barra y filtros*/}

    <div className=" pt-7 md:flex-row flex-col md:flex items-center justify-between md:mb-10 mb-2">
      <div className="flex mb-1 md:mb-3 justify-between px-1">
        <form className="w-full ">
          <div className="flex">
            <input
              type="text"
              placeholder="Busca tu funko"
              className="w-full border border-gray-300 rounded-lg py-3 px-6   md:w-[55rem]"
            />
          </div>
        </form>
      </div>

      <div className="mb-2 flex md:flex-row flex-col md:items-center items-start text-base md:text-lg ps-4">
        <label
          htmlFor="select"
          className="text-gray-700 font-semibold mt-2 me-1 mb-2"
        >
          Ordenar por:
        </label>
        <select
          id="select"
          className="border-gray-900 rounded-md shadow-sm font-extrabold  focus:outline-none focus:ring-gray-900 focus:border-gray-900"
        >

      

          <option value="option1">Harry Potter</option>
          <option value="option1">Star wars</option>
          <option value="option2">Marvel</option>
          <option value="option2">Pokemon</option>





        </select>
      </div>
    </div>

      <main className="container flex flex-col md:max-w-6xl">
        <div className="p-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-10">
            <ListaGrid productos={productosPagina} />
          </div>
        </div>

        <div className="flex justify-center my-4">
          <button
            className="px-4 py-2 text-sm font-semibold bg-red-200 text-gray-700 mr-2"
            onClick={handlePaginaAnterior}
            disabled={paginaActual === 0}
          >
            Anterior
          </button>
          <button
            className="px-4 py-2 text-sm font-semibold bg-red-200 text-gray-700"
            onClick={handlePaginaSiguiente}
            disabled={productosPagina.length < elementosPorPagina}
          >
            Siguiente
          </button>
        </div>
      </main>
    </div>
  );
};

export default Shop;