define('app/views/helpers', [
  'handlebars'
], function (Handlebars) {
  Handlebars.registerHelper('selected', function (s1, s2) {
    if (s1 == s2) {
      return 'selected=selected';
    } else {
      return '';
    }
  });
})