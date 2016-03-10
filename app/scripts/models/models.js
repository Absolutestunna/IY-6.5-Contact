var Backbone = require('backbone');

var Contact = Backbone.Model.extend({

});

var ContactCollection = Backbone.Collection.extend({
  model: Contact,
  input: function(data){
    this.add(data);
    return data;
  }
});

module.exports = {
  'contact': Contact,
  'contactCollection': ContactCollection
}
