import Ember from 'ember';

export default Ember.Component.extend({
  // sets addNewRental variable to false -- used to show/hide form in template
  addNewRental: false,
  // actions / methods for use in new-rental component template
  actions: {
    // sets addNewRental to true -- used to show/hide form in template
    rentalFormShow() {
      this.set('addNewRental', true);
    },

    // sets the params to save a new rental object from template input -- action up data (new-rental.hbs)
    saveRental1() {
      var params = {
        owner: this.get('owner'),
        city: this.get('city'),
        type: this.get('type'),
        image: this.get('image'),
        bedrooms: this.get('bedrooms'),
        price: parseFloat(this.get('price'))
      };

      // sets addNewRental to false -- used by template to hide the add new rental form
      this.set('addNewRental', false);

      // action up call for saveRental2 and sends the params sends to index.hbs and run by index.js
      this.sendAction('saveRental2', params);
    }
  }
});
