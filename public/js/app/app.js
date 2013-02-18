define('app/app', [
  'jquery',
  'underscore',
  'backbone',
  'app/views/restaurant/list',
  'app/views/restaurant/new',
  'app/collections/restaurant',
  'app/models/randomizer',
  'bootstrap', // Makesure bootstrap is loaded
  'app/views/helpers'
], function($, _, Backbone, RestaurantListView, NewRestaurantView,
  RestaurantList, Randomizer) {

  function initialize(bootstrap) {
    console.log('bootstrap: ' + JSON.stringify(bootstrap));
    var restaurantListView = new RestaurantListView({
        randomizer: new Randomizer(bootstrap.randomizer)
      , restaurants: RestaurantList.absorb(bootstrap.restaurants)
    });

    var newRestaurantView = new NewRestaurantView({
        list: restaurantListView
    });

    Backbone.history.start();
  }

  // TODO: error handling with window.onerror
  // http://www.slideshare.net/nzakas/enterprise-javascript-error-handling-presentation

  return {
    initialize: initialize
  };
});
