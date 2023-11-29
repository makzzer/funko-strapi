
import Underconstruction from "../components/UnderConstruction"

const Contacto = () => {
  
  const mensaje="Page under construction"
  
  return (
    <>
      <div className="flex container mx-auto min-h-screen items-start m-20 text-center">
       
        <Underconstruction mensaje={mensaje}/>

      </div>
    </>
  );
};

export default Contacto;
