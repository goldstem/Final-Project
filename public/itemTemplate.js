(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['item'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<article class=\"item\">\r\n    <div class=\"item-content\">\r\n        <img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"img") || (depth0 != null ? lookupProperty(depth0,"img") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"img","hash":{},"data":data,"loc":{"start":{"line":3,"column":18},"end":{"line":3,"column":25}}}) : helper)))
    + "\" class=\"item-image\">\r\n        <div class=\"item-holder name\">\r\n            <p class=\"name-tag\"> \r\n                "
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":6,"column":16},"end":{"line":6,"column":24}}}) : helper)))
    + "\r\n            </p>\r\n        </div>\r\n        <div class=\"item-holder type\">\r\n            <p class=\"type-tag\"> \r\n                "
    + alias4(((helper = (helper = lookupProperty(helpers,"type") || (depth0 != null ? lookupProperty(depth0,"type") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data,"loc":{"start":{"line":11,"column":16},"end":{"line":11,"column":24}}}) : helper)))
    + "\r\n            </p>\r\n        </div>\r\n        <div class=\"item-holder rarity\">\r\n            <p class=\"rarity-tag\">\r\n                "
    + alias4(((helper = (helper = lookupProperty(helpers,"rarity") || (depth0 != null ? lookupProperty(depth0,"rarity") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rarity","hash":{},"data":data,"loc":{"start":{"line":16,"column":16},"end":{"line":16,"column":26}}}) : helper)))
    + "\r\n            </p>\r\n        </div>\r\n        <div class=\"item-holder element\">\r\n            <p class=\"element-tag\">\r\n                "
    + alias4(((helper = (helper = lookupProperty(helpers,"element") || (depth0 != null ? lookupProperty(depth0,"element") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"element","hash":{},"data":data,"loc":{"start":{"line":21,"column":16},"end":{"line":21,"column":27}}}) : helper)))
    + "\r\n            </p>\r\n        </div>\r\n        <div class=\"item-holder ammo\">\r\n            <p class=\"ammo-tag\">\r\n                "
    + alias4(((helper = (helper = lookupProperty(helpers,"ammo") || (depth0 != null ? lookupProperty(depth0,"ammo") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ammo","hash":{},"data":data,"loc":{"start":{"line":26,"column":16},"end":{"line":26,"column":24}}}) : helper)))
    + "\r\n            </p>\r\n        </div>\r\n        <div class=\"item-holder season\">\r\n            <p class=\"season-tag\">\r\n                "
    + alias4(((helper = (helper = lookupProperty(helpers,"season") || (depth0 != null ? lookupProperty(depth0,"season") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"season","hash":{},"data":data,"loc":{"start":{"line":31,"column":16},"end":{"line":31,"column":26}}}) : helper)))
    + "\r\n            </p>\r\n        </div> \r\n        \r\n    </div>\r\n    <button type=\"button\" class=\"expand\">Details</button>\r\n    <div class=\"expanded-content\">\r\n        <p>Slot 1:</p>\r\n        <p class =\"perks1-content\">\r\n            "
    + alias4(((helper = (helper = lookupProperty(helpers,"perks1") || (depth0 != null ? lookupProperty(depth0,"perks1") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"perks1","hash":{},"data":data,"loc":{"start":{"line":40,"column":12},"end":{"line":40,"column":22}}}) : helper)))
    + "\r\n        </p>\r\n        <p>Slot 2:</p>\r\n        <p class =\"perks2-content\">\r\n            "
    + alias4(((helper = (helper = lookupProperty(helpers,"perks2") || (depth0 != null ? lookupProperty(depth0,"perks2") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"perks2","hash":{},"data":data,"loc":{"start":{"line":44,"column":12},"end":{"line":44,"column":22}}}) : helper)))
    + "\r\n        </p>\r\n    </div>\r\n</article>";
},"useData":true});
})();