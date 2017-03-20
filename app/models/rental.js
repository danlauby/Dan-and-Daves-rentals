import DS from 'ember-data';
// Schema for rental object
export default DS.Model.extend({
  owner: DS.attr(),
  city: DS.attr(),
  type: DS.attr(),
  image: DS.attr(),
  bedrooms: DS.attr(),
  price: DS.attr()
});
