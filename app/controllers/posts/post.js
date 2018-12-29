import Controller from '@ember/controller';

/**
 * In order to ensure this controller, and its data, is accessed the, I had to create a folder in /controllers/posts/ (that match /templates/posts/)
 * so that they are on the same type of path structure? Otherwise, it won't work
 * */
export default Controller.extend({
  title: 'My Blog Post',
  body: 'This is the body of my blog',
  authors: ["Jeff", "Gold", "Bloom", "Raiden"]
});
