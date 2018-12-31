import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    addCar: function() {
      let make = this.get('carMake');
      let model = this.get('carModel');
      let year = this.get('carYear');

      var self = this;
      var newCar = this.store.createRecord('car', {
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
