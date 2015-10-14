var apikey = Meteor.settings.public.guidebox.apikey;
var base = "http://api-public.guidebox.com/v1.43/US/" + apikey;

Meteor.methods({
	'searchChannels': function ( param ) {
		this.unblock();
		var url = base + "/search/channel/title/" + param;
		var result = HTTP.call("GET", url);
		return result;
	},
	'getChannelInfo': function ( id ) {
		this.unblock();
		var url = base +"/channel/" + id;
		var result = HTTP.call("GET", url);
		return result;
	},
	'getAllChannels': function ( limit1 ) {
		this.unblock();
		var channelType = 'all'; // 'online', 'all', or 'television'
		var limit2 = 50; //current limit is 50 per req
		var url = base + "/channels/" + channelType + '/' + limit1 + '/' + limit2;
		var result = HTTP.call("GET", url);
		
		if(result.statusCode===200) {
			var channelArray = JSON.parse(result.content).results;
			Meteor.call('addChannels', channelArray, function (err, res) {});

			var total = JSON.parse(result.content).total_results;
			if (total > limit1) {
				newLimit = limit1 + 50;
				console.log("limit:", newLimit + '/' + total);
				Meteor.call('getAllChannels', newLimit, function (err, res) {});
			} else {
				return console.log("update complete");
			}
		}
	},
	'addChannels': function( channelArray ) {
		for(var i = 0; i < channelArray.length; i++){
			var id = channelArray[i].id;
			var channel = {
				_id: channelArray[i].id,
				name: channelArray[i].name,
				type: channelArray[i].channel_type,
				artwork: channelArray[i].artwork_208x117,
			}
			ChannelList.upsert(id, {$set: channel}, {validationContext: 'upsertForm'}, function(err, res) {
					if (err){
						console.log("Error:", err);
				}
			});
		}
	},
	'insertChannel': function( channelItem ) {
		this.unblock();
		console.log("channelItem", channelItem);
		channelIns = {
			_id: channelItem.id,
			name: channelItem.name,
			short_name: channelItem.short_name,
			type: channelItem.channel_type,
			artwork: channelItem.artwork_208x117,
			artwork_lg: channelItem.artwork_608x342
		}
		console.log("channelIns", channelIns);
		Channels.upsert( channelIns, {validationContext: 'upsertForm'}, function(err, res) {
			if (err){
			console.log("Error:", err);
			}
		});
	},
	'deleteCh': function ( _id ) {
		Channels.remove({_id});
		console.log(_id, "removed.");
	}
});