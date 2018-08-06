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

  categoryId: {
  	type : Schema.Types.ObjectId, ref : 'Category'
  },

  arrImage : {
        type : Array,
        image : {
          type : String
        }
  },

  height: {
    type: Number
  },

  width: {
    type: Number
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

mongoose.model('Product', ProductSchema);
