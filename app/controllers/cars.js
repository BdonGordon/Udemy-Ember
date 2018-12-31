import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    deleteCar: function (id) {
      this.store.findRecord('car', id).then(function (car) {
        car.deleteRecord();
        car.save(); //<= save needed here. altho it won't stay deleted after refresh, this gets the job done
      });
    }
  }
});
