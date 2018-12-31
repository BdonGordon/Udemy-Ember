import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    editCar: function (id) {
      var self = this;
      let make = this.get('model.make');
      let model = this.get('model.model');
      let year = this.get('model.year');

      //finding the car record by the id, obviously
      this.store.findRecord('car', id).then(function (car) {
        car.set('make', make);
        car.set('model', model);
        car.set('year', year);

        //car.save(); <= not applicable since there isnt a database
        self.transitionToRoute('cars');
      });
    }
  }
});
