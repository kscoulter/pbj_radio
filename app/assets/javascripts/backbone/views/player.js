App.Views.Player = Backbone.View.extend({
  el: "#player",

  initialize: function(){
    this.template = HandlebarsTemplates['songs/player']
  },
  render: function(){
    var nowPlaying = this.template(this.model.toJSON());
    this.$el.html(nowPlaying);
  },
  setSong: function(song){
    this.model = song;
    this.render();
  }


})
