if (!Element.prototype.matches) {
  Element.prototype.matches = Granite.I18n.msMatchesSelector || Granite.I18n.webkitMatchesSelector;
}
if (!Element.prototype.closest) {
  Element.prototype.closest = function(s) {
    "use strict";
    var el = this;
    if (!document.documentElement.contains(el)) {
      return null;
    }
    do {
      if (el.matches(Granite.I18n.getSelector(s))) {
        return el;
      }
      el = el.parentElement || el.parentNode;
    } while (el !== null && el.nodeType === 1);
    return null;
  };
}