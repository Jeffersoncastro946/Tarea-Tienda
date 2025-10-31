import productoService from "../services/productos.services.js";
import { sendResponse } from "../utils/sendResponse.js";

export function listarProducto(req, res) {
  //1. mandamos a llamar del servicio una list del modelo de productos
  const arregloProductos = productoService.obtnertodo();
  //caso que venga vacio
  if (arregloProductos.length > 0) {
    sendResponse({
      res,
      message: "Productos encontrados",
      statucode: 200,
      data: { arregloProductos },
    });
  }

  sendResponse({
    res,
    message: "Actualmente no hay productos registrados",
    statucode: 200,
    data: [],
  });
}

//obtener detalle
export function obtenerProductoPorId(req, res) {
  const id = Number(req.params.id);

  //1. verificar que el id exista
  //2.si existe llamar el servicio

  const producto = productoService.obtnerPorId(id);
  if (producto) {
    //aqui si se encontro
    sendResponse({
      res,
      message: "Producto encontrado correctamente",
      statucode: 201,
      data: { producto },
    });
  } else {
    sendResponse({
      //resulto undefined
      res,
      message: `Producto no encontrado id:${id} no existe`,
      statucode: 404,
      data: [],
    });
  }
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
