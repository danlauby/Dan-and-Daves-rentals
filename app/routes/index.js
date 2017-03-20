import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    // return all rentals to index template as model
    return this.store.findAll('rental');
  },

  actions: {
    // Save rental json object to data store
    saveRental3(params) {
      var newRental = this.store.createRecord('rental', params);
      // Save to data store
      newRental.save();
      // Reroute to index
      this.transitionTo('index');
    }

  }
});
