import express from "express";
import mongoose from "mongoose";
import Producto from "../backend/models/Producto.js";


const app = express();
const PORT = 3000;

//conexion a la db de mongodb local


mongoose.connect("mongodb://127.0.0.1:27017/funko-react", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", (err) => {
  console.error("no se pudo conectar a la base de datos", err);
});

db.once("open", () => {
  console.log("conexion exitosa a la db");
});

//ruta start
app.get("/", (req,res) =>{
  res.send("Bienvenido a la FunkoAPI Rey 👑, acá laburamos con mongodb instalada local 💻")
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
