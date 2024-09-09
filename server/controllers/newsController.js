const News = require("../models/News");

class NewsData {
  showInfo = async (req, res) => {
    try {
      const news = await News.find();
      res.json(news);
    } catch (error) {
      console.error(err);
      res.status(500).json({ message: "Error al obtener las noticias" });
    }
  };

  getArchivedNews = async (req, res) => {
    try {
      const archivedNews = await News.find({ archiveDate: false });
      res.json(archivedNews);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error al obtener las noticias" });
    }
  };
}

module.exports = new NewsData();
