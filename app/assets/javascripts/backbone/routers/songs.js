App.Routers.Song = Backbone.Router.extend({
  routes:{
    "" : "hideForm",
    "songs/new": "showForm",
    "songs/:id/play": "showNowPlaying"
  },

  hideForm: function(){
    $("#new-song-modal").hide();
  },

  showForm: function(){
    $("#new-song-modal").show()
  },

  showNowPlaying: function(id){
    var song = new App.Models.Song({id: id});
    var player = new App.Views.Player();
    song.fetch().then(function(){
      player.setSong(song);
    })
  }
})
