var express = require('express');
var router = express.Router();
var autherService = require('../service/autherService');
var autherDao = new autherService();

/* GET users listing. */
router.post('/', function(req, res, next) {
	var a = {};
	a.name = "hello";
	a.world = "world";
	autherDao.create(req,function(data){
		res.status(200).json(data);
	});
  
});


router.get('/find', function(req, res, next) {
	autherDao.get(req,function(data){
		res.status(200).json(data);
	});
  
});

module.exports = router;
