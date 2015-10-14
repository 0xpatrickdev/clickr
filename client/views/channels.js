Template.channels.onCreated(function() {

});

Template.channels.onRendered(function() {

});

Template.channels.helpers({
	channels: function() {
		return Channels.find();
	},
	searchRes: function() {
		var res = Session.get('searchRes');
		if (res) {
			return {
				id: res.id,
				name: res.name,
				img: res.artwork_208x117
			}
		}
	},

});

Template.channels.events({
	'keypress input': function(event, value) {
		if (event.charCode == 13) {
			var param = $('#chSearch').val();
			Meteor.call('searchChannels', param, function (err, res) {
				if (res) {
					var res = JSON.parse(res.content).results[0];
					console.log("res", res);
					Session.set('searchRes', res);
				}
			});
		}
	},
	'click #addCh': function(event, template) {
		var id = $('#addCh').val();
		console.log("addCH", id);
		var channelItem = Session.get('searchRes');
		console.log("channelItem", channelItem);
		Meteor.call('insertChannel', channelItem, function (err, res) {
		});
	},
	'click #deleteCh': function(event, template) {
		var _id = this._id;
		console.log("_id", _id);
		Meteor.call('deleteCh', _id, function (err, res) {
		});
	},
	'click #goCh': function(event, template) {
		var short_name = this.short_name;
		FlowRouter.go("/channels/" + short_name);
	}
});