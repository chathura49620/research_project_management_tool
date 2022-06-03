// var uuid = require('uuid');
// var uuidv4 = require('uuid/v4');
let express = require('express'),
    multer = require('multer'),
    mongoose = require('mongoose'),
    router = express.Router();
const DIR = './public/';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, files, cb) => {
       
        const fileName = req.files.rublicPdfFile.name.toLowerCase().split(' ').join('-');
        cb(null, '361d55ff-3b19-4ed8-8170-8317daceb037' + '-' + fileName)
    }
});
var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg" || file.mimetype == "application/pdf") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
});
// User model
// let User = require('../models/User');
let MarkingRubricDetails = require("../model/marking-rubrics.model");
router.post('/marking-rubrics', upload.single('rublicPdfFile'), (req, res, next) => {
    // console.log(req) ;
    const url = req.protocol + '://' + req.get('host')
    const markingRubricDetails = new MarkingRubricDetails({
        _id: new mongoose.Types.ObjectId(),
        year: 1998,
        rublicName: "test",
        rublicPdfFile: '/public/' + req.files.rublicPdfFile.name
    });
    markingRubricDetails.save().then(result => {
        res.status(201).json({
            message: "markingRubricDetails registered successfully!",
            userCreated: {
                _id: result._id,
                profileImg: result.profileImg
            }
        })
    }).catch(err => {
        console.log(err),
            res.status(500).json({
                error: err
            });
    })
})

module.exports = router;