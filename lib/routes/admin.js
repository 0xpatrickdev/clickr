FlowRouter.route( '/admin', {
  action: function() {
    BlazeLayout.render('mainLayout', { nav: "navbar", main: "admin"});
  }
});