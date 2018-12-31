import Component from '@ember/component';

export default Component.extend({
  name: 'JS Value',
  greetingSet: false,
  actions: {
    //name will be passed into here from the .hbs 
    greetUser: function (name) {
      alert("Greeting User " + name);
      //this is how we set properties in this class
      this.setProperties({
        greetingSet: true
      });
    }
  },
  /* Here, we are going to wrap the component in this class. Defining .well class in the .css(.scss) file will
  allow us to define it */
  classNames: ['well'],
  //when greetingSet is true (after clicking the button), it will add a class called .greeting-set
  classNameBindings: ['greetingSet']
});
