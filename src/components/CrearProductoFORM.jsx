import { useState } from "react";
import {subirArchivo} from "../config/firebase"

const CrearProductoForm = () => {
  const [imagen, setImagen] = useState(null);
  const [nombre, setNombre] = useState("");
  const [subtitulo, setSubtitulo] = useState("");
  const [precio, setPrecio] = useState("");

  const handleImagenChange = (e) => {
    const file = e.target.files[0];
    setImagen(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí puedes realizar las acciones necesarias con los datos del formulario
    console.log("Datos del producto:", {
      imagen,
      nombre,
      subtitulo,
      precio,
    });

    // Restablecer el formulario
    setImagen(null);
    setNombre("");
    setSubtitulo("");
    setPrecio("");
  };

  return (
    <div className="max-w-lg mx-auto">


      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="imagen"
        >
          Imagen
        </label>
        <input
          type="file"
          id="imagen"
          onChange={e=> subirArchivo(e.target.files[0])}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
    </div>
  );
};

export default CrearProductoForm;
