define(['handlebars'], function(Handlebars) {

return Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<p><label>Name</label><input type=\"text\" id=\"new-name\" value=\"";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/></p>\n<p><label>Neighborhood</label><input type=\"text\" id=\"new-neighborhood\" value=\"";
  if (stack1 = helpers.neighborhood) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.neighborhood; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/></p>\n<p><label>Cost</label><select id=\"new-dollars\" class=\"text ui-widget-content ui-corner-all\">\n  <option value=\"1\" ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.selected),stack1 ? stack1.call(depth0, depth0.dollars, 1, options) : helperMissing.call(depth0, "selected", depth0.dollars, 1, options)))
    + ">$</option>\n  <option value=\"2\" ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.selected),stack1 ? stack1.call(depth0, depth0.dollars, 2, options) : helperMissing.call(depth0, "selected", depth0.dollars, 2, options)))
    + ">$$</option>\n  <option value=\"3\" ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.selected),stack1 ? stack1.call(depth0, depth0.dollars, 3, options) : helperMissing.call(depth0, "selected", depth0.dollars, 3, options)))
    + ">$$$</option>\n</select></p>\n<p><button id='add-eat' class=\"btn\" href=\"#\">Add</button></p>";
  return buffer;
  })

});