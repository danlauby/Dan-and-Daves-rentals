import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    // return all rentals to index template as model
    return Ember.RSVP.hash({
      rentals: this.store.findAll('rental'),
      announcements: this.store.findAll('announcement')
    });
  },

  setupController(controller, model) {
    this._super(...arguments);
    Ember.set(controller, 'rentals', model.rentals);
    Ember.set(controller, 'announcements', model.announcements);
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
