import ListaLanzamientos from "../components/ListaLanzamientos";
import ListaItemsTienda from "../components/ListaItemsTienda";
import Branding from "../components/Branding";
import { useState } from "react";
import CarouselHome from "../components/Carousel/carouselHome";

//context productos
import { useProductoContext } from "../context/ProductosContext";


const Home = ({ elementosLanding, nuevosLanzamientos }) => {

  const {productos} = useProductoContext()

  //voy a cortar 3 productos para pasarselo a la lista de items lanzamiento

  const itemslanzamientoSlice = productos.slice(0,6)


  const [elementosLand, SetElem] = useState(elementosLanding);

  const [ultimosLanzamientos, setNewLanz] = useState(nuevosLanzamientos);



  return (
    <>
      <div className="transition-all  duration-500 max-w-6xl mx-auto md:flex md:flex-col items-center container justify-between content-center md:px-10 ">
        <div className="md:mb-0 mb-8 h-[50vh] bg-no-repeat bg-cover w-screen md:bg-auto bg-center bg-[url('./assets/images/funkos-banner.webp')]">
          <div className="max-w-6xl mx-auto h-full md:mt-2 mt-16 ">
            <Branding />
          </div>
        </div>

        <main className="">
          <ListaItemsTienda elementosLand={elementosLand} />

          <h1 className="py-4 uppercase text-4xl md:text-6xl md:pl-10 font-semibold text-center md:text-start mb-6">
            últimos lanzamientos
          </h1>

          <div className="p-2">
            {/* Comento temporalmente el bloque ListaLanzamientos */}
            {/* <div className="grid px-12 grid-cols-1 md:grid-cols-3 gap-4">
              <ListaLanzamientos ultimosLanzamientos={itemslanzamientoSlice} />
            </div> */}
            <CarouselHome ultimosLanzamientos={itemslanzamientoSlice}/>
          </div>
        </main>



      </div>
    </>
  );
};

export default Home;