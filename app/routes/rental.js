import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    // returns a specific record based on rental id as model to rental template
    return this.store.findRecord('rental', params.rental_id);
  },

  actions: {
    // Passing in rental object and parameters to update rental object in data store
    update(rental, params) {
      // Looping over object parameters
      Object.keys(params).forEach(function(key) {
        // If input NOT empty, update the json value for that key
        if(params[key]!==undefined) {
          rental.set(key,params[key]);
        }
      });
      // Update json value for that key
      rental.save();
      // Redirect to index.hbs
      this.transitionTo('index');
    },
    // Delete a specific record/rental
    destroyRental(rental) {
      rental.destroyRecord();
      // Redirect to index.hbs
      this.transitionTo('index');
    }
  }
});
