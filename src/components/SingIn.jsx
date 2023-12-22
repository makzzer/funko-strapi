import { useState } from "react";
import {
  login,
  signInWithGoogle,
  signInWithFacebook,
} from "../config/firebase";
import { useRedireccionarUserActivo } from "../hooks/useRedireccionarUserActivo";
import { useUserContext } from "../context/UserContext";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";

const SignIn = () => {
  const { user } = useUserContext();

  // Este hook redirige al usuario a una ruta si es distinto de null, es decir, si ha iniciado sesión correctamente.
  useRedireccionarUserActivo(user, "/dashboarduser");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleIniciarSesion = async (e) => {
    e.preventDefault();

    try {
      const usuarioAcreditado = await login({ email, password });
      console.log(usuarioAcreditado);
      console.log("Usuario logueado correctamente");
    } catch (error) {
      console.log(error.code);
      console.log(error.message);
    }
  };

  const handleSignInWithGoogle = async () => {
    try {
      await signInWithGoogle();
      console.log("Iniciaste sesión con Google correctamente");
    } catch (error) {
      console.log(error.code);
      console.log(error.message);
    }
  };

  const handleSignInWithFacebook = async () => {
    try {
      await signInWithFacebook();
      console.log("Iniciaste sesión con Facebook correctamente");
    } catch (error) {
      console.log(error.code);
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="rounded-md flex flex-col justify-center items-center">
        <form
          onSubmit={handleIniciarSesion}
          className=" flex flex-col bg-gray-200 shadow-md rounded px-8 py-6 mt-4 min-w-[20rem] md:w-[20rem]"
        >
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2 text-sm text-start"
            >
              Username or email address
            </label>

            <div></div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div>
            <div className="mb-6">
              <div className="flex justify-between">
                <label
                  htmlFor="password"
                  className="block text-gray-700 font-bold mb-2 text-sm text-start"
                >
                  Password
                </label>

                <a
                  className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                  href="#"
                >
                  Forgot Password?
                </a>
              </div>

              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                id="password"
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <button
              className="w-full bg-red-700  hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Iniciar Sesión
            </button>

            <div className="flex flex-row gap-2">
              <button
                className="w-full bg-blue-900  hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                <GoogleIcon />
              </button>
              <button
                className="w-full bg-blue-900  hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                <FacebookIcon />
              </button>
            </div>
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

export default SignIn;
