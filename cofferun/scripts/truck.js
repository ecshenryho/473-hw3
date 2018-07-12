(function (window) {
  'use strict';// double quotes or single
  var App =window.App || {};
  function Truck(truckId, db) {
    this.truckId=truckId;
    this.db=db;
  }
  Truck.prototype.creatOrder=function (order){
    console.log('Adding order for '+ order.emailAddress);
    this.db.add(order.emailAddress, order);
  };
  Truck.prototype.deliverOrder=function (customerId){
    console.log('Adding order for '+ customerId);
    this.db.remove(customerId);
  };
  Truck.prototype.printOrders=function(){
    var customerIdArray=Object.keys(this.db.getAll());

    console.log('Truck #' +this.truckId + ' has peding orders: ');
    customerIdArray.forEach(function (id){
      console.log(this.db.get(id));
    }.bind(this));
  };
  App.Truck=Truck;
  window.App=App;

})(window);
