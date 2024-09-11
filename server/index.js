"use strict";

const express = require("express");
require("dotenv").config();
const connectDB = require("./config/database");
const newsRoutes = require("./routes/news");
const app = express();
const cors = require("cors");
const port = 4000;

connectDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("conexion OK");
});

app.use("/", newsRoutes);
app.use("/createNews", newsRoutes);
app.use("/getArchivedNews", newsRoutes);
app.use("/updateArchived/:id", newsRoutes);
app.use("/deleteNews/:id", newsRoutes);

app.listen(port, () => {
  console.log(`localhost:${port}`);
});
