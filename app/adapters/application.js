import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: "cars.json?jsonp=?",

  //Returning false if there ar eno records at all
  shouldReloadAll() {
    return true;
  } 
});
