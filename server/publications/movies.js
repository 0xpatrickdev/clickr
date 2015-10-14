Meteor.publish('movies', function() {
  return Movies.find();
});

/*
Meteor.publish('shows', function(param) {
	var selector = {
		//field: param
	}
	var options = {
		//sort: {created_time: 1},
		//fields: {field1:1, field2:1, created_time:1},
		//limit: 1
	}
  return Shows.find(selector, options);
});
*/