FlowRouter.route( '/', {
	action: function() {
  	BlazeLayout.render('mainLayout', { nav: "navbar", main: "home"});
  }
});

FlowRouter.route( '/actors', {
  action: function() {
    BlazeLayout.render('mainLayout', { nav: "navbar", main: "actors"});
  }
});


FlowRouter.route( '/genres', {
  action: function() {
    BlazeLayout.render('mainLayout', { nav: "navbar", main: "genres"});
  }
});


FlowRouter.route( '/profile', {
  action: function() {
    BlazeLayout.render('mainLayout', { nav: "navbar", main: "profile"});
  }
});
