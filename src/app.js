import express from "express";
import { Route } from "./routes/index";
import cors from "cors";
import bodyParser from "body-parser";
const app = express();


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(express.json()); // para capturar datos en formato json -> para usar req.body
app.use(express.urlencoded({ extended: true })); // para recibir por url encoded (peticion post)
// habilitando rutas
app.use('/api', Route);

app.listen(3000, () => {
  console.log("servidor corriendo****");
});
