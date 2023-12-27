import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";
import ItemLanzamiento from "../components/ItemLanzamiento";

const CarouselHome = ({ ultimosLanzamientos }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 3, // Mostrar 3 elementos en desktop
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1, // Mostrar 1 elemento en mobile
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <Slider {...settings}>
        {ultimosLanzamientos.map((lanzamiento) => (
          <div key={lanzamiento.id} className="w-full mx-auto">
            {/* Reemplaza ItemLanzamiento con tu componente real */}
            <ItemLanzamiento
              id={lanzamiento.id}
              title={lanzamiento.title}
              subTitle={lanzamiento.subTitle}
              img={lanzamiento.img}
              precio={lanzamiento.precio}
              cuotas={lanzamiento.cuotas}
              tag1={lanzamiento.tag1}
              tag2={lanzamiento.tag2}
            />
            {/* Ejemplo de contenido para pruebas */}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselHome;