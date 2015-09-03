App.Views.SongList = Backbone.View.extend({
  el: "#library",
  views: [],

  initialize: function(){
    this.listenTo(this.collection, 'reset', this.renderAll);
    this.listenTo(this.collection, 'add', this.renderOne);
  },

  renderOne: function(song){
    var view = new App.Views.Song({model: song});
    this.views.push(view);
    this.$el.prepend(view.$el);
  },

  renderAll: function(){
    this.$el.empty();
    this.collection.each(this.renderOne.bind(this));
  },

})
