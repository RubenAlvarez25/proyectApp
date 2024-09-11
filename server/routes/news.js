"use strict";

var express = require("express");
var router = express.Router();
const newsControllers = require("../controllers/newsController");

router.post("/createNews", newsControllers.createNew);

router.get("/getNews", newsControllers.getNews);

router.get("/getArchivedNews", newsControllers.getArchivedNews);

router.put("/updateArchived/:id", newsControllers.updateArchived);

router.delete("/deleteNews/:id", newsControllers.deleteNew);

module.exports = router;
