import { NavLink } from "react-router-dom";

const Branding = () => {
    return (

        <div className="flex flex-col 
         items-center md:items-start 
         justify-center h-full py-auto
          px-auto container mx-auto 
          max-w-[90rem] pt-8 md:ms-12 md:mt-10">

            <h1 className="text-white text-4xl mb-2 ">Nuevos ingresos</h1>
            <h2 className="text-white text-center text-2xl mb-2">
              Descubrí el próximo Funko de tu colección
            </h2>
            <div className="flex justify-left">
              <NavLink to="shop" className="mt-4 bg-red-600 hover:bg-red-500 text-white font-bold py-4 px-4 text-lg rounded-full mb-4 ">
                Comprar
              </NavLink>
            </div>

        </div>

    );
  }
  
  export default Branding;
  