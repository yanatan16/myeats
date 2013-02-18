define('app/models/restaurant', [
    'jquery'
  , 'underscore'
  , 'backbone'
  , 'handlebars'
], function($, _, Backbone, Handlebars) {
  var Restaurant, urlRoot = "/api/v1/restaurant";

  Restaurant = Backbone.Model.extend({
    idAttribute: "_id",
    urlRoot: urlRoot,
    defaults: {
      name: "Not A Restaurant!",
      dollars: 2,
      neighborhood: 'Harlem'
    },

    initialize: function () {
      _.bindAll(this, 'dollarsigns', 'hbs'); // fixes loss of context for 'this' within methods 
    },

    dollarsigns: function () {
      return ['$', '$$', '$$$'][this.get('dollars') - 1];
    },

    hbs: function () {
      return {
        name: this.get('name'),
        dollarsigns: this.dollarsigns(),
        neighborhood: this.get('neighborhood')
      };
    }
  });

  return Restaurant;
});