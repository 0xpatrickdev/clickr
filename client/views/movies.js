Template.movies.onCreated(function() {

});

Template.movies.onRendered(function() {

});

Template.movies.helpers({
	movies: function() {
		var selector = {
			//field: param
		}
		var options = {
			//sort: {created_time: 1},
			//fields: {field1:1, field2:1, created_time:1},
			limit: 100
		}
	  return Movies.find(selector, options);
	}
});

Template.movies.events({
	
});