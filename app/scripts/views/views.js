var $ = require('jquery');
var Backbone = require('backbone');
var handlebars = require('handlebars');

// List View
var ContactListView = Backbone.View.extend({

  initialize: function() {
    this.listenTo(this.collection, "add", this.rendercontactItem);
  },
  render: function(){
    return this;
  },
  rendercontactItem: function(contact){
    var view = new ContactItemView({ model: contact });
		this.$el.append(view.render().el);
  }
});

// Individual Item View
var ContactItemView = Backbone.View.extend({
  template: handlebars.compile($('#contact-item').html()),
  events: {
    "click .submit": "processForm",
    // "dblclick .clickMe": "doubleTime"
  },

  // render: function(){
  //   this.$el.html(this.template(this.model.toJSON()));
  //   return this;
  // },
  processForm: function(e){
    e.preventDefault;
    this.$el.html(this.template(this.model.toJSON()));
    return this;

  }

});

module.exports = {
  'ContactListView': ContactListView,
  'TContactItemView': ContactItemView
};
