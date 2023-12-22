import IconLogoSimple from "./../components/icons/IconLogotipoSimple";
import { DetectarTamañoPantalla } from "../utilities/DetectarTamañoPantalla";
import SignIn from "../components/SingIn";
import SignUp from "../components/SingUp";

const Ingresar = () => {
  const esPantallaMobile = DetectarTamañoPantalla();
  console.log(esPantallaMobile);

  return (
    <>
      //contenedor general
      {/*contenedor general del login*/}
      <div className="min-h-screen text-center mx-auto items-center flex max-w-6xl container flex-col mt-10 md:pt-14 md:mt-18 transition-all duration-500">
        {/*contenedor con la imagen responsive*/}
        <div className="text-center md:pt-18 pt-14">
          {esPantallaMobile ? (
            <IconLogoSimple ancho={70} alto={100} />
          ) : (
            <IconLogoSimple ancho={100} alto={100} />
          )}
        </div>

        <div className="flex gap-20 md:flex-row flex-col mt-5 md:mt-10 bg-gray-100 p-10">
          <div className="flex flex-col">
            <h3 className="text-md font-semibold text-blue-500">
              ¿Primera vez por acá?
            </h3>
            <h1 className="text-2xl font-semibold md:text-3xl text-gray-800">
              Crear cuenta
            </h1>

            <SignUp />
          </div>

          <div className="flex flex-col">
            <h3 className="text-md font-semibold text-blue-500">
              ¿Ya tenés cuenta?
            </h3>
            <h1 className="text-2xl font-semibold md:text-3xl text-gray-800">
              Iniciar sesión
            </h1>
            <SignIn />
          </div>
        </div>
      </div>
    </>
  );
};

export default Ingresar;
