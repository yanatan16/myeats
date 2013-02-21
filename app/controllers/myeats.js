
/*
 * GET home page.
 */
var Restaurant = require('../models/Restaurant.js')
  , fanin = require('../../lib/fanin.js');

// Main page
exports.index = function(req, res) {
  var errs = [], restaurants = null, neighborhoods = null, count = 0
    , send = function () {
      if (count >= 2) {
        res.render('index', { 
            title: 'Restaurants'
          , user: req.user
          , error: errs.join(';')
          , bootstrap: {
                restaurants: restaurants
              , randomizer: {
                    neighborhoods: neighborhoods
                }
            }
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
    if (err) {
      res.json(500, {error: err});
    } else {
      res.json(restaurants);
    }
  });
};

// Add a new restaurant
exports.api.add = function (req, res) {
  var sys = require('sys');
  sys.puts(sys.inspect(req.body));

  var params = req.body
    , name = params.name
    , neighborhood = params.neighborhood
    , dollars = params.dollars;

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