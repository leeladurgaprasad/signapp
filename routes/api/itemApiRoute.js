var express = require('express');
var router = express.Router();
var itemService = require('../../service/itemService');
const itemDao = new itemService();
var appConfig = require('../../config.js')

/* GET home page. */
router.post('/', function(req, res, next) {
  itemDao.create(req,function(data){
  	res.status(200).json(data);
  })
});

router.get('/', function(req, res, next) {
  itemDao.get(req,function(data){
  	res.status(200).json(data);
  })
});

module.exports = router;
