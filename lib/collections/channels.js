var Schemas = {};

Channels = new Meteor.Collection('channels');
ChannelList = new Meteor.Collection('channelList');

Schemas.Channels = new SimpleSchema({
  _id: {
    type: Number,
    label: "_id"
  },
  name: {
    type: String,
    label: "name",
    optional: true
  },
  short_name: {
    type: String,
    label: "short_name",
    optional: true
  },
  type: {
    type: String,
    label: "type",
    optional: true
  },
  artwork: {
    type: String,
    label: "artwork",
    optional: true
  },
  artwork_lg: {
    type: String,
    label: "artwork_lg",
    optional: true
  },
  updatedAt: {
    type: Date,
    autoValue: function() {
      if (this.isUpsert) {
        return new Date();
      }
    },
    denyInsert: true,
    optional: true
  }
});

Channels.attachSchema(Schemas.Channels);
ChannelList.attachSchema(Schemas.Channels);