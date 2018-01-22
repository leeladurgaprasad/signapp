var mongoose = require('mongoose');
var authorSchema = mongoose.Schema({
    _id: {
    type: mongoose.Schema.Types.ObjectId,
    index: true,
    required: true,
    auto: true,
  },
    name: String,
    type: String,
    size: Array,
    color: Array,
    prise: Number,
    quantity: Number,
    images: Array
    
});
 
var Item = mongoose.model('Item', authorSchema);
 
module.exports = Item;