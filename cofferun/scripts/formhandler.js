(function (window) {
  'use strict';
  var App = window.App || {};
  var $ = window.jQuery;

  function Formhandler(selector){
    if (!selector) {
      throw new Error('No selector provided');
    }
    this.$formElement=$(selector);
    if (this.$formElement.length===0) {
      throw new Error('Could not find element with selector: '+ selector);
    }
  }
  App.Formhandler = Formhandler;
  window.App = App;
})(window);
