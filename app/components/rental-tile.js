import Ember from 'ember';

export default Ember.Component.extend({
  // sets isImageShowing variable to false -- used to show/hide img in template
  isImageShowing: false,
  actions: {
    // actions / methods for use in rental-tile component template
    imageShow: function() {
      // sets isImageShowing to true -- used to show/hide img in template
      this.set('isImageShowing', true);
    },
    // sets isImageShowing to false -- used to show/hide img in template
    imageHide: function() {
      this.set('isImageShowing', false);
    }
  }
});
