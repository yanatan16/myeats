
/*
 * GET home page.
 */
var Restaurant = require('../models/Restaurant.js');

// Main page
exports.index = function(req, res){
	Restaurant.findRandom({
    lean: true
  }, function(err, restaurants) {
	  res.render('index', { 
      title: 'Restaurants', 
      error: err,
      eats: restaurants 
    });
	});
};

// API Calls
exports.api = {};

// Get random restaurants
exports.api.random = function(req, res) {
  Restaurant.findRandom({
    lean: true // get plain objects back
  }, function(err, restaurants) {
    res.json({eats: restaurants, error: err});
  });
};

// Add a new restaurant
exports.api.add = function(req, res) {
  var name = req.param.name || req.body.name;
  var neighborhood = req.param.neighborhood || req.body.neighborhood;

  Restaurant.new({
      name: name
    , neighborhood: neighborhood
  }, function (err, restaurant) {
    if (!err) {
      res.json({
        success: true,
        id: restaurant.id
      });
    } else {
      res.json({
        success: false,
        error: '' + err
      });
    }
     
  });
};