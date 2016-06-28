"use strict;"


let express = require('express');
let Item = require('../models/item');

let router = express.Router();

router.get('/', function(req,res){
	Item.find({}, (err,items) => {
		res.status(err? 400:200).send(err || items);
	});
});

router.post('/', function(req,res){
	let item = new Item(req.body);
	item.save((err,savedDoc) => {
		res.status(err? 400:200).send(err || savedDoc);
	});
});

router.get('/:id', function(req,res){
	Item.find({_id:req.params.id}, (err,item) => {
		res.status(err? 400:200).send(err || item[0]);
	});
});

router.put('/:id', function(req,res){
	Item.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err,savedDoc) => {
		res.status(err? 400:200).send(err || savedDoc);
	});
});

router.delete('/:id', function(req,res){
	Item.findByIdAndRemove(req.params.id, err => {
		res.status(err? 400:200).send(err);
	});
});

module.exports = router;

