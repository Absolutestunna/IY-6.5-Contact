var $ = require('jquery');

var views = require('./views/views');
var models = require('./models/models');


$(function(){
  // Setup app
  var contact = new models.contactCollection();//collection
  var contactList = new views.ContactItemView({collection: contact}); //
  var formGroup = $('.form-group')[0];

  // $('.submit').click(function(e){
  //     e.preventDefault;
  //     this.$el.html(this.template(this.model.toJSON()));
  //     // return this;
  // })
  console.log(formGroup)
  // Render
  $('#container').html(contactList.render().el);

})
