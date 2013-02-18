(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['restaurant/item.hbs'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"row-fluid\">\n  <div class=\"span4\">\n    <h2>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h2>\n    <p>Neighborhood: ";
  if (stack1 = helpers.neighborhood) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.neighborhood; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>    \n    <p>Cost: ";
  if (stack1 = helpers.dollarsigns) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.dollarsigns; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>  \n  </div><!--/span-->\n</div><!--/row-->";
  return buffer;
  });
templates['restaurant/list.hbs'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<p><button id=\"randomize\" class=\"btn\" href=\"#\">Randomize!</button></p>";
  });
})();