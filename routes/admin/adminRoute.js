var express = require('express');
var router = express.Router();
//var testService = require('../service/mongoTestService');
var appConfig = require('../../config.js')

/* GET home page. */
router.get('/invertery', function(req, res, next) {
  //testService.testMongo();
  res.render('admin/inventery', { title: appConfig.app_name });
});

module.exports = router;
