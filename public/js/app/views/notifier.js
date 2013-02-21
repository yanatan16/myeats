define('app/views/notifier', [
  'jquery',
  'underscore',
  'backbone',
  'templates/notifier'
], function($, _, Backbone, Template) {

  var NotificationView = Backbone.View.extend({    
    el: $('#notifier'), // attaches `this.el` to an existing element.

    initialize: function(options) {
      _.bindAll(this, 'template', 'render', 'push', 'error', 'warning', 'notify', 'success');

      this.options.notifications = this.options.notifications || options.notifications || [];

      this.render();
    },

    template: function () {
      return Template({
        notifications: this.options.notifications
      });
    },

    render: function(){
      this.$el.html(this.template());
    },

    push: function (type, msg) {
      this.options.notifications = [{type: type, msg: msg}].concat(this.options.notifications).slice(0, 3);
      this.render();
    },

    error: function (msg) { this.push('error', msg); },
    warning: function (msg) { this.push('warning', msg); },
    notify: function (msg) { this.push('notify', msg); },
    success: function (msg) { this.push('success', msg); }
  });

  return NotificationView;

});