import { useState, useEffect } from "react";

export const DetectarTamañoPantalla = () => {
  const [esPantallaMobile, setEsPantallaMobile] = useState(false);
  //use effect para plegar el menu en responsive una vez que doy click

  //acá detecto si estoy en pantalla mobile o desktop
  useEffect(() => {
    const handleResize = () => {
      setEsPantallaMobile(window.innerWidth <= 740); // Ajusta el tamaño según tus necesidades
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return esPantallaMobile;
};
