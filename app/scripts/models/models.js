var Backbone = require('backbone');

var Contact = Backbone.Model.extend({

});

var ContactCollection = Backbone.Collection.extend({
  model: Contact
});

module.exports = {
  'contact': Contact,
  'contactCollection': ContactCollection
}
// Status API Training Shop Blog About Pricing
