import express from "express";
import categoriaRoutes from "./routers/categorias.routes.js"
const app = express();
app.set("port", 5000)
app.use("/api/categorias", categoriaRoutes)
export default app;