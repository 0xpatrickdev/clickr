var apikey = Meteor.settings.public.guidebox.apikey;
var base = "http://api-public.guidebox.com/v1.43/US/" + apikey;

Meteor.methods({
	'getSources': function () {
		this.unblock();
		var url = base + "/sources/all"
		var result = HTTP.call("GET", url);
		
		if(result.statusCode===200) {
			var sourceArray = JSON.parse(result.content).results;
			Meteor.call('addSources', sourceArray, function (err, res) {});
			return sourceArray;
		}
	},
	'addSources': function( sourceArray ) {
		for(var i = 0; i < sourceArray.length; i++){
			var id = sourceArray[i].id;
			var sourceObj = sourceArray[i];
			var info = {
				_id: id,
				updatedAt: Date.now()
			}
			var source = _.extend(info, sourceObj)
			Sources.upsert(id, {$set: source}, {validationContext: 'upsertForm'}, function(err, res) {
					if (err){
						console.log("Error:", err);
				}
			});
		}
	}
});