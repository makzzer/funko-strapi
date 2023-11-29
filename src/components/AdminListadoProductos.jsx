import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import { useProductoContext } from "../context/ProductosContext";

const AdminListadoProductos = () => {
  const { productos, setProductos } = useProductoContext();
  const [searchTerm, setSearchTerm] = useState("");
  const [paginaActual, setPaginaActual] = useState(0);
  const elementosPorPagina = 8;


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

  const productosFiltrados = productos.filter((producto) =>
    producto.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indiceInicio = paginaActual * elementosPorPagina;
  const indiceFin = indiceInicio + elementosPorPagina;
  const productosPagina = productosFiltrados.slice(indiceInicio, indiceFin);

  return (
    <>
      <div className="container mx-auto flex flex-col">
        <div className="flex gap-2 justify-between flex-col md:flex-row items-center mb-10">
          <input
            type="text"
            placeholder="Buscar productos"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="m-2 md:m-0 border w-full border-gray-300 px-4 py-2 rounded-lg"
          />
          <NavLink className="bg-red-700 md:w-auto md:flex-shrink-0 md:py-2 w-full flex-shrink-0 md:px-4 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg">
            Crear Nuevo
          </NavLink>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full divide-y divide-gray-200 overflow-x-auto">
            <thead>
              <tr>
                <th className="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Imagen
                </th>
                <th className="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  CÓDIGO
                </th>
                <th className="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  NOMBRE DEL PRODUCTO
                </th>
                <th className="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  CATEGORÍA
                </th>
              </tr>
            </thead>

            <tbody className="divide-y">
              {productosPagina.map((elem) => (
                <tr key={elem.id}>
                  <td className="px-6 py-4 whitespace-nowrap flex mx-auto justify-center">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img
                          src={elem.img}
                          alt="Imagen del producto"
                          className="h-12 w-12 mx-auto"
                        />
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    {elem.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    {elem.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    {elem.title}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    {elem.subTitle}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="text-gray-900">
                      <ion-icon name="create-outline"></ion-icon>
                    </button>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="text-red-700">
                      <ion-icon name="trash-outline"></ion-icon>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex justify-center mt-4">
            <button
              className="px-4 py-2 text-sm bg-red-200 text-gray-700 mr-2"
              onClick={handlePaginaAnterior}
              disabled={paginaActual === 0}
            >
              &lt; Anterior
            </button>
            <button
              className="px-4 py-2 text-sm bg-red-200 text-gray-700"
              onClick={handlePaginaSiguiente}
              disabled={
                paginaActual ===
                Math.ceil(productos.length / elementosPorPagina) - 1
              }
            >
              Siguiente &gt;
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminListadoProductos;
