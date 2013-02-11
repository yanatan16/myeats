
/*
 * GET home page.
 */
var Restaurant = require('../models/Restaurant.js')
  , fanin = require('../lib/fanin.js');

// Main page
exports.index = function(req, res) {
  var errs = [], restaurants = null, neighborhoods = null, count = 0
    , send = function () {
      if (count >= 2) {
        res.render('index', { 
          title: 'Restaurants'
          , error: errs.join(';')
          , eats: restaurants
          , neighborhoods: neighborhoods
        });
      }
    };

	Restaurant.findRandom({ lean: false }, function(err, rests) {
    restaurants = rests;
    if (err) {
      errs.push(err);
    }
    count++;
    send();
  });

  Restaurant.findAllNeighborhoods(function (err, neighs) {
    neighborhoods = neighs;
    if (err) {
      errs.push(err);
    }
    count++;
    send();
  });
};

// API Calls
exports.api = {};

// Get random restaurants
exports.api.random = function(req, res) {
  Restaurant.findRandom({
      lean: true // get plain objects back
    , neighborhood: req.query.neighborhood
    , dollars: req.query.dollars
  }, function(err, restaurants) {
    res.json({eats: restaurants, error: err});
  });
};

// Add a new restaurant
exports.api.add = function(req, res) {
  var name = req.query.name || req.body.name
    , neighborhood = req.query.neighborhood || req.body.neighborhood
    , dollars = req.query.dollars || req.body.dollars;

  Restaurant.create({
      name: name
    , neighborhood: neighborhood
    , dollars: dollars
  }, function (err, restaurant) {
    if (!err) {
      res.json({
        success: true,
        id: restaurant._id
      });
    } else {
      res.json({
        success: false,
        error: '' + err
      });
    }
     
  });
};