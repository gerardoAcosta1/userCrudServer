import express from "express";
import db from "./utils/database.js";
import "dotenv/config";
import cors from 'cors';
import userRoutes from './componets/users/user.routes.js'

const PORT = process.env.PORT ?? 8000;

// probar conexión con la base de datos

db.authenticate()
  .then(() => {
    console.log("Conexión correcta");
  })
  .catch((error) => console.log(error));

db.sync() // si no existe la tabla -> la crea / si ya existe hace nada
  .then(() => console.log("base de datos sincronizada"))
  .catch((error) => console.log(error));

//const whitelist = ['http://localhost:8000', 'http://localhost:5173'];

/*const corsOption = {
  origin: (origin, cb) => {
    if(!whitelist.includes(origin)){
      return cb(new Error('not allowed'))
    }
    db(null, true)
  }
}*/

const app = express();

app.use(express.json());

app.use(cors())

app.use(userRoutes)

app.get("/", (req, res) => {
  res.send("OK");
});

app.listen(PORT, () => {

  console.log(`Servidor escuchando en el puerto ${PORT}`);
  
});
