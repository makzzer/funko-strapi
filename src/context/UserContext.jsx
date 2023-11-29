import { useState, useEffect } from "react";
import { createContext, useContext } from "react";

//importaciones de firebase
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";

//comienzo definiendo este componente como context
const UserContext = createContext();

//creo el context provider con una exportacion por defecto para que los demas componentes puedan modificar el objeto que creé antes
const UserContextProvider = ({ children }) => {
  //inicializo el estado del usuario como false "deslogueado"
  const [user, setUser] = useState(false);

  //user effect para controlar el estado de mi usuario
  useEffect(() => {
    console.log("use effect en acccionnnnnn pa");

    const unsuscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return unsuscribe;
  }),
    [];


    if (user==false){
      return (
        <h1 className="mt-20"> Loading App...</h1>
      )
    }


  //recordar tambien envolver todo el componente router del main.jsx porque sino no va a funcionar
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {/*este children que sigue representa a todas las paginas que despues van a acceder a mi context*/}
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;

//creo un mini hook para representar este context y poder llamarlo desde otros componentes
//acá uso el useContext de react

export const useUserContext = () => useContext(UserContext);
