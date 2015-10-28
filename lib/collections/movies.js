var Schemas = {};

Movies = new Meteor.Collection('movies');

/* 
Schemas.Movies = new SimpleSchema({
 _id: {
    type: Number,
    label: "_id"
  },

  channel: {
    type: String,
    label: "channel",
    optional: true
  },
  release_date: {
    type: Date,
    label: "release_date",
    optional: true
  },
  release_year: {
    type: Number,
    label: "release_year",
    optional: true
  },
  title: {
    type: String,
    label: "title",
    optional: true
  },
  rating: {
    type: String,
    label: "rating",
    optional: true
  },
  rottentomates: {
    type: Number,
    label: "rottentomates",
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

Movies.attachSchema(Schemas.Movies);
*/  