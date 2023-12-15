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
      <div className="transition-all duration-500 max-w-6xl mx-auto flex flex-col items-center container mt-10 md:mt-20">
      <div className="flex-none w-14 mt-20 bg-gray-400 h-14">01</div>
<div className="w-64 mt-20 bg-red-500 h-14 flex-1">
  {productoSeleccionado ? (
    <>
      <img
        src={productoSeleccionado.img} // Asegúrate de tener la propiedad img en tu objeto productoSeleccionado
        alt={productoSeleccionado.title}
        className="max-w-full h-auto"
      />
      <h2>{productoSeleccionado.title}</h2>
      <p>{productoSeleccionado.description}</p> {/* Asegúrate de tener la propiedad descripcion en tu objeto productoSeleccionado */}
    </>
  ) : (
    "nadaaa"
  )}
</div>
<div className="w-32 mt-20 bg-green-300 h-14 flex-1">03</div>
        <h1 className="mt-20">hola PT</h1>

        <button
          className="bg-blue-500 hover:bg-red-800 mb-2 text-white font-bold py-2 px-4 rounded"
          onClick={volverPT}
        >
          {" "}
          Volve PT{" "}
        </button>
      </div>
    </>
  );
};

export default DetallesProducto;
