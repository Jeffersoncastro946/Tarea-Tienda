import expres from "express";
//importar controladores que se haran cargo
import {
  listarProducto,
  obtenerProductoPorId,
  crearProducto,
  actualizar,
  eliminar,
} from "../controllers/productController.js";
import validarId from "../middlewares/validarId.middleware.js";

const routers = expres.Router();

//endpoints /api/tienda/

//Get /productos ->lista
routers.get("/", listarProducto);

//Get /productos/:id ->detalle primero mandamos a un middleware para que valide si es numerico
routers.get("/:id", validarId, obtenerProductoPorId);
//post /productos ->crear
routers.post("/", crearProducto);
//put /productos/:id ->actualizar
routers.put("/:id", validarId, actualizar);
//delete /productos/:id ->actualizar
routers.delete("/:id", validarId, eliminar);
export default routers;
