import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    addCar: function() {
      let make = this.get('carMake');
      let model = this.get('carModel');
      let year = this.get('carYear');
      let rand = Math.floor((Math.random() * 10000) + 1);

      var self = this;
      var newCar = this.store.createRecord('car', {
        id: rand,
        make: make,
        model: model,
        year: year
      });
      newCar.save();
      //redirecting

      self.transitionToRoute('cars');
    }
  }
});
