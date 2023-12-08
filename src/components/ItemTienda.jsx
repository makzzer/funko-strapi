import { NavLink } from "react-router-dom";

const ItemTienda = ({ id, title, description, img }) => {
  return (
    <>
    {/*div para ubicar contenido del item*/}
      <div className="flex flex-col items-center mb-1 px-auto container md:flex-row">
       

        <article className="flex flex-col md:text-start text-center">
          <h3 className="text-gray-800 text-4xl mb-4 whitespace-pre-line">
            {title}
          </h3>
          <p className="text-gray-800 text-2xl mb-4">{description}</p>
          <div className="border-2 md:min-w-[29rem] border-red-500 mb-4 max-w-6xl mx-4 md:mx-0">
            {" "}
          </div>
          <div className="flex justify-center md:justify-start">
            <NavLink to={"/shop"} className="px-20 py-4 text-2xl bg-gray-800 hover:bg-gray-900 text-white font-bold rounded-full">
              Ver colección
            </NavLink>
            
          </div>
        </article>

        <div className="flex flex-col mt-4 md:mt-0 max-w-lg">
          <img className="w-full px-auto" src={img} alt="" />
        </div>
      </div>
    </>
  );
};

export default ItemTienda;
