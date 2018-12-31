import Route from '@ember/routing/route';

//var cars = [
//  {
//    "id": 1,
//    "make": "Honda",
//    "model": "Accord",
//    "year": 2007
//  },
//  {
//    "id": 2,
//    "make": "Porsche",
//    "model": "9/11",
//    "year": 20016
//  },
//  {
//    "id": 3,
//    "make": "Lamborghini",
//    "model": "Ventador",
//    "year": 2019
//  },
//];

export default Route.extend({
  model: function () {
    //Ember already knows that cars.json is in the /app/public/ directory
    return Ember.$.getJSON('cars.json').then(function (data) {
      return data;
    });
  }
});
