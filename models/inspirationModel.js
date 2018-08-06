'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Food Schema
 */
var ProductSchema = new Schema({
  name: {
    type: String,
    unique: true,
  },

  arrImage : {
        type : Array,
        image : {
          type : String
        }
  },

  decriptions : {
  	type : String
  },

  createBy: {
    type : Schema.Types.ObjectId, ref : 'User'
  },

  created: {
    type: Date,
    default: Date.now
  }
});

mongoose.model('Inspiration', ProductSchema);
