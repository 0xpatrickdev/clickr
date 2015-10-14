Template.movie.onCreated(function() {
	var id = FlowRouter.getParam("_id");
	Meteor.call('getMovieInfo', id, function(err, res) {
		console.log("method fired");
		if (err) {
			console.log("error:", err);
		} else {
			console.log(res);
		}
	});
});

Template.movie.onRendered(function() {

});

Template.movie.helpers({
	info: function () {
		var id = FlowRouter.getParam("_id");
		return Movies.findOne({"_id": id})
	}
});

Template.movie.events({

});