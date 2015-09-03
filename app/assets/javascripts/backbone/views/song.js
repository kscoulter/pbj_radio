App.Views.Song = Backbone.View.extend({
  className: "song",
  tagName: "div",

  event: {

  },

  initialize: function(){
    console.log("new view was intialized");
    this.template = HandlebarsTemplates['songs/show']
    this.$el.html(this.template(this.model.toJSON()));
  },
})
