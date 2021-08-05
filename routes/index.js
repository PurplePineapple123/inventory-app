var Part = require('../models/part');
var Category = require('../models/category');
var Mfg = require('../models/mfg');
var async = require('async');


var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  
  Part.find({}, 'name price')
    .populate('mfg')
    .populate('category')    
    .exec(function (err, results) {
      if (err) { return next(err); }
      //Successful, so render
      res.render('index', { title: 'Inventory App Home', error: err, part_list: results });
    });
});





module.exports = router;



  