Meteor.publish('actors', function() {
  return Actors.find();
});

/*
Meteor.publish('actors', function(param) {
	var selector = {
		//field: param
	}
	var options = {
		//sort: {created_time: 1},
		//fields: {field1:1, field2:1, created_time:1},
		//limit: 1
	}
  return Actors.find(selector, options);
});
*/