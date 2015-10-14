var apikey = Meteor.settings.public.guidebox.apikey;
var base = "http://api-public.guidebox.com/v1.43/US/" + apikey;

Meteor.methods({
	'getMovies': function ( ch, limit1 ) {
		this.unblock();
		var platform = 'all'; // 'web', 'ios', 'android', 'all'
		var limit2 = 250;
		var url = base + "/movies/all/" + limit1 + '/' + limit2 + '/' + ch + '/' + platform;
		var result = HTTP.call("GET", url);
		if(result.statusCode===200) {
			var movieArray = JSON.parse(result.content).results;
			Meteor.call('addMovies', movieArray, ch, function (err, res) {});

			var total = JSON.parse(result.content).total_results;
			if (total > limit1) {
				newLimit = limit1 + 250;
				console.log("limit:", newLimit + '/' + total);
				Meteor.call('getMovies', ch, newLimit, function (err, res) {});
			} else {
				return console.log("update complete");
			}
		}
	},
	'addMovies': function( movieArray, ch ) {
		for(var i = 0; i < movieArray.length; i++){
			var id = movieArray[i].id;
			var show = {
				_id: movieArray[i].id,
				channel: ch,
				release_date: moment(movieArray[i].release_date)._d,
				release_year: movieArray[i].release_year,
				title: movieArray[i].title,
				rating: movieArray[i].rating,
				rottentomates: movieArray[i].rottentomates,
				imdb_id: movieArray[i].imdb_id,
				wikipedia_id: movieArray[i].wikipedia_id,
				freebase: movieArray[i].freebase,
				artwork: movieArray[i].poster_120x171,
				artwork_lg: movieArray[i].poster_400x570,
			}
			Movies.upsert(id, {$set: show}, {validationContext: 'upsertForm'}, function(err, res) {
				if (err){
					console.log("err:", err);
				}
			});
		}
	},
	'getMovieInfo': function ( id ) {
		var url = base + '/movie/' + id;
		var result = HTTP.call("GET", url);
		if(result.statusCode===200) {
			return result;
		}
	}
});