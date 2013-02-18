define('app/views/restaurant/list', [
  'jquery',
  'underscore',
  'backbone',
  'handlebars',
  'app/collections/restaurant',
  'app/models/randomizer',
  'handlebars-templates'
], function($, _, Backbone, Handlebars, RestaurantList, Randomizer) {

  var RestaurantListView = Backbone.View.extend({    
    el: $('#eats'), // attaches `this.el` to an existing element.

    initialize: function(options) {
      _.bindAll(this, 'template', 'render', 'randomize',
        'updateNeighborhood', 'updateCost', 'addNeighborhood'); // fixes loss of context for 'this' within methods

      this.render();
    },

    events: {
      'click button#randomize': 'randomize',
      'change #random-neighborhood': 'updateNeighborhood',
      'change #random-cost' : 'updateCost',
      'new-neighborhood': 'addNeighborhood'
    },

    template: function () {
      return Handlebars.templates['restaurant/list.hbs']({ 
          randomizer: this.options.randomizer.hbs()
        , restaurants: this.options.restaurants.hbs()
      });
    },

    render: function(){
      var temp = this.template();
      $(this.el).html(temp);
    },

    randomize: function() {
      var that = this;
      RestaurantList.getRandom(this.options.randomizer.params(),
        function (coll) {
          that.options.restaurants = coll;
          that.render(); 
      });
    },

    updateNeighborhood: function() {
      this.options.randomizer.set('neighborhood', this.$('#random-neighborhood').val())
      this.randomize();
    },
    updateCost: function() {
      this.options.randomizer.set('dollarsigns', this.$('#random-cost').val())
      this.randomize();
    },

    addNeighborhood: function (nn) {
      var changed = this.options.randomizer.addNeighborhood(nn);
      if (changed) {
        this.render();
      }
    }

  });

  return RestaurantListView;

});