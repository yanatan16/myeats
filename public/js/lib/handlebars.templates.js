define(['handlebars'], function(Handlebars) {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['restaurant/list.hbs'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n<p><label>Neighborhood</label><select id=\"random-neighborhood\">\n  <option value=\"\" ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.selected),stack1 ? stack1.call(depth0, depth0.neighborhood, "", options) : helperMissing.call(depth0, "selected", depth0.neighborhood, "", options)))
    + "></option>\n  ";
  stack2 = helpers.each.call(depth0, depth0.neighborhoods, {hash:{},inverse:self.noop,fn:self.programWithDepth(program2, data, depth0),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n</select></p>\n<p><label>Cost</label><select id=\"random-cost\" class=\"text ui-widget-content ui-corner-all\">\n  <option value=\"\" ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.selected),stack1 ? stack1.call(depth0, depth0.dollarsigns, 0, options) : helperMissing.call(depth0, "selected", depth0.dollarsigns, 0, options)))
    + "></option>\n  <option value=\"1\" ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.selected),stack1 ? stack1.call(depth0, depth0.dollarsigns, 1, options) : helperMissing.call(depth0, "selected", depth0.dollarsigns, 1, options)))
    + ">$</option>\n  <option value=\"2\" ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.selected),stack1 ? stack1.call(depth0, depth0.dollarsigns, 2, options) : helperMissing.call(depth0, "selected", depth0.dollarsigns, 2, options)))
    + ">$$</option>\n  <option value=\"3\" ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.selected),stack1 ? stack1.call(depth0, depth0.dollarsigns, 3, options) : helperMissing.call(depth0, "selected", depth0.dollarsigns, 3, options)))
    + ">$$$</option>\n</select></p>\n<p><button id=\"randomize\" class=\"btn\" href=\"#\">Randomize!</button></p>\n";
  return buffer;
  }
function program2(depth0,data,depth1) {
  
  var buffer = "", stack1, options;
  buffer += "\n    <option value=\""
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\" ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.selected),stack1 ? stack1.call(depth0, depth1.neighborhood, depth0, options) : helperMissing.call(depth0, "selected", depth1.neighborhood, depth0, options)))
    + ">"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "</option>\n  ";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n  <div class=\"row-fluid\">\n    <div class=\"span4\">\n      <h2>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h2>\n      <p>Neighborhood: ";
  if (stack1 = helpers.neighborhood) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.neighborhood; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>    \n      <p>Cost: ";
  if (stack1 = helpers.dollarsigns) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.dollarsigns; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>  \n    </div>\n  </div>\n";
  return buffer;
  }

  stack1 = helpers['with'].call(depth0, depth0.randomizer, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  stack1 = helpers.each.call(depth0, depth0.restaurants, {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer;
  });
templates['restaurant/new.hbs'] = template(function (Handlebars,depth0,helpers,partials,data) {
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
  });
});