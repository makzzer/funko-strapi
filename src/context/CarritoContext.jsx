import { createContext, useEffect, useState, useContext } from "react";

//Creo el contexto para compartir el elemento carrito
export const CarritoContext = createContext();

//creo el provider para inicializar el valor del carrito y grabarlo en local storage

const CarritoProvider = ({ children }) => {
  //defino que los itemsCarrito me los levante desde localStorage o que arranque vacio
  const itemsCarrito = JSON.parse(localStorage.getItem("itemscarrito")) || [];

  //acá creo el estado que voy a compartir
  const [carrito, setCarrito] = useState(itemsCarrito);

  //aca voy a estar atento a cambios en los carrito que defino en el [carrito,setCarrito]
  useEffect(() => {
    localStorage.itemscarrito = JSON.stringify(carrito);
  }, [carrito]);

  //acá le agrego un item al carrito
  const agregarAlCarrito = (item) => {
    console.log(item.id);
    const existeElementoEnCarrito = carrito.some((elem) => elem.id === item.id);

    //si existe el producto en el carrito, le aumento el contador de cantidad pero no lo agrego
    console.log("existe o nooo" + existeElementoEnCarrito);

    if (!existeElementoEnCarrito) {
      console.log("no existe lo agrego");
      setCarrito([...carrito, { ...item, cantidad: 1 }]);
      //console.log(item.cantidad)
    } else {
      //const carritoActualizado = carrito.map((elem) => elem.id === item.id)

      console.log("ya existe en el carrito no lo agrego");

      //recorro el carrito y le actualizo la cantidad al elemento que agregué
      const carritoActualizado = carrito.map((elem) =>
        elem.id === item.id ? { ...elem, cantidad: elem.cantidad + 1 } : elem
      );
      setCarrito(carritoActualizado);
    }
  };

  //borrar carrito lo uso en Carrito
  const vaciarCarrito = () => {
    setCarrito([]);
  };

  //eliminar elemento del carrito lo uso en elemCarrito
  const eliminarElementoCarrito = (id) => {
    const nuevoArraySinElem = carrito.filter((elemento) => elemento.id !== id);
    setCarrito(nuevoArraySinElem);
  };

  //lo uso en Carrito, veo la suma total del precio de los articulos comprados x la cantidad de cada uno
  const totalCarrito = () => {
    let total = 0;
    carrito.forEach((elemento) => {
      total += elemento.precio * elemento.cantidad;
    });
    return total;
  };

  //actualizar cantidad de productos comprados
  const actualizarCantidad = (id, cantidadNueva) => {
    if (cantidadNueva < 1) {
      return;
    }
    const carritoActualizado = carrito.map((elem) => {
      if (elem.id === id) {
        return { ...elem, cantidad: cantidadNueva };
      }
      return elem;
    });
    setCarrito(carritoActualizado);
  };



    //agregar 1 elemento del carrito para sumar 1 a la cantidad del producto
    const sumarElemento = (id) => {
      const carritoActu = carrito.map((elem) => {
        if (elem.id === id) {
          const nuevaCantidad = elem.cantidad + 1;
          return { ...elem, cantidad: nuevaCantidad };
        }
        return elem;
      });
      setCarrito(carritoActu);
    };


    //quitar 1 elemento del carrito para restar 1 a la cantidad del producto
    const restarElemento = (id) => {
          const carritoActu = carrito.map((elem) => {
            if (elem.id === id) {
              const nuevaCantidad = elem.cantidad - 1;
              return { ...elem, cantidad: nuevaCantidad };
            }
            return elem;
          });
          setCarrito(carritoActu);
        };

  //contador de elementos totales del carrito para el span del nav
  const totalElementosCarrito = () => {
    let total = 0;
    carrito.forEach((element) => {
      total += element.cantidad;
    });
    return total;
  };

  return (
    <CarritoContext.Provider
      value={{
        carrito,
        setCarrito,
        agregarAlCarrito,
        vaciarCarrito,
        totalCarrito,
        eliminarElementoCarrito,
        totalElementosCarrito,
        actualizarCantidad,
        restarElemento,
        sumarElemento,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};

//exporto mi provider
export default CarritoProvider;

//Creo mi hook para desestructurar y obtener el contenido de mi provider

export const useCarritoContext = () => useContext(CarritoContext);
