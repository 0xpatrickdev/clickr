Template.shows.onCreated(function() {

});

Template.shows.onRendered(function() {

});

Template.shows.helpers({
	shows: function() {
		var selector = {
			//field: param
		}
		var options = {
			//sort: {created_time: 1},
			//fields: {field1:1, field2:1, created_time:1},
			limit: 50
		}
	  return Shows.find(selector, options);
	}
});

Template.shows.events({

});