var mongoose = require('mongoose');

var Item = require('../schemas/item');
var appConfig = require('../config.js');
const dbconnString = appConfig.mongo_db_url+'/'+appConfig.mongo_db_name;
module.exports = function(){

	this.create = function(req,callback){
		mongoose.connect(dbconnString, function (err) {
			if (err) throw err;
			var item = new Item(req.body);
			item.save(callback(item));
			console.log("item : "+item);
		});
	}

	this.get = function(req,callback){
		mongoose.connect(dbconnString, function (err) {
			//console.log("query : "+ req.query.bio);
		    if (err) throw err;
		    Item.find({
		       
		    }).sort('-created')
		    .limit(5)
		    .exec(function(err, items) {
		        if (err) throw err;
		         
		        callback(items);
		    });
     
		});
	}
}