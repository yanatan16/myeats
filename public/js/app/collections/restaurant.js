define('app/collections/restaurant', [
    'jquery'
  , 'underscore'
  , 'backbone'
  , 'app/models/restaurant'
], function($, _, Backbone, RestaurantModel) {
  var RestaurantList, urlRoot = "/api/v1/restaurants";

  RestaurantList = Backbone.Collection.extend({
    model: RestaurantModel,
    url: urlRoot,

    initialize: function () {
      _.bindAll(this, 'hbs'); // fixes loss of context for 'this' within methods 
    },

    hbs: function () {
      return _.map(this.models, function (mod) {
        return mod.hbs();
      });
    }
  });

  // Class-level method
  RestaurantList.getRandom = function (options, callback) {
    var r = new RestaurantList();
    r.fetch({
      data: options,
      success: function (restaurants) {
        callback(null, restaurants);
      },
      error: function (err) {
        callback("Could not randomize restaurant!");
      }
    });
  };

  RestaurantList.absorb = function (list) {
    return new RestaurantList(_.map(list, function (mod) {
      return new RestaurantModel(mod);
    }));
  };

  return RestaurantList;
});