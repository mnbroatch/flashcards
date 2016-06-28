let db = require('../config/db');
let mongoose = require('mongoose');


let Item = mongoose.model('Item', {
	name: String
});

module.exports = Item;

