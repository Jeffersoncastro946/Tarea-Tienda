// paso 1 importar expres que es eqv a createserver
import express from "express";
import { loadEnvFile } from "node:process";
import routers from "./src/routes/route.js";
loadEnvFile(); //cargo variables

const app = express(); //instancia de express

//=================middlewares=========================//
app.use(express.json); //parseo de json

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
