import { Producto } from "../models/producto.model.js"; //modelo para guardar en el json
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// __dirname para ESM:
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ruta correcta al JSON (desde este archivo):
const dataPath = path.resolve(__dirname, "../data/productos.json");

// Crea el archivo si no existe
function ensureFile() {
  if (!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, "[]");
  }
}

const leer = () => {
  ensureFile();
  const raw = fs.readFileSync(dataPath, "utf8");
  return raw.trim() ? JSON.parse(raw) : [];
};

const guardar = (data) => {
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
};

//listar todo y por id
const obtnertodo = () => leer();
const obtnerPorId = (id) => leer().find((x) => x.id == id);

//creacion
const crear = (data) => {
  const listaProducto = leer(); //cargamos todo los productos
  const nuevo = new Producto(data);
  listaProducto.push(nuevo);
  guardar(listaProducto);
  return nuevo;
};

export default {
  obtnertodo,
  obtnerPorId,
  crear,
};
