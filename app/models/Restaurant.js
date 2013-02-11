var mongoose = require('mongoose')
  , _ = require('underscore')
  , Schema = mongoose.Schema
  , hbs = require('hbs');


var RestaurantSchema = new Schema({
    name           : { type: String, required: true }
  , neighborhood   : { type: String, index: true, required: true }
  , dollars        : { type: Number, required: true, min: 1, max: 3 }
});

RestaurantSchema.index({dollars: 1, neighborhood: 1})

RestaurantSchema.virtual('dollar.signs').get(function () {
  return ['$', '$$', '$$$'][this.dollars - 1];
});

// options: {n: n random to return; neighborhood: 'neighborhood to search'}
// callback(err, docs) with document cursor
RestaurantSchema.statics.findRandom = function (options, callback) {
  var conditions = {}
    , that = this;
  options = options || {};

  if (options.neighborhood) {
    conditions.neighborhood = options.neighborhood;
  }

  if (options.dollars) {
    conditions.dollars = options.dollars;
  }

  console.log('findRandom(' + JSON.stringify(options) + ')');

  this.count(conditions, function (err, count) {
    if (err) {
      callback(err);
      return
    }

    n = Math.min(options.n || 1, count);

    var buffer = [];
    var bcount = 0;
    var cb = function (err, docs) {
      if (err) {
        console.error('Error: ', err);
      } else {
        buffer = _.union(buffer, docs);
      }

      bcount += 1;
      if (bcount >= n) {
        callback(null, buffer);
      }
    }

    _.each(_.range(n), function () {
      var rn = Math.floor(Math.random() * count);
      that.find(conditions, null, { limit: 1, skip: rn }).lean(options.lean || false).exec(cb);
    });
    
  });
};

RestaurantSchema.statics.findAllNeighborhoods = function (callback) {
  this.distinct('neighborhood', {}, callback);
};

module.exports = Server.models.Restaurant = mongoose.model('Restaurant', RestaurantSchema);