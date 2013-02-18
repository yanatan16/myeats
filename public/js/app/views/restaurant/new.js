define('app/views/restaurant/new', [
  'jquery',
  'underscore',
  'backbone',
  'handlebars',
  'app/models/restaurant',
  'templates/restaurant/new'
], function($, _, Backbone, Handlebars, Restaurant, Template) {

  var NewRestaurantView = Backbone.View.extend({    
    el: $('#new-eats'), // attaches `this.el` to an existing element.

    initialize: function(options) {
      _.bindAll(this, 'template', 'render', 'name', 'neighborhood', 'dollars', 'save');

      this.options.restaurant = this.options.restaurant || options.restaurant || 
        new Restaurant({name: '', neighborhood: '', dollars: 1});

      this.render();
    },

    events: {
      'change #new-name': 'name',
      'change #new-neighborhood': 'neighborhood',
      'change #dollars': 'dollars',
      'click button#add-eat': 'save'
    },

    template: function () {
      return Template(this.options.restaurant.toJSON());
    },

    render: function(){
      var temp = this.template();
      $(this.el).html(temp);
    },

    name: function () {
      this.options.restaurant.set('name', this.$('#new-name').val());
    },
    neighborhood: function () {
      this.options.restaurant.set('neighborhood', this.$('#new-neighborhood').val());
    },
    dollars: function () {
      this.options.restaurant.set('dollars', this.$('#new-dollars').val());
    },

    save: function () {
      this.options.restaurant.save();
      if (this.options.list){
        this.options.list.trigger('new-neighborhood', this.options.restaurant.get('neighborhood'));
      }
    }
  });

  return NewRestaurantView;

});