Meteor.startup(function () {
  //connect to kadira
  Kadira.connect(Meteor.settings.public.kadira.appId, Meteor.settings.private.kadira.appSecret)


  //load data from private folder

  /*
   if (Teams.find().count() === 0) {
      console.log("Importing private/teams.json to db")

      var data = JSON.parse(Assets.getText("teams.json"));

      data.forEach(function (item, index, array) {
          Teams.insert(item);
      })
  }
  */
});