var markingRubricDetails = require("../model/marking-rubrics.model");

let multer = require('multer');

exports.find = (req, res) => {
    markingRubricDetails.find().then(data => {
        res.status(200).json({
            message: "User list retrieved successfully!",
            users: data
        });
    });
};