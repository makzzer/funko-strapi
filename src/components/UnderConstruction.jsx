import { NavLink } from "react-router-dom";
import IconoLogotipoSimple from "../components/icons/IconLogotipoSimple";

const UnderConstruction = ({ mensaje }) => {
  return (
    <>
      <div className="transition-all duration-700 flex md:flex-row flex-col justify-center gap-6 items-center md:mx-0 mx-2 md:text-5xl text-4xl container font-mono font-bold bg-gray-900  mt-5 md:mt-20 pb-10 pt-12">
        
        <h1 className="text-white  ">{mensaje}</h1>

        <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-none duration-300">
          <IconoLogotipoSimple ancho={60} alto={60} />
        </div>

        <div className="flex">
          <NavLink
            to={"/"}
            className="m-2 p-2 bg-red-700 rounded-lg text-lg hover:bg-red-600 text-white"
          >
            Volver
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default UnderConstruction;
