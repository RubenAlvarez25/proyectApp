"use strict";

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
      console.error(error);
    }
  };

  getNews = async (req, res) => {
    try {
      const news = await News.find({ isArchived: false }).sort({ date: -1 });

      res.json(news);
    } catch (error) {
      console.error(err);
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
      console.error(error);
    }
  };

  deleteNew = async (req, res) => {
    const { id } = req.params;

    try {
      const deletedNew = await News.findByIdAndDelete(id);
    } catch (error) {
      console.error(error);
    }
  };
}

module.exports = new NewsData();
