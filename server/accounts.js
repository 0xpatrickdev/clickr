Meteor.startup(function () {
  // code to run on server at startup
 
  Accounts.loginServiceConfiguration.remove({
    service: 'facebook'
  });

  Accounts.loginServiceConfiguration.insert({
    service: 'facebook',
    appId: Meteor.settings.public.facebook.appId,
    secret: Meteor.settings.private.facebook.secret
  });

  Accounts.loginServiceConfiguration.remove({
    service: 'google'
  });

  Accounts.loginServiceConfiguration.insert({
    service: 'google',
    clientId: Meteor.settings.public.google.clientId,
    secret: Meteor.settings.private.google.secret
  });

});