import Ember from 'ember';

export default Ember.Component.extend({
  actions: {

    // Confirm and delete specific rental object from new-rental.hbs
    // sends action up to rental.hbs under key destroyRental with value of rental object
    delete(rental) {
      if (confirm('Are you sure you want to delete this rental?')) {
        this.sendAction('destroyRental', rental);
      }
    }
  }
});
