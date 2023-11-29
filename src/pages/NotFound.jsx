import { useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import UnderConstruction from "../components/UnderConstruction";


const NotFound = () => {
  //uso este HOOK para capturar el error
  const error = useRouteError();
  const mensaje = "Not found"

  return (
    <>
      <NavBar />

      <div className="flex container mx-auto min-h-screen items-start m-20 text-center">
        <UnderConstruction mensaje={mensaje}/>



      </div>

      <Footer />
    </>
  );
};

export default NotFound;
