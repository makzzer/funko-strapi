import mongoose from "mongoose";
import express from "express";
import Producto from "../backend/models/Producto.js";


const app = express();
const PORT = 3000;

//conexion a la db de mongodb local

// Conexión a la base de datos
mongoose.connect(
  "mongodb+srv://makzofx:makzikbx@clusterfunko.njierse.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;

// Manejo de eventos de conexión
db.on("error", console.error.bind(console, "Error de conexión:"));
db.once("open", () => {
  console.log("Conexión exitosa a la base de datos");
});

//ruta start
app.get("/", (req,res) =>{
  res.send("Bienvenido a la FunkoAPI Rey 👑, acá laburamos con mongodb Atlas 🌍")
});


//definir una ruta para obtener los productos
app.get("/api/productos", async (req, res) => {
    try {
      const productos = await Producto.find();
      res.json(productos);
    } catch (error) {
      console.log("Error al obtener los productos desde la DB:", error);
      res
        .status(500)
        .json({ error: "error al obtener los productos desde la DB" });
    }
  });
  
  
  // Iniciar el servidor de Express.js
  app.listen(PORT, () => {
    console.log(`Servidor express en funcionamiento en el puerto ${PORT}`);
  });
  
