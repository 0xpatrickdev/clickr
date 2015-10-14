Template.admin.onCreated(function() {

});

Template.admin.onRendered(function() {

});

Template.admin.helpers({
	channels: function() {
		return Channels.find();
	},
	showCount: function() {
		var channel = this.short_name;
		if (channel) {
			count = Shows.find({"channel": channel}).count()
		}
		return count;
	},
	showsLastUpdated: function() {
		var channel = this.short_name;
		if (channel) {
			updatedAt = Shows.find({"channel": channel}).fetch()[0].updatedAt
		}
		return updatedAt;
	},
	movieCount: function() {
		var channel = this.short_name;
		if (channel) {
			count = Movies.find({"channel": channel}).count()
		}
		return count;
	},
	moviesLastUpdated: function() {
		var channel = this.short_name;
		if (channel) {
			updatedAt = Movies.find({"channel": channel}).fetch()[0].updatedAt
		}
		return updatedAt;
	}
});

Template.admin.events({
	'click #getChannels': function() {
		var limit1 = 0;
		Meteor.call('getAllChannels', limit1, function (err, res) {
			if (err) {
				console.log("Error:", err);
			} else {
				console.log(res);
			}
		});
	},
	'click #updateShows': function( event, template) {
		var ch = this.short_name;
		console.log("shortname", ch);
		var limit1 = 0;
		Meteor.call('getShows', ch, limit1, function (err, res) {
			if (err) {
				console.log("Error:", err);
			} else {
				console.log(res);
			}
		});
	},
	'click #updateMovies': function( event, template) {
		var ch = this.short_name;
		console.log("shortname", ch);
		var limit1 = 0;
		Meteor.call('getMovies', ch, limit1, function (err, res) {
			if (err) {
				console.log("Error:", err);
			} else {
				console.log(res);
			}
		});
	},
});