var express = require("express");
var router = express.Router();
var listController = require("../controllers/listControllers");
var writeController = require("../controllers/writeControllers");
var readController = require("../controllers/readController");
var updateController = require("../controllers/updateController");
var deleteController = require("../controllers/deleteControllers");
const multer = require("multer");
const path = require("path");
var filestorage = multer.diskStorage({
    destination: function (req, file, cb) {
        console.log("1234");
        cb(null, "public/images/");
    },
    // 폴더 안에 저장되는 파일 명을 결정하는 데 사용
    filename: function (req, file, cb) {
        console.log("1234");
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
    },
});
var upload = multer({ storage: filestorage }).single("img");
router.get("/", listController.getListFirst);
router.get("/list/:id", listController.getList);

router.get("/write", writeController.writeForm);
router.post("/write", function (req, res) {
    upload(req, res, function (err) {
        if (err) {
            // 업로드할때 오류가 발생함
            console.log(err);
            return;
        }
        console.log(req);
        // 정상적으로 완료됨
        writeController.writeData(req, res);
    });
});

router.get("/read/:id", readController.readData);
router.get("/delete/:id", deleteController.deleteData);
router.get("/update", updateController.updateForm);
router.post("/update", multer().none(), (req, res) => {
    updateController.updateData(req, res);
});

module.exports = router;
