import Underconstruction from "../components/UnderConstruction";
import SignUp from "../components/SingUp";

const CrearCuenta = () => {
  const mensaje = "Page under construction";

  return (
    <>
      <div className="flex flex-col container mx-auto min-h-screen items-center m-20 text-center">
        {/*<Underconstruction mensaje={mensaje}/>*/}

        <SignUp />
      </div>
    </>
  );
};

export default CrearCuenta;
