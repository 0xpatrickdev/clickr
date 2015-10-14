/*
Meteor.publish('showCountsByChannel', function () {
	var channels = Channels.find({}, {fields: {"short_name": 1} }).fetch();
		for(var i = 0; i < channels.length; i++){
			var channel = channels[i].short_name;
			var countName = channels[i].short_name + '_chCount';
			Counts.publish(this, countName, Shows.find({"channel": channel}), {noReady: true});
		}
});
*/