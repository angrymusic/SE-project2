var model = require("../models");
var express = require("express");
var url = require("url");
exports.deleteData = async (req, res) => {
    var id = req.params.id;

    let result = await model.boards.destroy({ where: { id: id } }).catch((err) => console.log(err));
    console.log(result);

    res.redirect("/board");
};
