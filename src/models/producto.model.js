// 1. Modelo de Datos
//  Cada producto deberá representarse como un objeto con las siguientes propiedades:

//  id: número único identificador.
//  nombre : texto (requerido).
//  precio: valor numérico (mayor a cero).
//  descripcion: texto (mínimo 10 caracteres).
//  disponible: valor booleano (true o false).
//  fecha_ingreso:  fecha y hora en que fue agregado el producto (asignado automáticamente).

export class Producto {
  constructor({ id, nombre, precio, descripcion, disponible, fecha_ingreso }) {
    this.id = id || Date.now();
    this.nombre = nombre;
    this.precio = precio;
    this.descripcion = descripcion;
    this.disponible = disponible;
    this.fecha_ingreso = fecha_ingreso || new Date().toISOString();
  }
}
