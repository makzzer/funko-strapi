// ListaLanzamientos.jsx
import React from "react";
import ItemLanzamiento from "./ItemLanzamiento";

const ListaLanzamientos = ({ ultimosLanzamientos }) => {
  return (
    <>
      {ultimosLanzamientos.map((lanzamiento) => (
        <ItemLanzamiento
          key={lanzamiento.id}
          id={lanzamiento.id}
          title={lanzamiento.title}
          subTitle={lanzamiento.subTitle}
          img={lanzamiento.img}
          precio={lanzamiento.precio}
          cuotas={lanzamiento.cuotas}
          tag1={lanzamiento.tag1}
          tag2={lanzamiento.tag2}
        />
      ))}
    </>
  );
};

export default ListaLanzamientos;
