import React, { useState, useEffect } from "react";
import axios from "axios";
import ListaGrid from "../components/ListaGrid";

const Shop = () => {
  const [paginaActual, setPaginaActual] = useState(0);
  const elementosPorPagina = 8;

  // Estado para categorías
  const [categorias, setCategorias] = useState([]);

  // Estado para la categoría seleccionada
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todas");

  // Estado para productos
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    // Obtener productos desde la API
    axios
      .get("http://localhost:1337/api/funkos?populate=*")
      .then((response) => {
        const datosAdaptados = response.data.data.map((item) => ({
          id: item.id,
          title: item.attributes.title,
          categoria: item.attributes.categories?.data[0]?.attributes?.name || "CATEGORIA_POR_DEFECTO",
          img: "http://localhost:1337" + item.attributes.imagen.data.attributes.formats.small.url,
          precio: item.attributes.precio,
          cuotas: `${item.attributes.cuotas} cuotas sin interés`,
          tag1: item.attributes.tag1,
          tag2: item.attributes.tag2,
        }));

        setProductos(datosAdaptados);
      })
      .catch((error) => {
        console.error("Error al obtener los productos:", error);
      });

    // Obtener categorías desde la API
    axios
      .get("http://localhost:1337/api/categories")
      .then((response) => {
        const categoriasNombres = response.data.data.map((categoria) => categoria.attributes.name);
        setCategorias(["Todas", ...categoriasNombres]);
      })
      .catch((error) => {
        console.error("Error al obtener las categorías:", error);
      });
  }, []);

  const handlePaginaAnterior = () => {
    if (paginaActual > 0) {
      setPaginaActual((prevPagina) => prevPagina - 1);
      window.scrollTo(0, 0);
    }
  };

  const handlePaginaSiguiente = () => {
    const ultimaPagina = Math.ceil(productosFiltrados.length / elementosPorPagina) - 1;
    if (paginaActual < ultimaPagina) {
      setPaginaActual((prevPagina) => prevPagina + 1);
      window.scrollTo(0, 0);
    }
  };

  const handleCategoriaChange = (e) => {
    setCategoriaSeleccionada(e.target.value);
    setPaginaActual(0); // Reinicia la página al cambiar la categoría
  };

  const indiceInicio = paginaActual * elementosPorPagina;
  const indiceFin = indiceInicio + elementosPorPagina;
  const productosFiltrados =
    categoriaSeleccionada === "Todas"
      ? productos
      : productos.filter((producto) => producto.categoria === categoriaSeleccionada);
  const productosPagina = productosFiltrados.slice(indiceInicio, indiceFin);

  return (
    <div className="transition-all duration-500 max-w-6xl mx-auto flex flex-col items-center container mt-10 md:mt-20">
      <div className="text-center text-4xl md:text-6xl mt-22 pt-14">
        
      </div>

      <div className="pt-7 flex-row md:flex md:items-center justify-items-center justify-between md:mb-10 mb-2">
        <div className="flex mb-1 md:mb-3 justify-between px-1">
          <form className="w-full">
            <div className="flex">
              <input
                type="text"
                placeholder="Busca tu funko"
                className="w-full border border-gray-300 rounded-lg py-3 px-6 md:w-[55rem]"
              />
            </div>
          </form>
        </div>

        <div className="mb-2 flex md:flex-row flex-col md:items-center items-start text-base md:text-lg ps-4">
          <label htmlFor="select" className="text-gray-700 md:block md:px-1 font-semibold hidden mt-2 me-1 mb-2">
            Ordenar por:
          </label>
          <select
            id="select"
            className="border-gray-900 rounded-md shadow-md from-neutral-700 focus:outline-none focus:ring-gray-900 focus:border-gray-900"
            value={categoriaSeleccionada}
            onChange={handleCategoriaChange}
          >
            {categorias.map((categoria) => (
              <option key={categoria} value={categoria}>
                {categoria}
              </option>
            ))}
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