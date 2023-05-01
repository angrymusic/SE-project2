var model = require("../models");

exports.writeForm = async (req, res) => {
    res.render("write", { title: "게시판 글쓰기" });
};

exports.writeData = async (req, res) => {
    var datas = {
        creator_id: req.body.creator_id,
        title: req.body.title,
        content: req.body.content,
        img: `/images/${req.file.filename}`,
        passwd: req.body.passwd,
    };

    let result = await model.boards.create(datas).catch((err) => console.log(err));
    console.log(datas);
    res.redirect("/board");
};
