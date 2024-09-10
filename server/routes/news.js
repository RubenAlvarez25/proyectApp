var express = require("express");
var router = express.Router();
const newsControllers = require("../controllers/newsController");

router.get("/getNews", newsControllers.showInfo);

router.get("/getArchivedNews", newsControllers.getArchivedNews);

router.delete("/deleteNews/:id", newsControllers.deleteNew);

router.put("/updateArchived/:id", newsControllers.updateArchived);

module.exports = router;
