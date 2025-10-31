export const validarProducto = (req, res, next) => {
  const { nombre, precio, descripcion } = req.body;
  if (!nombre)
    return res.status(400).json({ message: "El nombre es obligatorio" });
  if (isNaN(precio) || precio <= 0)
    return res.status(400).json({ message: "El precio debe ser mayor a cero" });
  if (!descripcion || descripcion.length < 10)
    return res
      .status(400)
      .json({ message: "La descripción debe tener al menos 10 caracteres" });
  next();
};
