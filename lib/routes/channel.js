var channelRoutes = FlowRouter.group({
  prefix: '/channels',
  name: 'channels',
});

channelRoutes.route( '/', {
  action: function() {
    BlazeLayout.render('mainLayout', { nav: "navbar", main: "channels"});
  },
});

channelRoutes.route( '/:short_name', {
  action: function(params, queryParams) {
    BlazeLayout.render('mainLayout', { nav: "navbar", main: "channel"});
  },
});