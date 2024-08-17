import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const DetallesProducto = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const volverPT = () => {
    navigate("/shop");
  };

  const [categorias, setCategorias] = useState([]);
  const [productos, setProductos] = useState([]);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/funkos?populate=*")
      .then((response) => {
        const datosAdaptados = response.data.data.map((item) => ({
          id: item.id,
          title: item.attributes.title,
          categoria:
            item.attributes.categories?.data[0]?.attributes?.name ||
            "CATEGORIA_POR_DEFECTO",
          img:
            "http://localhost:1337/" +
            item.attributes.imagen.data.attributes.url,
          precio: item.attributes.precio,
          cuotas: `${item.attributes.cuotas} cuotas sin interés`,
          tag1: item.attributes.tag1,
          tag2: item.attributes.tag2,
          description: item.attributes.description, // Agregado
          cantidadDisponible: item.attributes.cantidad,
        }));

        setProductos(datosAdaptados);
      })
      .catch((error) => {
        console.error("Error al obtener los productos:", error);
      });

    axios
      .get("http://localhost:1337/api/categories")
      .then((response) => {
        const categoriasNombres = response.data.data.map(
          (categoria) => categoria.attributes.name
        );
        setCategorias(["Todas", ...categoriasNombres]);
      })
      .catch((error) => {
        console.error("Error al obtener las categorías:", error);
      });
  }, [id]);

  console.log(
    "esta es la longitud de los productos que trae la api:" + productos.length
  );
  console.log("este es el iddddddddddddd" + id);

  useEffect(() => {
    // Filtrar el producto por id después de obtener todos los datos adaptados
    const productoFiltrado = productos.find(
      (producto) => producto.id.toString() === id
    );
    console.log("el id es+" + id);

    // Si se encuentra el producto, almacenarlo en el estado productoSeleccionado
    if (productoFiltrado) {
      setProductoSeleccionado(productoFiltrado);
    }
  }, [productos, id]);

  console.log(
    "este es el producto seleccionado ",
    productoSeleccionado ? productoSeleccionado.title : ""
  );

  return (
    <>
      <div className="transition-all duration-500 md:max-w-6xl max-w-3xl px-4 md:px-0 mx-auto flex flex-col items-center container mt-10 md:mt-20">
        {/*div para toda la card*/}
        <div className="bg-gray-100 mt-20 gap-5 mb-20 rounded-lg overflow-hidden flex flex-col m-1 md:flex-row shadow-lg p-6">
          {/*div para imagen en izquierda*/}
          <div className="md:flex-none rounded-lg ">
            {" "}
            <img
              src={productoSeleccionado?.img}
              alt={productoSeleccionado?.title}
              className="w-600 h-600 bg-white bg-w rounded-lg md:max-w-[600px] md:max-h-[600px]"
            />
          </div>

          {/*div para titulo,precio y descripción en izquierda*/}
          <div className="flex flex-col md:mt-16 text-center">
            {" "}
            <h2 className="text-5xl md:text-6xl font-bold mt-2 md:mt-4 mb-6">
              {productoSeleccionado?.title}
            </h2>
            <span className="text-red-600 mb-6 text-5xl  font-semibold text-transform:uppercase">
              $ {productoSeleccionado?.precio}
            </span>
            <p className="text-gray-600 text-justify">
              {productoSeleccionado?.description}
            </p>
            <div className="mx-auto md:mt-8 mt-6 items-end flex">
              <button
                className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded"
                onClick={volverPT}
              >
                Volver
              </button>
            </div>

            <div className="mx-auto mt-2 items-end flex">
              <span className="text-blue-600 mb-6 font-semibold text-transform:uppercase">
                ¡Últimas {productoSeleccionado?.cantidadDisponible} unidades disponibles!
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetallesProducto;
