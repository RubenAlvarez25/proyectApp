const express = require("express");
const app = express();
const port = 4000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("conexion OK");
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
