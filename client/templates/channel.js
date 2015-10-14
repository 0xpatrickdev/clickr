Template.channel.onCreated(function() {
	var instance = this;
  instance.channel_content = new ReactiveVar( "shows" );

  //show cursor
	instance.items = function() { 
    var params = {"channel": FlowRouter.getParam("short_name")};
    var selector = {};
    var options = {
      sort: selector, 
      limit: 25,
    }
    if (instance.channel_content = "shows") {
    	return Shows.find(params, options);
    }
    if (instance.channel_content = "movies") {
    	return Movies.find(params, options);
    }
    if (instance.channel_content = "favorites") {
    	//return Shows.find(params, options);
    }
  }

});

Template.channel.onRendered(function() {

});

Template.channel.helpers({
	channel: function () {
		var channel = FlowRouter.getParam("short_name");
		console.log("channel", channel);
		return Channels.findOne({"short_name": channel});
	},
	tabData: function() {
    return Template.instance().items();
  }
});

Template.channel.events({
	'click #getChImages': function(event, template) {
		var id = this._id;
		Meteor.call('getChImages', id, function (err, res) {
			if (res) {
				console.log("res", res);
			}
		});
	},
	'click .ch.menu a': function( event, template ) {
		console.log("click fired");
    var chMenuItem = $( event.target ).closest( "a" );
    chMenuItem.addClass( "active" );
    $( ".ch.menu a" ).not( chMenuItem ).removeClass( "active" );
    template.channel_content.set( chMenuItem.data( "tab" ) );
  }
});