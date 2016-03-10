var $ = require('jquery');
var Backbone = require('backbone');
var templateForm = require('../templates/form.hbs');
var templateContact = require('../templates/listItem.hbs');
console.log(templateContact)

$.fn.serializeObject = function() {
  return this.serializeArray().reduce(function(acum, i) {
    acum[i.name] = i.value;
    return acum;
  }, {});
};

// Form View
var ContactFormView = Backbone.View.extend({
  tagName: "form",
  template: templateForm,
  events: {
    "click .submit": "processinfo"
  },
  render: function(){
    this.$el.html(this.template());
    return this;
  },
  processinfo: function(contact){
    e.preventDefault();
    var formData = this.$el.serializeObject();
    this.collection.add(formData)

    this.render();
  },

});

//List View
var ContactListView = Backbone.View.extend({
  tagName: 'ul',
  initialize: function(){
     this.listenTo(this.collection, 'add', this.renderChild)
  },
  render: function(){
    return this;
  },
  renderChild: function(){
    var view = new ContactItemView({model: contact})
    this.$el.append(view.render().el);
  },

});

// Individual Item View
var ContactItemView = Backbone.View.extend({
  tagName: 'li',
  template: templateContact, //contact item template,
  // console.log(this.template)
  render: function(){
    // console.log(this.model)
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },


});


module.exports = {
  'ContactListView': ContactListView,
  'ContactItemView': ContactItemView,
  'ContactFormView': ContactFormView

};
