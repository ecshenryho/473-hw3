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

  Formhandler.prototype.addSubmitHandler = function(){
    console.log('Setting submit handler for form');
    this.$formElement.on('submit',function (event){
      event.preventDefault();

      var data = {};
      $(this).serializeArray().forEach(function (item){
        data[item.name]=item.value;
        console.log(item.name + ' is ' + item.value);
      });
      console.log(data);
    });
  };
  App.Formhandler = Formhandler;
  window.App = App;
})(window);
