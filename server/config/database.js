"use strict";

const mongoose = require("mongoose");

const mongoURI = process.env.URI_MONGODB;

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.info("DDBB status 'OK'");
  } catch (error) {
    console.error("ERR", error);
    process.exit(1);
  }
};

module.exports = connectDB;
