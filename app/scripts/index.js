var $ = require('jquery');
var Backbone = require('backbone');

var views = require('./views/views');
var models = require('./models/models');


$(function(){
  // Setup app
  var contact = new models.contactCollection();//collection
  var contactList = new views.ContactItemView({collection: contact}); //
  var contactView = new views.ContactFormView({collection: contact})


  // Render
  $('#container').html(contactView.render().el)
                 .append(contactList.render().el);
})
