import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('services');
  this.route('contact');

  /*This route will be found in the in the templates/posts/index and the "new" is in the /posts/new route.
  * This is basically a nested route. 
  */
  this.route('posts', { path: '/posts' }, function () {
    this.route('new');
    //This ID is a variable that will utilize the Post model's data (post_id) to access this via: ...posts/1
    //this.route('post', {path: ':path_id'})
    this.route('post');
  });
  this.route('cars', function() {
    this.route('new');
  });
  this.route('users');
});

export default Router;
