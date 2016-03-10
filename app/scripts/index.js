var $ = require('jquery');

var views = require('./views/views');
var models = require('./models/models');


$(function(){
  // Setup app
  var contact = new models.contactCollection();
  var contactList = new views.ContactListView({collection: contact}); //
  var formGroup = $('.form-group')[0];
  // Render
  $('#container').html(contactList.render().el);



  // // Simulate a fetch
  // contact.add([
  //   {'task': 'Learn Backbone Views', 'completed': false},
  //   {'task': 'Hook up view to model with events', 'completed': false}
  // ]);
})
