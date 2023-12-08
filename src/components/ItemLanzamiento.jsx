import { useCarritoContext } from "../context/CarritoContext";





const ItemLanzamiento = ({
  id,
  title,
  subTitle,
  img,
  precio,
  cuotas,
  tag1,
  tag2,
}) => {


  const { agregarAlCarrito } = useCarritoContext();


  //logica agregada para comprar articulo, se lo paso desde acá completo y lo labura mi hook del context
  const comprarArticulo = (id) =>{
    swal({
      icon: "success",
      title: "¡Producto agregado al carrito!"
    });
    const item = {
      id,
      title,
      subTitle,
      img,
      precio,
      cuotas,
      tag1,
      tag2,
    };
    agregarAlCarrito(item)
  }


  return (
    <>
      {/*Item Lanzamiento template*/}
      <div className="uppercase max-w-xs rounded overflow-hidden shadow-lg mx-auto mb-2 flex flex-col ">
        <div className="flex justify-end">
          <span className="inline-block bg-gray-700 px-2 text-white rounded">
            Nuevo
          </span>
        </div>
        <img className="w-full grow-0" src={img} alt="Imagen de la card"></img>
        <div className="md:px-6 font-semibold px-4 text-center ">
          <div className="font-semibold md:text-md text-sm">{subTitle}</div>
          <div className="font-bold md:text-2xl text-sm mb-2">{title}</div>
          <p className="text-gray-700 md:text-xl font-semibold text-lg font-bol">
            ${precio}
          </p>
          <p className="text-blue-500 md:text-lg font-semibold text-sm mb-2">
            {cuotas}
          </p>
        </div>
        <div className="md:px-4 md:pt-2 pt-0 pb-2  text-center ">
          <span className="inline-block mb-1 md:mb-0 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            {tag1}
          </span>
          <span className="inline-block mb-1 md:mb-0 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            {tag2}
          </span>
          <div className=" flex justify-center space-x-2 flex-row text-center items-center">
            <button
              //onClick={() => agregarAlCarrito(id)}
              onClick={()=>comprarArticulo(id)}
              className="bg-red-800 rounded-lg p-2 mt-2 font-semibold text-white hover:bg-red-600"
            >
              Comprar
            </button>

            <button
              //onClick={() => agregarAlCarrito(id)}
              onClick={()=>comprarArticulo(id)}
              className="bg-gray-800 rounded-lg min-w-[88px] p-2 mt-2 font-semibold text-white hover:bg-gray-500"
            >
              Detalles
            </button>


          </div>
        </div>
      </div>
    </>
  );
};

export default ItemLanzamiento;
