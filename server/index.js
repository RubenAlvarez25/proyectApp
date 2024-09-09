const express = require("express");
const connectDB = require("./config/database");
const newsRoutes = require("./routes/news");

const app = express();
const port = 4000;

connectDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("conexion OK");
});

app.use("/", newsRoutes);
app.use("/getArchivedNews", newsRoutes);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
