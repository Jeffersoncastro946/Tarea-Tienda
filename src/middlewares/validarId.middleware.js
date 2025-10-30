export default function validarId(req, res, next) {
  const { id } = req.params;
  const n = Number(id);
  if (!Number.isInteger(n) || n <= 0) {
    return res.status(400).json({ error: "id debe ser un entero positivo" });
  }
  next();
}
