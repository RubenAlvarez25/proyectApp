const mongoose = require("mongoose");

const NewsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  content: { type: String },
  author: { type: String },
  date: { type: Date, default: Date.now },
  archiveDate: { type: Date, default: null },
  isArchived: { type: Boolean, default: false },
});

const News = mongoose.model("News", NewsSchema);

module.exports = News;
