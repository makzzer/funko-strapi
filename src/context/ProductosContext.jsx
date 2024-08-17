import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

// Creo el context
export const ProductosContext = createContext();

// Creo el provider
const ProductosProvider = ({ children }) => {
  // Verifico si el valor de productos en localStorage es válido JSON
  let productosIniciales = [];
  try {
    const storedProductos = localStorage.getItem("productosTienda");
    productosIniciales = storedProductos ? JSON.parse(storedProductos) : [];
  } catch (error) {
    console.error("Error al parsear productos desde localStorage:", error);
    productosIniciales = [];
  }

  // Estado para manejar los productos
  const [productos, setProductos] = useState(productosIniciales);

  // Obtener los datos de los productos desde la API al cargar la aplicación
  useEffect(() => {
    // Hacemos una solicitud a la API para obtener los productos usando Axios
    axios.get("http://localhost:1337/api/funkos?populate=*")
      .then((response) => {
        // Imprime la respuesta de la API para depuración
        console.log("Respuesta de la API:", response);

        // Adaptar la estructura de los datos de Strapi a la de grillaShop
        const datosAdaptados = response.data.data.map((item) => ({
          id: item.id,
          title: item.attributes.title,
          subTitle:
            item.attributes.categories?.data[0]?.attributes?.name ||
            "CATEGORIA_POR_DEFECTO",
          img: item.attributes.imagen?.data?.attributes?.formats?.small?.url
            ? "http://localhost:1337" + item.attributes.imagen.data.attributes.formats.small.url
            : "/ruta/a/imagen/por/defecto.jpg", // Manejar el caso en que la imagen no esté disponible
          precio: item.attributes.precio,
          cuotas: `${item.attributes.cuotas} cuotas sin interés`,
          tag1: item.attributes.tag1,
          tag2: item.attributes.tag2,
        }));

        // Actualizamos el estado de los productos en el contexto con los datos adaptados
        setProductos(datosAdaptados);

        // Almacenamos los productos en localStorage para futuras cargas de la aplicación
        localStorage.setItem("productosTienda", JSON.stringify(datosAdaptados));
      })
      .catch((error) => {
        // Imprime el error para depuración
        console.error("Error al obtener los productos:", error);
      });
  }, []);

  // Quedo atento a los cambios del carrito
  useEffect(() => {
    if (productos.length > 0) {
      localStorage.setItem("productosTienda", JSON.stringify(productos));
    }
  }, [productos]);

  return (
    <ProductosContext.Provider value={{ productos, setProductos }}>
      {children}
    </ProductosContext.Provider>
  );
};

// Exporto el provider
export default ProductosProvider;

// Creo minihook para usarlo
export const useProductoContext = () => useContext(ProductosContext);
