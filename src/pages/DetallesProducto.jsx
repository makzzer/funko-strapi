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
            "http://localhost:1337" +
            item.attributes.imagen.data.attributes.formats.small.url,
          precio: item.attributes.precio,
          cuotas: `${item.attributes.cuotas} cuotas sin interés`,
          tag1: item.attributes.tag1,
          tag2: item.attributes.tag2,
          description: item.attributes.description, // Agregado
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

  console.log("esta es la longitud de los productos que trae la api:" + productos.length);
  console.log("este es el iddddddddddddd" + id);

  useEffect(() => {
    // Filtrar el producto por id después de obtener todos los datos adaptados
    const productoFiltrado = productos.find((producto) => producto.id.toString() === id);
    console.log("el id es+" + id);

    // Si se encuentra el producto, almacenarlo en el estado productoSeleccionado
    if (productoFiltrado) {
      setProductoSeleccionado(productoFiltrado);
    }
  }, [productos, id]);

  console.log("este es el producto seleccionado ", productoSeleccionado ? productoSeleccionado.title : "");

  return (
    <>
      <div className="transition-all duration-500 md:max-w-6xl max-w-3xl px-4 md:px-0 mx-auto flex flex-col items-center container mt-10 md:mt-20">
        <div className="bg-gray-100 mt-20 mb-20 rounded-lg overflow-hidden shadow-lg p-6">
          <img
            src={productoSeleccionado?.img} // Asegúrate de tener la propiedad img en tu objeto productoSeleccionado
            alt={productoSeleccionado?.title}
            className="w-full h-auto"
          />
          <h2 className="text-xl font-bold mt-4">{productoSeleccionado?.title}</h2>
          <p className="text-gray-600">{productoSeleccionado?.description}</p>
          <div className="flex justify-between mt-4">
            <span className="text-blue-500 text-transform:uppercase">{productoSeleccionado?.precio}</span>
            <button
              className="bg-red-800 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
              onClick={volverPT}
            >
              Volver
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetallesProducto;
