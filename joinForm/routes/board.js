var express = require("express");
var router = express.Router();
var listController = require("../controllers/listControllers");
var writeController = require("../controllers/writeControllers");
var readController = require("../controllers/readController");
var updateController = require("../controllers/updateController");
const multer = require("multer");
router.get("/", listController.getListFirst);
router.get("/list/:id", listController.getList);

router.get("/write", writeController.writeForm);
router.post("/write", writeController.writeData);

router.get("/read/:id", readController.readData);

router.get("/update", updateController.updateForm);
router.post("/update", multer().none(), (req, res) => {
    updateController.updateData(req, res);
});

module.exports = router;
