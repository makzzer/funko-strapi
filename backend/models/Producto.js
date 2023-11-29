import mongoose from "mongoose";

const productoSchema = new mongoose.Schema(
  {
    title: String,
    subTitle: String,
    img: String,
    precio: Number,
    cuotas: String,
    tag1: String,
    tag2: String,
  },
  {
    collection: "productos", // Nombre de la colección que deseas utilizar
  }
);

const Producto = mongoose.model("Producto", productoSchema);

///module.exports = Producto;
export default Producto;
