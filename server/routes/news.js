var express = require("express");
var router = express.Router();
const newsControllers = require("../controllers/newsController");

router.get("/getNews", newsControllers.showInfo);

router.get("/getArchivedNews", newsControllers.getArchivedNews);

module.exports = router;
