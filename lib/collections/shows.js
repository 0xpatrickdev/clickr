var Schemas = {};

Shows = new Meteor.Collection('shows');

Schemas.Shows = new SimpleSchema({
  _id: {
    type: Number,
    label: "_id"
  },
  channel: {
    type: String,
    label: "channel",
    optional: true
  },
  first_aired: {
    type: Date,
    label: "first_aired",
    optional: true
  },
  title: {
    type: String,
    label: "title",
    optional: true
  },
  imdb_id: {
    type: String,
    label: "imdb_id",
    optional: true
  },
  wikipedia_id: {
    type: Number,
    label: "wikipedia_id",
    optional: true
  },
  freebase: {
    type: String,
    label: "freebase",
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

Shows.attachSchema(Schemas.Shows);