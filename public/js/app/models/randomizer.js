define('app/models/randomizer', [
  'jquery',
  'underscore',
  'backbone'
], function ($, _, Backbone) {

  var Randomizer = Backbone.Model.extend({
    defaults: {
      dollarsigns: 0,
      neighborhood: '',
      neighborhoods: []
    },

    initialize: function () {
      _.bindAll(this, 'hbs', 'params', 'addNeighborhood');
    },

    hbs: function () {
      return this.toJSON();
    },

    params: function () {
      return {
        dollars: this.get('dollarsigns'),
        neighborhood: this.get('neighborhood')
      }
    },

    addNeighborhood: function (nn) {
      var neighs = this.get('neighborhoods')
        , l = neighs.length
        , nneighs = _.union(neighs, [nn])
        , nl = nneighs.length;

      if (nl > l) {
        this.set('neighborhoods', nneighs);
        return true;
      }
      return false;
    }
  });

  return Randomizer;

});