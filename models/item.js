let mongoose = require('mongoose');


let Item = mongoose.model('Item', {
	question: String,
	answer: String,
	category: String
});

module.exports = Item;

