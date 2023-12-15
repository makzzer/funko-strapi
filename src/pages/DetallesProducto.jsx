import { useNavigate, useParams } from "react-router-dom";

const DetallesProducto = () => {
  //desestructuro el id que llega como parametro
  const { id } = useParams();
  //creo el navigate para redirigir el boton de volver
  const navigate = useNavigate();

  //metodo del boton para volver
  const volverPT = (id) => {
    console.log("si recibi el id en el detalle de productoooo"+id);
    navigate("/shop");
  };



  //use effect para llamar a la api de strapi y filtrar el producto para que me muestre el que corresponde

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



  
  return (
    <>
      <div className="transition-all duration-500 max-w-6xl mx-auto flex flex-col items-center container mt-10 md:mt-20">
        <div className="flex-none w-14 mt-20 bg-gray-400 h-14">01</div>
        <div className=" w-64 mt-20 bg-red-500 h-14 flex-1">02</div>
        <div className=" w-32 mt-20 bg-green-300 h-14 flex-1">03</div>
        <h1 className="mt-20">hola PT</h1>
        <button
          className="bg-blue-500 hover:bg-red-800 mb-2 text-white font-bold py-2 px-4 rounded"
          onClick={() => volverPT(id)}
        >
          {" "}
          Volve PT{" "}
        </button>
      </div>
    </>
  );
};

export default DetallesProducto;
