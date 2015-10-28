var apikey = Meteor.settings.public.guidebox.apikey;
var base = "http://api-public.guidebox.com/v1.43/US/" + apikey;

Meteor.methods({
	'getShows': function ( ch, limit1 ) {
		this.unblock();
		var sources = 'ch'; // 'free', 'tv_everywhere', 'subscription', 'purchase', 'all'
		var platform = 'all'; // 'web', 'ios', 'android', 'all'
		var limit2 = 250;
		var url = base + "/shows/" + ch + '/' + limit1 + '/' + limit2 + '/' + sources + '/' + platform;
		var result = HTTP.call("GET", url);
		if(result.statusCode===200) {
			var showArray = JSON.parse(result.content).results;
			Meteor.call('addShows', showArray, ch, function (err, res) {});
			
			var total = JSON.parse(result.content).total_results;
			if (total > limit1) {
				newLimit = limit1 + 250;
				console.log("limit:", newLimit + '/' + total);
				Meteor.call('getShows', ch, newLimit, function (err, res) {});
			} else {
				return console.log("update complete");
			}
		}
	},
	'getShowsbyChannel': function ( ch, limit1 ) {
		this.unblock();
		var sources = 'all'; // 'free', 'tv_everywhere', 'subscription', 'purchase', 'all'
		var platform = 'all'; // 'web', 'ios', 'android', 'all'
		var limit2 = 250;
		var url = base + "/shows/" + ch + '/' + limit1 + '/' + limit2 + '/' + sources + '/' + platform;
		var result = HTTP.call("GET", url);
		if(result.statusCode===200) {
			var showArray = JSON.parse(result.content).results;
			Meteor.call('addShows', showArray, ch, function (err, res) {});
			
			var total = JSON.parse(result.content).total_results;
			if (total > limit1) {
				newLimit = limit1 + 250;
				console.log("limit:", newLimit + '/' + total);
				Meteor.call('getShows', ch, newLimit, function (err, res) {});
			} else {
				return console.log("update complete");
			}
		}
	},
	'addShows': function( showArray, ch ) {
		console.log("add fired");
		for(var i = 0; i < showArray.length; i++){
			var id = showArray[i].id;
			var showObj = showArray[i];
			var info = {
				_id: id,
				channel: ch,
				updatedAt: Date.now()
			}
			var show = _.extend(info, showObj);
			
			Shows.upsert(id, {$set: show}, {validationContext: 'upsertForm'}, function(err, res) {
				if (err){
					console.log("err:", err);
				}
			});
		}
	},
	'getShowInfo': function ( id ) {
		var url = base + '/show/' + id;
		var result = HTTP.call("GET", url);
		if(result.statusCode===200) {
			var id = result.data.id;
			var showObj = result.data;
			var info = {
				_id: id,
				updatedAt: Date.now()
			}
			var show = _.extend(info, showObj);
			Movies.upsert(id, {$set: show}, {validationContext: 'upsertForm'}, function(err, res) {
				if (err){
					console.log("err:", err);
				}
			});
		}
	}
});