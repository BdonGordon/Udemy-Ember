import Ember from 'ember';

export function formatDate(params) {
  let theDate = params[0];
  theDate = new Date(params[0]).toLocaleDateString();
  return theDate;
}

//this is creating a simple helper
export default Ember.Helper.helper(formatDate);
