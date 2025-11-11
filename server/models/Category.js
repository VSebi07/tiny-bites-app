const mongoose = require('mongoose');

const Category = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  display: {
    type: String,
    required: true,
    unique: true
  }
}, {timestamps: true});

module.exports = mongoose.model('category', Category);
