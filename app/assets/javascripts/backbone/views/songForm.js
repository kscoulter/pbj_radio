App.Views.NewSong = Backbone.View.extend({
  el: "#new-song-modal",

  events: {
    "click .close" : "closeForm",
    "click .submit": "createSong"
  },

  initialize: function(){
    console.log("new song view initialized");
  },

  closeForm: function(){
    $("#new-song-modal").hide()
    App.Routers.song.navigate("")
  },

  createSong: function(){
    var data = {
      title:$("#new-song-title").val(),
      audio_url:$("#new-song-audio-url").val(),
      album_art:$("#new-song-album-art").val(),
      artist:$("#new-song-artist").val(),
      genre:$("#new-song-genre").val()
    };
    this.collection.create(data);
    this.$el.find("input").val("");
    this.closeForm();
  }

})
