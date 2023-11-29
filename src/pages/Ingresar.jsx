import IconLogoSimple from "./../components/icons/IconLogotipoSimple";
import { DetectarTamañoPantalla } from "../utilities/DetectarTamañoPantalla";
import SignIn from "../components/SingIn";

const Ingresar = () => {
  const esPantallaMobile = DetectarTamañoPantalla();
  console.log(esPantallaMobile);

  return (
    <>
      //contenedor general
      {/*contenedor general del login*/}
      <div className="min-h-screen text-center mx-auto items-center flex max-w-6xl container flex-col mt-6 md:pt-14 md:mt-18 transition-all duration-500">
        {/*contenedor con la imagen responsive*/}
        <div className="text-center md:pt-18 pt-14">
          {esPantallaMobile ? (
            <IconLogoSimple ancho={70} alto={100} />
          ) : (
            <IconLogoSimple ancho={100} alto={100} />
          )}
        </div>
        <h1 className="text-2xl font-semibold md:text-3xl text-gray-800 md:p-4"> Sign in to Funko</h1>

        <div>
          <SignIn />
        </div>
      </div>
    </>
  );
};

export default Ingresar;
