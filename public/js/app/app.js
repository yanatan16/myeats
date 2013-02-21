define('app/app', [
  'jquery',
  'underscore',
  'backbone',
  'app/views/restaurant/list',
  'app/views/restaurant/new',
  'app/views/notifier',
  'app/collections/restaurant',
  'app/models/randomizer',
  'bootstrap', // Makesure bootstrap is loaded
  'app/views/helpers'
], function($, _, Backbone, RestaurantListView, NewRestaurantView, NotificationView,
  RestaurantList, Randomizer) {

  function initialize(bootstrap) {
    var notifier = new NotificationView({ messages: bootstrap.messages });

    var restaurantListView = new RestaurantListView({
        randomizer: new Randomizer(bootstrap.randomizer)
      , restaurants: RestaurantList.absorb(bootstrap.restaurants)
      , notifier: notifier
    });

    var newRestaurantView = new NewRestaurantView({
        list: restaurantListView
      , notifier: notifier
    });

    Backbone.history.start();
  }

  // TODO: error handling with window.onerror
  // http://www.slideshare.net/nzakas/enterprise-javascript-error-handling-presentation

  return {
    initialize: initialize
  };
});
