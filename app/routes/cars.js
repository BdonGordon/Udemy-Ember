import Route from '@ember/routing/route';

export default Route.extend({
  model: function () {
    //Ember already knows that cars.json is in the /app/public/ directory
    //getting the 'car' model 
    return this.store.findAll('car');
  }
});
