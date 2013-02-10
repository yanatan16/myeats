var mongoose = require('mongoose')
  , _ = require('underscore')
  , Schema = mongoose.Schema
  , ObjectId = mongoose.SchemaTypes.ObjectId;


var RestaurantSchema = new Schema({
    id    	 : ObjectId
  , numbers  : { 
        all: { type: Number, unique: true }
      , neighborhood: Number 
    }
  , name      : String
  , neighborhood      : String
});

RestaurantSchema.index({ neighborhood: 1, 'numbers.neighborhood': 1 }, { unique: true });

// Creation method handles num field
RestaurantSchema.statics.new = function (restaurant, callback) {
  var that = this;

  this.count({}, function (err, all) {
    if (err) {
      callback(err);
      return
    }

    that.count({neighborhood: restaurant.neighborhood}, function (err, num_nghbr) {
      if (err) {
        callback(err);
        return
      }

      restaurant.numbers = {all: all, neighborhood: num_nghbr};

      that.create(restaurant, function (err, doc) {
        if (err) {
          console.log('Error creating restaurant ' + restaurant);
          callback(err)
          return
        }

        console.log('Successfully crated restaurant ' + doc);
        callback(null, doc);
      });
    });
  });
};

var nRandom = function (n, max) {
  max = max || 2;
  return _.map(_.range(n || 1), function() { return Math.floor(Math.random() * (max||2)); });
};

// options: {n: n random to return; neighborhood: 'neighborhood to search'}
// callback(err, docs) with document cursor
RestaurantSchema.statics.findRandom = function (options, callback) {
  var conditions = {}
    , that = this;
  options = options || {};

  if (options.neighborhood) {
    conditions['neighborhood'] = options.neighborhood;
  }

  this.count(conditions, function (err, count) {
    if (err) {
      callback(err);
      return
    }

    n = Math.min(options.n || 3, count);

    var nums = [];
    while (nums.length < n) {
      nums = _.uniq(nums.concat(nRandom(n, count)));
    }
    nums = nums.slice(0, n);

    var query;
    if (options.neighborhood) {
      query = { 
          neighborhood: options.neighborhood
        , 'numbers.neighborhood': { '$in': nums } 
      };
    } else {
      query = { 
        'numbers.all': { '$in': nums } 
      };
    }

    console.log('Finding random for ' + JSON.stringify(query));

    that.find(query, null, { limit: n }).lean(options.lean || false).exec(callback);
  });
};

RestaurantSchema.statics.findAllNeighborhoods = function (callback) {
  this.distinct('neighborhood', {}, callback);
};

module.exports = mongoose.model('Restaurant', RestaurantSchema);