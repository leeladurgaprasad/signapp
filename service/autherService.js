var mongoose = require('mongoose');

var Author = require('../schemas/author');

module.exports = function(){

	this.create = function(req,callback){
		mongoose.connect('mongodb://localhost:27017/myproject', function (err) {
			if (err) throw err;
			var author = new Author(req.body);
			author.save(callback(author));
			console.log("created bangaru");
			console.log("author : "+author);
		});
	}

	this.get = function(req,callback){
		mongoose.connect('mongodb://localhost:27017/myproject', function (err) {
			console.log("query : "+ req.query.bio);
		    if (err) throw err;
		    Author.find({
		        biography: req.query.bio
		    }).sort('-created')
		    .limit(5)
		    .exec(function(err, authors) {
		        if (err) throw err;
		         
		        callback(authors);
		    });
     
		});
	}
}

