// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    this.render();
  },

  render: function(){
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();
      //console.log(this.collection.models[0].attributes);
    this.$el.html('<th>Queue:</th>').append(      
    //   this.collection.map(function(song){
    //   	console.log(this.SongQueue.queueArray)
    //     return new SongQueueEntryView({model: song}).render();
    //   })
    // );

    )
  }

});
