const mongoose = require("mongoose");

const mongoURI = process.env.URI_MONGODB;

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Conexión exitosa a la base de datos");
  } catch (error) {
    console.error("Error al conectar con MongoDB:", error);
    process.exit(1); // Termina el proceso si la conexión falla
  }
};

module.exports = connectDB;
