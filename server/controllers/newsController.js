const News = require("../models/News");

class NewsData {
  createNew = async (req, res) => {
    try {
      const { title, description, content, author } = req.body;

      const date = new Date();

      const newNews = new News({
        title,
        description,
        date,
        content,
        author,
      });

      await newNews.save();
    } catch (error) {
      return res
        .status(500)
        .json({ mensaje: "Error al crear la noticia", error });
    }
  };

  getNews = async (req, res) => {
    try {
      const news = await News.find({ isArchived: false }).sort({ date: -1 });

      res.json(news);
    } catch (error) {
      console.error(err);
      res.status(500).json({ message: "Error al obtener las noticias" });
    }
  };

  getArchivedNews = async (req, res) => {
    try {
      const archivedNews = await News.find({ isArchived: true }).sort({
        archiveDate: 1,
      });
      res.json(archivedNews);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error al obtener las noticias" });
    }
  };

  updateArchived = async (req, res) => {
    const { id } = req.params;

    try {
      const updateNew = await News.findById(id);

      const newStatus = !updateNew.isArchived;
      updateNew.isArchived = newStatus;

      if (updateNew) {
        updateNew.archiveDate = new Date();
      } else {
        updateNew.archiveDate = null;
      }

      await updateNew.save();
    } catch (error) {
      return res
        .status(500)
        .json({ mensaje: "Error al archivar la noticia", error });
    }
  };

  deleteNew = async (req, res) => {
    const { id } = req.params;

    try {
      const deletedNew = await News.findByIdAndDelete(id);
    } catch (error) {
      return res
        .status(500)
        .json({ mensaje: "Error al eliminar la noticia", error });
    }
  };
}

module.exports = new NewsData();
