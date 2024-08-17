import ItemTienda from "./ItemTienda";

const ListaItemsTienda = ({ elementosLand }) => {
  return (
    <ul className="flex flex-col px-10 mx-auto content-center justify-center">
      {elementosLand.map((elem) => (
        <li key={elem.id}> {/* Asegúrate de que cada li tenga un key único */}
          <ItemTienda
            title={elem.title}
            description={elem.description}
            img={elem.img}
            id={elem.id}
          />
        </li>
      ))}
    </ul>
  );
};

export default ListaItemsTienda;
