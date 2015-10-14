Meteor.publish('channels', function() {
  return Channels.find();
});

Meteor.publish('channelList', function() {
  return ChannelList.find();
});


/*

Meteor.publish('channels', function(param) {
	var selector = {
		//field: param
	}
	var options = {
		//sort: {created_time: 1},
		//fields: {field1:1, field2:1, created_time:1},
		//limit: 1
	}
  return Channels.find(selector, options);
});

*/