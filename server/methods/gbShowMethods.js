var apikey = Meteor.settings.public.guidebox.apikey;
var base = "http://api-public.guidebox.com/v1.43/US/" + apikey;

Meteor.methods({
	'getShows': function ( ch, limit1 ) {
		this.unblock();
		var sources = 'all'; // 'free', 'tv_everywhere', 'subscription', 'purchase', 'all'
		var platform = 'all'; // 'web', 'ios', 'android', 'all'
		var limit2 = 250;
		var url = base + "/shows/" + ch + '/' + limit1 + '/' + limit2 + '/' + sources + '/' + platform;
		var result = HTTP.call("GET", url);
		if(result.statusCode===200) {
			var showArray = JSON.parse(result.content).results;
			Meteor.call('addShows', showArray, ch, function (err, res) {});
			return showArray
		}
	},
	'addShows': function( showArray, ch ) {
		for(var i = 0; i < showArray.length; i++){
			var id = showArray[i].id;
			var show = {
				_id: showArray[i].id,
				channel: ch,
				first_aired: moment(showArray[i].first_aired)._d,
				title: showArray[i].title,
				imdb_id: showArray[i].imdb_id,
				wikipedia_id: showArray[i].wikipedia_id,
				freebase: showArray[i].freebase,
				artwork: showArray[i].artwork_208x117,
				artwork_lg: showArray[i].artwork_608x342
			}
			Shows.upsert(id, {$set: show}, {validationContext: 'upsertForm'}, function(err, res) {
				if (err){
					var show = {
						_id: showArray[i].id,
						channel: ch,
						title: showArray[i].title,
						imdb_id: showArray[i].imdb_id,
						wikipedia_id: showArray[i].wikipedia_id,
						freebase: showArray[i].freebase,
						artwork: showArray[i].artwork_208x117,
						artwork_lg: showArray[i].artwork_608x342
					}
					Shows.upsert(id, {$set: show}, {validationContext: 'upsertForm'}, function(err, res) {
					});
				}
			});
		}
	},
});