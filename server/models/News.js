const mongoose = require("mongoose");

const NewsSchema = new mongoose.Schema({
  title: { type: String, require: true },
  description: { type: String },
  content: { type: String },
  author: { type: String },
  archiveData: { tyoe: Boolean },
});

const News = mongoose.model("News", NewsSchema);

module.exports = News;
