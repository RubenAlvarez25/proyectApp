const News = require("../models/News");

class NewsData {
  showInfo = async (req, res) => {
    try {
      const news = await News.find({ isArchived: true });

      res.json(news);
    } catch (error) {
      console.error(err);
      res.status(500).json({ message: "Error al obtener las noticias" });
    }
  };

  getArchivedNews = async (req, res) => {
    try {
      const archivedNews = await News.find({ isArchived: false });
      res.json(archivedNews);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error al obtener las noticias" });
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
}

module.exports = new NewsData();
