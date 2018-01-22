var express = require('express');
var router = express.Router();
var testService = require('../service/mongoTestService');
var appConfig = require('../config.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  testService.testMongo();
  res.render('index', { title: appConfig.app_name });
});

module.exports = router;
