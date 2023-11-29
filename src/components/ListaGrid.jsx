import ItemLanzamiento from "./ItemLanzamiento";


const ListaGrid = ({ productos, agregarProductoCarrito }) => {


  return (
    <>
      {productos.map((itemGrilla) => (
        <div className="py-2" key={itemGrilla.id}>
          <ItemLanzamiento
            id={itemGrilla.id}
            title={itemGrilla.title}
            subTitle={itemGrilla.subTitle}
            img={itemGrilla.img}
            precio={itemGrilla.precio}
            cuotas={itemGrilla.cuotas}
            tag1={itemGrilla.tag1}
            tag2={itemGrilla.tag2}
            agregarProductoCarrito={agregarProductoCarrito}
          />
        </div>
      ))}
    </>
  );
};

export default ListaGrid;
