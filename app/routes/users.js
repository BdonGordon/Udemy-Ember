import Route from '@ember/routing/route';

export default Route.extend({
  model: function () {
    var url = 'https://api.github.com/users';
    return Ember.$.getJSON(url).then(function (data) {
      //just getting 10 users from the 50
      return data.splice(0,10);
    });
  }
});
