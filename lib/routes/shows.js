var showRoutes = FlowRouter.group({
  prefix: '/shows',
  name: 'shows',
});

showRoutes.route( '/', {
  action: function() {
    BlazeLayout.render('mainLayout', { nav: "navbar", main: "shows"});
  },
});

showRoutes.route( '/:_id', {
  action: function(params, queryParams) {
    BlazeLayout.render('mainLayout', { nav: "navbar", main: "show"});
  },
});