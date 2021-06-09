(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['loadout'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<article class=\"loadout\">\r\n    <div class=\"loadout-content\">\r\n        <p class=\"kinetic-tag\">\r\n            "
    + alias4(((helper = (helper = lookupProperty(helpers,"kinetic") || (depth0 != null ? lookupProperty(depth0,"kinetic") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"kinetic","hash":{},"data":data,"loc":{"start":{"line":4,"column":12},"end":{"line":4,"column":23}}}) : helper)))
    + "\r\n        </p>\r\n        <p class=\"energy-tag\">\r\n            "
    + alias4(((helper = (helper = lookupProperty(helpers,"energy") || (depth0 != null ? lookupProperty(depth0,"energy") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"energy","hash":{},"data":data,"loc":{"start":{"line":7,"column":12},"end":{"line":7,"column":22}}}) : helper)))
    + "\r\n        </p>\r\n        <p class=\"heavy-tag\">\r\n            "
    + alias4(((helper = (helper = lookupProperty(helpers,"heavy") || (depth0 != null ? lookupProperty(depth0,"heavy") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"heavy","hash":{},"data":data,"loc":{"start":{"line":10,"column":12},"end":{"line":10,"column":21}}}) : helper)))
    + "\r\n        </p>\r\n    </div>\r\n</article>";
},"useData":true});
})();