import ItemTienda from "./ItemTienda";

const ListaItemsTienda = ({ elementosLand }) => {

{/*comento estas clases en el div arriba de <ItemTienda    md:py-1 max-w-6xl mx-auto md:flex items-center container justify-between  md:px-10 px-2*/}


  return (
    <>
    <ul className="flex flex-col  px-10 mx-auto content-center justify-center">
    {elementosLand.map((elem) => (
        
        <>
        <li key={elem.id}>
          <ItemTienda
            title={elem.title}
            description={elem.description}
            img={elem.img}
            id={elem.id}
          />
          </li>
        </>
      ))}



    </ul>

    </>
  );
};

export default ListaItemsTienda;
