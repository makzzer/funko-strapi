import { useState } from "react";
import { register } from "../config/firebase"; // Cambié de signUp a register para reflejar la acción
import { useRedireccionarUserActivo } from "../hooks/useRedireccionarUserActivo";
import { useUserContext } from "../context/UserContext";

const SignUp = () => {
  const { user } = useUserContext();

  useRedireccionarUserActivo(user, "/dashboarduser");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");

  const handleCrearCuenta = async (e) => {
    e.preventDefault();

    try {
      // Cambié de signUp a register para reflejar el cambio en el archivo firebase.js
      const usuarioAcreditado = await register({ email, password });
      console.log(usuarioAcreditado);
      console.log("Usuario creado correctamente");
    } catch (error) {
      console.log(error.code);
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="rounded-md flex flex-col justify-center items-center">
        <form
          onSubmit={handleCrearCuenta}
          className="flex flex-col bg-gray-200 shadow-md rounded px-8 py-6 mt-4 min-w-[20rem] md:w-[20rem]"
        >
          <div className="mb-4">
            <label
              htmlFor="nombreUsuario"
              className="block text-gray-700 font-bold mb-2 text-sm text-start"
            >
              Nombre
            </label>
            <input
              type="text"
              //value={email}
              //onChange={(e) => setEmail(e.target.value)}
              id="nombreUsuario"
              className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="ApellidoUsuario"
              className="block text-gray-700 font-bold mb-2 text-sm text-start"
            >
              Apellido
            </label>
            <input
              type="text"
              //value={email}
              //onChange={(e) => setEmail(e.target.value)}
              id="ApellidoUsuario"
              className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2 text-sm text-start"
            >
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2 text-sm text-start"
            >
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <button
              className="w-full bg-red-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Crear Cuenta
            </button>
          </div>
        </form>
      </div>

      {/** 
      <div className="flex justify-center bg-gray-200 shadow-md rounded px-8 py-4 mt-4 min-w-[20rem] md:w-[20rem]">
        <h1 className="block text-gray-700 font-bold mb-2 text-sm text-start">
          New in Funko?
        </h1>
        <a
          className="ms-2 inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          href="#"
        >
          Create Account
        </a>
      </div>
       */}
    </>
  );
};

export default SignUp;
