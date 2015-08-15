// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    console.log(SongQueue, 'this.length');
    //this.on('add remove', this.playFirst, this);
    // this.on('ended', function(){
    //   this.remove(this.at(0));
    // }, this)

  },

playFirst: function () {
  this.at(0).play();
}

});
