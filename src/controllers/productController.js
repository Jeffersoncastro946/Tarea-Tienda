import productoService from "../services/productos.services.js";
import { sendResponse } from "../utils/sendResponse.js";

export function listarProducto(req, res) {
  //1. mandamos a llamar del servicio una list del modelo de productos
  const arregloProductos = productoService.obtnertodo();

  sendResponse({
    res,
    message: "Productos encontrados",
    statucode: 200,
    data: { arregloProductos },
  });
}

//obtener detalle
export function obtenerProductoPorId(req, res) {
  const id = Number(req.params.id);
  // Respuesta mínima para evitar que la petición quede colgada
  res.json({ id, nombre: `Producto ${id}`, descripcion: "Detalle ejemplo" });
}

//crear producto
export function crearProducto(req, res) {
  // const nuevo = req.body || {};
  // res.status(201).json(productoService.crear(req.body || {}));
  const nuevo = productoService.crear(req.body || {});

  sendResponse({
    res,
    message: "Producto creado correctamente",
    statucode: 201,
    data: { nuevo },
  });
}

//actualizar
export function actualizar(req, res) {
  const id = Number(req.params.id);
  const cambios = req.body || {};
  // Respuesta de ejemplo
  res.json({ id, ...cambios });
}

//eliminar
export function eliminar(req, res) {
  const id = Number(req.params.id);
  // En la práctica podrías devolver 204 si se eliminó correctamente
  res.status(200).json({ message: `Producto ${id} eliminado (simulado)` });
}
