var movieRoutes = FlowRouter.group({
  prefix: '/movies',
  name: 'movies',
});

movieRoutes.route( '/', {
  action: function() {
    BlazeLayout.render('mainLayout', { nav: "navbar", main: "movies"});
  },
});

movieRoutes.route( '/:_id', {
  action: function(params, queryParams) {
    BlazeLayout.render('mainLayout', { nav: "navbar", main: "movie"});
  },
});