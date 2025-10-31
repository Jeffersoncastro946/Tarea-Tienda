// paso 1 importar expres que es eqv a createserver
import express from "express";
import { loadEnvFile } from "node:process";
import routers from "./src/routes/route.js";

const app = express(); //instancia de express
loadEnvFile(); //cargo variables
//=================middlewares=========================//
// Nota: express.json debe invocarse para devolver el middleware
app.use(express.json()); //parseo de json

app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && "body" in err) {
    return res.status(400).json({
      message: "JSON inválido en el cuerpo de la petición",
      hint: "Asegúrate de usar comillas y formato JSON correcto",
    });
  }
  next(err);
});
//=================Rutas=========================//

app.use("/api/tienda", routers);

app.use((req, res) => {
  res.status(404).json({ message: "No existe este recurso" });
});

//=================Servidor=========================//
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
