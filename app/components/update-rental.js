import Ember from 'ember';

export default Ember.Component.extend({
  // sets updateRentalForm variable to false -- used to show/hide update-rental in template
  updateRentalForm: false,
  // actions / methods for use in update-rental component template
  actions: {
    // sets addNewRental to true -- used to show/hide update-rental in template
    updateRentalForm() {
      this.set('updateRentalForm', true);
    },
      // sets the params to update a rental object from template update-rental -- action up data (rental.hbs)
    update(rental) {
      var params = {
        owner: this.get('owner'),
        city: this.get('city'),
        type: this.get('type'),
        image: this.get('image'),
        bedrooms: this.get('bedrooms'),
        price: parseFloat(this.get('price'))
      };

      this.set('updateRentalForm', false);

      // assigns rental object and params object to update and sends the action up to be recieved by rental.hbs and run by rental.js -- action up data
      this.sendAction('update', rental, params);
    }
  }
});
