import Ember from 'ember';
// get array of announcements and pass to announcement template as model
export default Ember.Route.extend({
  model() {
    return this.store.findAll('announcement');
  }
});
