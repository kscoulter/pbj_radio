App.Views.Song = Backbone.View.extend({
  className: "song",
  tagName: "div",

  events: {
    "click": "renderPlaying"
  },

  renderPlaying: function(){
    var nowPlaying = new App.Views.Player()
    nowPlaying.setSong(this.model);
  },

  initialize: function(){
    console.log("new view was intialized");
    this.template = HandlebarsTemplates['songs/show']
    this.$el.html(this.template(this.model.toJSON()));
  },
})
